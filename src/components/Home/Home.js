import React, { useState } from "react";
import "./Home.scss";

const Home = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  if (userLoggedIn == true) {
    //true pokazuje guziki, false pokazuje formularz logowania
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
          <input type="password" placeholder="Hasło"></input>
        </label>
        <button className="btn-small">Zaloguj</button>{" "}
        {/* docelowo tu bedzie onClick zbierajacy dane logowania */}
      </div>
    );
  } else {
    return (
      <div className="home-style">
        {/* <button className="btn-big"><a href="">Inspiracje</a></button> */}
        <button className="btn-big">
          <a href="http://localhost:3000/#/meals">Dodaj posiłek</a>
        </button>
        <button className="btn-big">
          <a href="http://localhost:3000/#/plans">Zaplanuj tydzień</a>
        </button>
        <button className="btn-big">
          <a href="http://localhost:3000/#/lists">Lista zakupów</a>
        </button>
      </div>
    );
  }
};

export default Home;
