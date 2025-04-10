import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

interface Meal {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  prepTimeMinutes: number;
  instructions: string[];
  ingredients: string[];
  cuisine: string;
  servings: number;
  difficulty: string;
  caloriesPerServing: number;
  mealType: string[];
}

type Status =
  | { status: "loading"; data: Meal[] }
  | { status: "success"; data: Meal[] }
  | { status: "error"; data: Meal[] };

export const useGetRecipes = () => {
  const [recipes, setRecipes] = useState<Status>({
    status: "loading",
    data: [],
  });

  const location = useLocation();
  const { typeName, id } = useParams();

  const allowedTags = ["Asian", "Italian", "Greek", "Brazilian"];
  const allowedMealType = [
    "Breakfast",
    "Lunch",
    "Appetizer",
    "Dinner",
    "Dessert",
    "Beverage",
  ];

  const changeApiURL = () => {
    if (id) {
      return `https://dummyjson.com/recipes/${id}`;
    }

    if (location.pathname === "/") {
      return "https://dummyjson.com/recipes?sortBy=reviewCount&order=desc&limit=12";
    }

    if (!typeName) {
      return "https://dummyjson.com/recipes?limit=0";
    }

    const capitalized = typeName.charAt(0).toUpperCase() + typeName.slice(1);

    if (allowedTags.includes(capitalized)) {
      return `https://dummyjson.com/recipes/tag/${capitalized}`;
    }

    if (allowedMealType.includes(capitalized)) {
      return `https://dummyjson.com/recipes/meal-type/${capitalized}`;
    }

    return "https://dummyjson.com/recipes?limit=0";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(changeApiURL());

        if (id) {
          setRecipes({
            status: "success",
            data: [response.data],
          });
        } else {
          setRecipes({
            status: "success",
            data: response.data.recipes || response.data,
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setRecipes({
          status: "error",
          data: [],
        });
      }
    };

    setTimeout(fetchData, 1000);
  }, [location.pathname]);

  return recipes;
};
