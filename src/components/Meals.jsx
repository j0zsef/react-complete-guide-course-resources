import { useEffect, useState } from "react";
import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      try {
        const data = await fetch("http://localhost:3000/meals");
        const parsedData = await data.json();
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
  return <div id="meals">{meals}</div>;
}
