import axios from "axios";
import { useEffect, useState } from "react";

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

export const useGetPopularRecipes = () => {
  const [recipes, setRecipes] = useState<Status>({
    status: "loading",
    data: []
  });

  useEffect(() => {
    const axiosData = async () => {
      try {
        const getData = "https://dummyjson.com/recipes?sortBy=reviewCount&order=desc&limit=12";
        const response = await axios.get<{ recipes: Meal[] }>(`${getData}`);
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
    setTimeout(axiosData);
  }, []);
  return recipes;
};
