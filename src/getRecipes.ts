import axios from "axios";
import { useEffect, useState } from "react";

interface Meal {
  id: number;
  name: string;
  image: string
}

type Status =
  | { status: "loading"; data: Meal[] }
  | { status: "success"; data: Meal[] }
  | { status: "error"; data: Meal[] };

export const useGetRecipes = () => {
  const [recipes, setRecipes] = useState<Status>({
    status: "loading",
    data: []
  });

  useEffect(() => {
    const axiosData = async () => {
      try {
        const getData = "https://dummyjson.com/recipes?limit=12&skip=10";
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
