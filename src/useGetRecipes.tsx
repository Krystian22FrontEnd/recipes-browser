import axios from "axios";
import { useEffect, useState } from "react";

export const useGetRecipes = () => {
  const [recipes, setRecipes] = useState<string>("");

    useEffect(() => {
        const axiosData = async () => {
            try {
                const getData = "maee";
                const response = await axios.get("somettjing")
            } catch(error) {
                console.log(error)
            }
        }
        }, [])

};
