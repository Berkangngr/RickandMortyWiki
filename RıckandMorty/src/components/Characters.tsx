import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { CharacterType } from '../types/character';

export default function Characters({character}:{character:CharacterType}) {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={character.image} />
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <h5>{character.species}</h5>
            <h6>{character.type}</h6>
            <p>{character.status}</p>
            <p>{character.gender}</p>
            <p>{character.location.name}</p>
            <Button variant="primary">Karakter Detayları</Button>
          </Card.Body>
        </Card>
      );
}
