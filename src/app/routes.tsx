import { createBrowserRouter, Outlet } from "react-router"
import { HomePage } from "./components/HomePage"
import { CategoriesPage } from "./components/CategoriesPage"
import { CategoryDetailPage } from "./components/CategoryDetailPage"
import { MainMenu } from "./components/MainMenu"
import { HorizonCourtsPage } from "./components/HorizonCourtsPage"
import { useLocation } from "react-router"

function Root() {
  const location = useLocation()
  const isHorizonPage = location.pathname === "/horizon-courts"

  return (
    <>
      {!isHorizonPage && <MainMenu />}
      <Outlet />
    </>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "categories", Component: CategoriesPage },
      { path: "categories/:slug", Component: CategoryDetailPage },
      { path: "horizon-courts", Component: HorizonCourtsPage },
    ],
  },
])
