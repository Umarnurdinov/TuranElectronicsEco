import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import FavoriteEmpty from "./pages/favorite";
import Categories from "./pages/categories";
import News from "./pages/news";
import AboutUs from "./pages/aboutUs";
import BasketFull from "./pages/basket";
import Favorite from "./pages/favorite";
import Basket from "./pages/basket";
import Registration from "./pages/registration";
import RegistrationAccept from "./pages/registrationAcept";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgotPassword";
import Product from "./pages/product";

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
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/registration/accept",
    element: <RegistrationAccept />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
  {
    path: "/about/product/:id",
    element: <Product/>
  },
]);

function App() {

  return (

    <RouterProvider router={routes} />
  )
}

export default App;
