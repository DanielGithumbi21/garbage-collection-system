import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>YOUR WASTE,OUR WORRY</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Link to="/banner">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Get Started
        </Button>
        </Link>
        <Link to ="/banner">
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          View Trailer
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;