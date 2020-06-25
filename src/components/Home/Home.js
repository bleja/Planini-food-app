import React from 'react';
import './Home.scss';

function Home() {
  return (
    <div className="home-style">
      <button className="btn-big"><a href="">Inspiracje</a></button>
      <button className="btn-big"><a href="">Dodaj posiłek</a></button>
      <button className="btn-big"><a href="">Zaplanuj tydzień</a></button>
      <button className="btn-big"><a href="">Lista zakupów</a></button>
    </div>
  );
}

export default Home;
