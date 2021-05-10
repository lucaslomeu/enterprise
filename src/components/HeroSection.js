import React from 'react';
import { Button } from './Button';

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <img src="/"> */}
      <h1>SIGMA</h1>
      <p>Desenvolvedora SIGMA</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
