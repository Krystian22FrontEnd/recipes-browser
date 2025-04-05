import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";
import { GlobalStyles } from "./GlobalStyles.ts";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import App from "./App.tsx";
import { AllRecipes } from "./common/AllRecipes/index.tsx";
import { Cuisine } from "./common/categories/Cuisine/index.tsx";

const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    { path: "/allRecipes", element: <AllRecipes /> },
    { path: "/categories", element: <Cuisine /> },
    { path: "/category/asian", element: <Cuisine /> },
    { path: "/category/italian", element: <Cuisine /> },
    { path: "/category/greek", element: <Cuisine /> },
    { path: "/category/brazilian", element: <Cuisine /> },
    { path: "/category/breakfast", element: <Cuisine /> },
    { path: "/category/lunch", element: <Cuisine /> },
    { path: "/category/appetizer", element: <Cuisine /> },
    { path: "/category/dinner", element: <Cuisine /> },
    { path: "/category/dessert", element: <Cuisine /> },
    { path: "/category/beverage", element: <Cuisine /> },
  ],
  { basename: "/search-recipe/" }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
