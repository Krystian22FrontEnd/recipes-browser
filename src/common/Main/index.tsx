import { LatestRecipes } from "./LatestRecipes";
import { PopularPicks } from "./PopularPicks";
import { useGetRecipes } from "../../useGetRecipes";
import { LoadingPage } from "../LoadingPage";
import { ErrorPage } from "../ErrorPage";

const Main = () => {
  const recipes = useGetRecipes();

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
