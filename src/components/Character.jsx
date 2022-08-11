import React from 'react'

const Character = ({character}) => {

    return (
        <section  >
            <h2>{character.name}</h2>
            <img className='title-img' src={character.image} alt={character.name} />
            <h3>Gender: {character.gender}</h3>
            <h3>Species: {character.species}</h3>
            <h3>Origin: {character.origin.name}</h3>
        </section>
    )
}

export default Character