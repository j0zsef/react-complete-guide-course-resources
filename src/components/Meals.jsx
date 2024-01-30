import { useEffect, useState } from "react";
import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      try {
        const data = await fetch("http://localhost:3000/meals");
        const parsedData = await data.json();
        if (!data.ok) {
          throw "Couldn't fetch meals!";
        }
        const mealItems = parsedData.map((meal) => (
          <MealItem key={meal.id} {...meal} />
        ));
        setMeals(() => mealItems);
      } catch (e) {
        throw e;
      }
    }

    fetchMeals();
  }, []);
  return <ul id="meals">{meals}</ul>;
}
