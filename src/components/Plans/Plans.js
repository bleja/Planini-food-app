import React, { useState, useEffect } from "react";
import test from "./test";

import "./Plans.scss";

const Plans = () => {
  const [allMeals, setAllMeals] = useState([]); //na potrzeby Json serwer

  const fetchAllMeals = () => {
    fetch("http://localhost:3000/meals")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setAllMeals(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAllMeals();
  }, []); /*jeśli to usune, to jest infinite loop*/

  console.log(allMeals[0]);

  // console.log(allMeals[0]) /* Czemu obie console.logi wyswietlaja sie po 2 razy? czemu nie moge dostac sie do wartosci kluczy? */
  // console.log(allMeals[1]);

  // var objParsed = JSON.parse(allMeals[0]);
  // console.log(objParsed);

  // const jsonText = JSON.stringify(allMeals);
  // JSON.parse(jsonText);

  // console.log(jsonText[0].name);

  //////////////////tu się zaczyna rozwiazanie z renderem selecta ///////////

  //to chcialam wrzucic do srodka kazdego selecta
  
  // let mealsList = test.forEach((element, i) => {
  //   return <option key={i}>{element.name}</option>;
  // });


  return (
    <div className="weekly-plan">
      <table>
        <thead className="table-header">
          <tr>
            <th></th>
            <th>Poniedziałek</th>
            <th>Wtorek</th>
            <th>Środa</th>
            <th>Czwartek</th>
            <th>Piątek</th>
            <th>Sobota</th>
            <th>Niedziela</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Śniadanie</td>
            <td>
              <select>
                <option>{"mealsList"}</option> 
              </select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
          </tr>

          <tr>
            <td>Obiad</td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
          </tr>

          <tr>
            <td>Przekąska</td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
          </tr>

          <tr>
            <td>Kolacja</td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
            <td>
              <select></select>
            </td>
          </tr>
        </tbody>
      </table>

      <button className="btn-small">Lista zakupów</button>
    </div>
  );
};

export default Plans;
