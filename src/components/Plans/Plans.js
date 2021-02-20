import React, { useState, useEffect, useHistory } from "react";
import "./Plans.scss";

const Plans = ({onDone}) => {
  const [allMeals, setAllMeals] = useState(null); //na potrzeby JSON serwera
  const [plan, setPlan] = useState({
    monday: {
      breakfast: "",
      lunch: "",
      snack: "",
      dinner: "",
    },
    tuesday: {
      breakfast: "",
      lunch: "",
      snack: "",
      dinner: "",
    },
    wednesday: {
      breakfast: "",
      lunch: "",
      snack: "",
      dinner: "",
    },
    thursday: {
      breakfast: "",
      lunch: "",
      snack: "",
      dinner: "",
    },
    friday: {
      breakfast: "",
      lunch: "",
      snack: "",
      dinner: "",
    },
    saturday: {
      breakfast: "",
      lunch: "",
      snack: "",
      dinner: "",
    },
    sunday: {
      breakfast: "",
      lunch: "",
      snack: "",
      dinner: "",
    },
  });

  const fetchAllMeals = () => {
    fetch("http://localhost:8000/meals")
      .then((response) => response.json())
      .then((data) => {
        setAllMeals(data);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    /* to jest odpowiednik ComponentDidMount w zapisie klasowym */
    fetchAllMeals();
  }, []); /*jeśli to usune, to jest infinite loop*/

  //mozna to wywalic - obrazuje, jaka jest kolejnosc sciagania danych z JSON'a
  // let counter = 0;
  // counter++;
  // console.log(counter);
  // console.log(allMeals != null ? allMeals : "brak danych");
  // console.log(allMeals);

  if (allMeals != null) {

    const handleList = (e) => {
      e.preventDefault();
      let ingredientsArray = [];
      for (const day in plan) {
        ingredientsArray = [
          ...ingredientsArray,
          ...plan[day]["breakfast"],
          ...plan[day]["lunch"],
          ...plan[day]["snack"],
          ...plan[day]["dinner"],
        ];

      }
      
      // handleRedirect();

      console.log(ingredientsArray);
      onDone(ingredientsArray);
      
    };
    
    // const handleRedirect = () => {
    //   console.log("czy działa?")
    //   // useHistory().push("/lists");
    //   window.location.href = "/lists";
    // }

    ///////////// tu ogarniam śniadania z calego tygodnia ///////////////

    const handleMondayBreakfastChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.monday.breakfast = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleTuesdayBreakfastChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.tuesday.breakfast = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleWednesdayBreakfastChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.wednesday.breakfast = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleThursdayBreakfastChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.thursday.breakfast = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleFridayBreakfastChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.friday.breakfast = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleSaturdayBreakfastChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.saturday.breakfast = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleSundayBreakfastChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.sunday.breakfast = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    ///////////// tu ogarniam obiady z calego tygodnia ///////////////

    const handleMondayLunchChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.monday.lunch = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleTuesdayLunchChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.tuesday.lunch = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleWednesdayLunchChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.wednesday.lunch = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleThursdayLunchChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.thursday.lunch = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleFridayLunchChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.friday.lunch = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleSaturdayLunchChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.saturday.lunch = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleSundayLunchChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.sunday.lunch = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    ///////////// tu ogarniam przekąski z calego tygodnia ///////////////

    const handleMondaySnackChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.monday.snack = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleTuesdaySnackChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.tuesday.snack = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleWednesdaySnackChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.wednesday.snack = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleThursdaySnackChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.thursday.snack = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleFridaySnackChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.friday.snack = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleSaturdaySnackChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.saturday.snack = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleSundaySnackChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.sunday.snack = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    ///////////// tu ogarniam kolacje z calego tygodnia ///////////////

    const handleMondayDinnerChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.monday.dinner = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleTuesdayDinnerChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.tuesday.dinner = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleWednesdayDinnerChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.wednesday.dinner = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleThursdayDinnerChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.thursday.dinner = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleFridayDinnerChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.friday.dinner = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleSaturdayDinnerChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.saturday.dinner = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    const handleSundayDinnerChange = (e) => {
      const oldPlan = { ...plan };
      allMeals.forEach((meal) => {
        if (meal.name === e.target.value) {
          oldPlan.sunday.dinner = [...meal.ingredients];
        }
      });
      setPlan(oldPlan);
    };

    // to chcialam wrzucic do srodka kazdego selecta, ale nie dzialalo, wiec wrzucilam calosc zamiast zmiennej
    // let mealsList = allMeals.map((element, i) => {
    //  return <option key={i}>{element.name}</option>;
    // });

    return (
      <div className="weekly-plan">
        <table>
          <thead className="table-header">
            <tr className="week-days">
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
            <tr className="breakfast-row">
              <td>Śniadanie</td>
              <td>
                <select onChange={handleMondayBreakfastChange}>
                  <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleTuesdayBreakfastChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleWednesdayBreakfastChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleThursdayBreakfastChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleFridayBreakfastChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleSaturdayBreakfastChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleSundayBreakfastChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
            </tr>

            <tr className="lunch-row">
              <td>Obiad</td>
              <td>
                <select onChange={handleMondayLunchChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleTuesdayLunchChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleWednesdayLunchChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleThursdayLunchChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleFridayLunchChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleSaturdayLunchChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleSundayLunchChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
            </tr>

            <tr className="snack-row">
              <td>Przekąska</td>
              <td>
                <select onChange={handleMondaySnackChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleTuesdaySnackChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleWednesdaySnackChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleThursdaySnackChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleFridaySnackChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleSaturdaySnackChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleSundaySnackChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
            </tr>

            <tr className="dinner-row">
              <td>Kolacja</td>
              <td>
                <select onChange={handleMondayDinnerChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleTuesdayDinnerChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleWednesdayDinnerChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleThursdayDinnerChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleFridayDinnerChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleSaturdayDinnerChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
              <td>
                <select onChange={handleSundayDinnerChange}>
                <option></option>
                  {allMeals.map((element, i) => {
                    return <option key={i}>{element.name}</option>;
                  })}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <button className="btn-small" onClick={handleList}>
          Lista zakupów
        </button>

        {/* <Link to="/lists" className="btn-small" onClick={handleList}>
          Lista zakupów
        </Link> */}

      </div>
    );
  } else {
    return <p>Ładuję dane..............</p>;
  }
};

export default Plans;
