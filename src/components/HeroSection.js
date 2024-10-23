import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button className='btns' 
            buttonStyle='btn--outline'
            buttonSizes='btn--large'>GET STARTED
            </Button>
            <Button className='btns' 
            buttonStyle='btn--primary'
            buttonSizes='btn--large'>WATCH TRAILER <i class="fa-solid fa-circle-play"></i>
            </Button>
        </div>

    </div>
  )
}

export default HeroSection
