import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import PokemonList from '../PokemonList';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <PokemonList />
           
           
        </>
    )
}

export default Home;