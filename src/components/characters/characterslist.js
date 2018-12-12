import React from 'react'
import characters from './characters'
import {Link} from 'react-router-dom'

const CharactersList = () =>{

    return(
<div>
    <h3>Characters List</h3>
    {console.log(characters)}
    <div style ={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'100vw',
        height:'100vh',
        flexWrap:'wrap'
    }}>

    {characters.map(char => {
        return(
            <section style ={{margin:'10px'}} key = {char.id}>
            <Link to={`/characters/${char.id}`} >
            <img src={char.image} alt="RickAndMortyCharacter"/>
            </Link>
            <h4>{char.name}</h4>
            </section>
        )
    })}
    </div>
</div>
    )
}
export default CharactersList