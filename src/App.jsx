import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import FavoriteEmpty from "./pages/favoriteEmpty";
import Categories from "./pages/categories";
import News from "./pages/news";
import AboutUs from "./pages/aboutUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favorite",
    element: <FavoriteEmpty />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
