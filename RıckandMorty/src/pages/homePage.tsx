import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Characters from '../components/Characters';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
    const [characters, setCharacters] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [filters, setFilters] = useState({
        name: '',
        status: '',
        species: '',
        gender: ''
    });

    useEffect(() => {
        fetchCharacters(currentPage);
    }, [currentPage]);

    useEffect(() => {
        filterCharacters();
    }, [filters, characters]);

    async function fetchCharacters(page: any) {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page + 1}`);
        const data = await response.json();
        setCharacters(data.results);
        setPageCount(data.info.pages);
    }

    function handlePageClick(data: any) {
        setCurrentPage(data.selected);
    }

    function filterCharacters() {
        const filtered = characters.filter(character => {
            return character.name.toLowerCase().includes(filters.name.toLowerCase())
                && (!filters.status || character.status === filters.status)
                && (!filters.species || character.species === filters.species)
                && (!filters.gender || character.gender === filters.gender);
        });
        setFilteredCharacters(filtered);
    }

    function handlerSearchFilter(e: any) {
        const value = e.target.value;
        setFilters({ ...filters, name: value });
    }

    function setStatusFilter(status : any) {
        setFilters({ ...filters, status });
    }

    function setSpeciesFilter(species: any) {
        setFilters({ ...filters, species });
    }

    function setGenderFilter(gender: any) {
        setFilters({ ...filters, gender });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <input type="text" value={filters.name || ''} onChange={handlerSearchFilter} className="form-control" placeholder="Karakter Adı" />
                </div>
                <div className="col">
                    <select value={filters.status || ''} onChange={(e) => setStatusFilter(e.target.value)} className="form-select">
                        <option value="">Durum Seçin</option>
                        <option value="Alive">Alive</option>
                        <option value="Dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
                <div className="col">
                    <select value={filters.species || ''} onChange={(e) => setSpeciesFilter(e.target.value)} className="form-select">
                        <option value="">Tür Seçin</option>
                        <option value="Human">Human</option>
                        <option value="Alien">Alien</option>
                    </select>
                </div>
                <div className="col">
                    <select value={filters.gender || ''} onChange={(e) => setGenderFilter(e.target.value)} className="form-select">
                        <option value="">Cinsiyet Seçin</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
            </div>

            <div className="row mt-3 justify-content-center">
                <div className="col">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ReactPaginate
                            pageCount={pageCount}
                            pageRangeDisplayed={5}
                            marginPagesDisplayed={2}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                        />
                    </div>
                </div>
            </div>

            <div className="row">
    {filteredCharacters.length > 0 ? (
        filteredCharacters.map((character) => (
            <div key={character.id} className="col-3">
                <Characters character={character} />
            </div>
        ))
    ) : (
        characters.map((character) => (
            <div key={character.id} className="col-3">
                <Characters character={character} />
            </div>
        ))
    )}
</div>
        </div>
    );
}
