import React, { useEffect, useState } from 'react'

export default function LocationPage() {
    const [location, setLocation] = useState([]);
    const [page, setPage]=useState(1)

    useEffect(() => {
      const fetchData = async () => {

          let allData:any = [];
          let nextPage = 1;

          do {
              const response = await fetch(`https://rickandmortyapi.com/api/location?page=${nextPage}`);
              const jsonData = await response.json();

              allData = [...allData, ...jsonData.results];
              nextPage = jsonData.info.next ? nextPage + 1 : null;
          } while (nextPage);

          setLocation(allData);
      };
      fetchData();
    },[]);

   return (
    <div>
        <h1>My Component</h1>
        <ul>
            {location.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
);
}
