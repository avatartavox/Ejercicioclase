import { createBrowserRouter, Outlet } from "react-router";
import { HomePage } from "./components/HomePage";
import { CategoriesPage } from "./components/CategoriesPage";
import { CategoryDetailPage } from "./components/CategoryDetailPage";

function Root() {
  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "categories", Component: CategoriesPage },
      { path: "categories/:slug", Component: CategoryDetailPage },
    ],
  },
]);
