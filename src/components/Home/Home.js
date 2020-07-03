import React, { useState } from 'react';
import './Home.scss';

//baza kodu - wyswietlanie buttonow
// const Home = () => { 
//     return (
//       <div className="home-style">
//         <button className="btn-big"><a href="">Inspiracje</a></button>
//         <button className="btn-big"><a href="">Dodaj posiłek</a></button>
//         <button className="btn-big"><a href="">Zaplanuj tydzień</a></button>
//         <button className="btn-big"><a href="">Lista zakupów</a></button>
//       </div>
//     );
// }

// Tak ma byc docelowo, ale skad ja mam przekazac ten stan czy jest loggedIn czy nie?

const Home = () => { 
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  if (userLoggedIn == true ) {
    return (
      <div className="home-style">
        {/* <button className="btn-big"><a href="">Inspiracje</a></button> */}
        <button className="btn-big"><a href="http://localhost:3000/#/meals">Dodaj posiłek</a></button>
        <button className="btn-big"><a href="http://localhost:3000/#/plans">Zaplanuj tydzień</a></button>
        <button className="btn-big"><a href="http://localhost:3000/#/lists">Lista zakupów</a></button>
      </div>
    );
  } else {
    return (
      <div className="login-style">
      <h2>Witaj w Planini!</h2>
      <h3>Zaloguj się, aby móc korzystać z aplikacji</h3>

      <label>
        E-mail:
        <input type="text" placeholder="E-mail"></input>
      </label>
      <label>
        Hasło:
        <input type="text" placeholder="Hasło"></input>
        </label>
        <button className="btn-small">Zaloguj</button>
      </div>

    ) 
  }
}

export default Home;
  