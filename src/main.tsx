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
    { path: "/category/italian", element: <Cuisine /> },
    { path: "/category/pakistani", element: <Cuisine /> },
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
