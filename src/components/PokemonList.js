import React, { useEffect, useState } from 'react';
import './PokemonList.css';

const itemsPerPage = 10;
function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    

    const fetchPokemons = () => {
        setLoading(true);
        fetch('https://dummyapi.online/api/pokemon')
            .then((response) => response.json())
            .then((data) => {
                setPokemons(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                setLoading(false); 
            });
    };
    

    useEffect(() => {
        fetchPokemons();
    }, []);

    if (loading) {
        return <div className='loading-api'>Loading...</div>; 
    }

    const filteredPokemons = pokemons.filter((pokemon) => 
        pokemon.pokemon.toLowerCase().includes(searchText.toLowerCase()) ||
        pokemon.id.toString().includes(searchText)
    );

    const getresult = () => {
        const indexOfLastPokemon = currentPage * itemsPerPage;
        const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;
        return  filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
        
    }

    const totalPages = Math.ceil(filteredPokemons.length / itemsPerPage);

    const renderPageButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button 
                    key={i} 
                    onClick={() => setCurrentPage(i)} 
                    className={currentPage === i ? 'active' : ''}
                >   
                    {i}
                    
                </button>
            );
        }
        return buttons;
    };

    return (
        <div className='pokemon-container'>
            <h1 className='pokemon-title'>Pokemon List</h1>

            <div className='search-pokemon'>
                <form className='pokemon-form' onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="text" 
                        placeholder="Search Pokemon" 
                        className="search-input" 
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
            
            <div className='pokemon-list'>

                
                {getresult().map((pokemon) => (
                    <div className='fetch-pokemon card' key={pokemon.id}>
                        <div className='pokemon-img'>
                            <img src={pokemon.image_url} alt={pokemon.pokemon} className='pokemon-image' />
                        </div>
                        <h3>{`Pokemon: ${pokemon.pokemon}`}</h3>
                        <p>{`Id: ${pokemon.id}`}</p>
                        <p>{`Type: ${pokemon.type}`}</p>
                        <p>{`Abilities: ${pokemon.abilities.join(', ')}`}</p>
                    </div>
                ))}

            </div>

            <div className='pagination'>
                <button onClick={() => setCurrentPage((prev) => (prev - 1))} disabled={currentPage === 1}>
                    Prev
                </button>

                {renderPageButtons()}

                <button onClick={() => setCurrentPage((prev) => (prev + 1))} disabled={currentPage === totalPages}>
                    Next 
                </button>
            </div>
        </div>
    );
}

export default PokemonList;
