import axios from "axios";
import { useEffect, useState } from "react";

interface Meal {
  id: number;
  name: string;
}

type Status =
  | { status: "loading"; data?: Meal }
  | { status: "success"; data: Meal[] }
  | { status: "error" };

export const useGetRecipes = () => {
  const [recipes, setRecipes] = useState<Status>({
    status: "loading",
  });

  useEffect(() => {
    const axiosData = async () => {
      try {
        const getData = "https://dummyjson.com/recipes";
        const response = await axios.get<{ recipes: Meal[] }>(`${getData}`);
        setRecipes({
          status: "success",
          data: response.data.recipes,
        });
      } catch (error) {
        setRecipes({
          status: "error",
        });
      }
    };
    setTimeout(axiosData, 1000);
  }, []);
  return recipes;
};
