import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

interface Meal {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  prepTimeMinutes: number;
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

  const changeApiURL = () => {
    switch (location.pathname) {
      case "/":
        return "https://dummyjson.com/recipes?sortBy=reviewCount&order=desc&limit=12";
      case "/allRecipes":
        return "https://dummyjson.com/recipes?limit=0&sortBy=id&order=desc";
      case "/category/italian":
        return "https://dummyjson.com/recipes/tag/Italian";
        case "/category/pakistani":
          return "https://dummyjson.com/recipes/tag/Pakistani";
      default:
    }
  };

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios.get<{ recipes: Meal[] }>(
          `${changeApiURL()}`
        );

        setRecipes({
          status: "success",
          data: response.data.recipes,
        });
      } catch (error) {
        setRecipes({
          status: "error",
          data: [],
        });
      }
    };
    setTimeout(axiosData, 1000);
  }, [location.pathname]);
  return recipes;
};
