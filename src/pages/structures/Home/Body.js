import axios from 'axios';
import React, {useState, useEffect} from 'react';
import PokemonCards from '../../../components/PokemonCards';
import ContactMe from '../../../components/ContactMe';

const Body = () => {
    const [pokemon, setPokemon] = useState([]);
    
    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/').then((res)=>{
            console.log(res.data.results);
            setPokemon(res.data.results);
        })
    };

    return(
        <>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className='title'>Hello, Pokemon Hunter</h1>
                            <h2 className='title'>Selamat Datang Di Dunia Pokemon</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col mt-5'>
                            <h3>List Pokemon</h3>
                        </div>
                    </div>
                    <div className="row">
                        {pokemon.map((pokemon, index) => {
                            return (
                                <PokemonCards key={index} name={pokemon.name} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`} species={index+1}/>
                            );
                        })}
                    </div>
                </div>
                <ContactMe />
            </main>
        </>
    );
}

export default Body;