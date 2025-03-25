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

export const useGetFullRecipesList = () => {
  const [allRecipes, setAllRecipes] = useState<Status>({
    status: "loading",
    data: []
  });

  useEffect(() => {
    const axiosData = async () => {
      try {
        const getData = "https://dummyjson.com/recipes?limit=0&sortBy=id&order=desc";
        const response = await axios.get<{ recipes: Meal[] }>(`${getData}`);
        setAllRecipes({
          status: "success",
          data: response.data.recipes,
        });
      } catch (error) {
        setAllRecipes({
          status: "error",
          data: [],
        });
      }
    };
    setTimeout(axiosData);
  }, []);
  return allRecipes;
};
