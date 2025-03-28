import { LatestRecipes } from "./LatestRecipes";
import { PopularPicks } from "./PopularPicks";
import { useGetPopularRecipes } from "../../useGetPopularRecipes";
import { LoadingPage } from "../LoadingPage";
import { ErrorPage } from "../ErrorPage";

const Main = () => {
  const recipes = useGetPopularRecipes();

  return (
    <>
      {recipes.status === "loading" ? (
        <LoadingPage />
      ) : recipes.status === "error" ? (
        <ErrorPage />
      ) : (
        <>
          <PopularPicks />
          <LatestRecipes />
        </>
      )}
    </>
  );
};

export default Main;
