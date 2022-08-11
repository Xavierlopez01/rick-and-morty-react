import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './Character'

const NavPage = (props) => {
    return (
        <div className='btn__next'>
            <p className='title__page'>Page {props.page}</p>
            <button className='btn'
            onClick={() => props.setPage(props.page + 1)}>
                Next
            </button>
        </div>
    )
}

const CardCharacters = ({ character }) => {

    const [characters, setCharacters] = useState()
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const URL = `https://rickandmortyapi.com/api/character?page=${page}`
        axios.get(URL)
            .then(res => setCharacters(res.data.results))
            .catch(err => console.log(err))
        setLoading(false)
    }, [page])
    if (loading) {
        return (
            <img src="./../public/loading.png" alt="" />
        )
    }
    return (
        <article >
            <article >
                <NavPage page={page} setPage={setPage}/>
            </article>
            
            <article className='card'>
                {
                    characters?.map(character => {
                        return (
                            <div className='card__container' key={character.id}>
                                <Character character={character} />
                            </div>
                        )
                    })
                }
            </article>
            <article >
            <NavPage page={page} setPage={setPage}/>
            </article>

        </article>

    )
}

export default CardCharacters