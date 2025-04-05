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

        case "/category/asian":
          return "https://dummyjson.com/recipes/tag/Asian";

      case "/category/italian":
        return "https://dummyjson.com/recipes/tag/Italian";

        case "/category/greek":
          return "https://dummyjson.com/recipes/tag/Greek";

          case "/category/brazilian":
            return "https://dummyjson.com/recipes/tag/Brazilian";
   
            
            case "/category/breakfast":
              return "https://dummyjson.com/recipes/meal-type/Breakfast";
            
            case "/category/lunch":
              return "https://dummyjson.com/recipes/meal-type/Lunch";

            case "/category/appetizer":
              return "https://dummyjson.com/recipes/meal-type/Appetizer";

          case "/category/dinner":
            return "https://dummyjson.com/recipes/meal-type/Dinner";

            case "/category/dessert":
              return "https://dummyjson.com/recipes/meal-type/Dessert";

              case "/category/beverage":
                return "https://dummyjson.com/recipes/meal-type/Beverage";

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
