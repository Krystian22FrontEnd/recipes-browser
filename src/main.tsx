import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";
import { GlobalStyles } from "./GlobalStyles.ts";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import App from "./App.tsx";
import { AllRecipes } from "./common/AllRecipes/index.tsx";
import { Cuisine } from "./common/Categories/Cuisine/index.tsx";
import { Categories } from "./common/Categories/index.tsx";
import { RecipeDetails } from "./common/RecipeDetails/index.js";

const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    { path: "/allRecipes", element: <AllRecipes /> },
    { path: "/categories", element: <Categories /> },
    { path: "/category/:typeName", element: <Cuisine /> },
    { path: "/:id", element: <RecipeDetails /> },
  ],
  { basename: "/recipes-browser/" }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
