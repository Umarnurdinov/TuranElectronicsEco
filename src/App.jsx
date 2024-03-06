import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import FavoriteEmpty from "./pages/favorite";
import Categories from "./pages/categories";
import News from "./pages/news";
import AboutUs from "./pages/aboutUs";
import Delivery from "./pages/delivery"
import Service from "./pages/service"
import Guarantee from "./pages/guarantee"
import Credit from "./pages/credit";
import Dysonbrand from "./pages/dysonBrand"
import Apple from "./pages/apple"
import Xiaomi from "./pages/xiaomi";
import Samsung from "./pages/samsung"
import Sony from "./pages/sony"
import BasketFull from "./pages/basket";
import Favorite from "./pages/favorite";
import Basket from "./pages/basket";
import Registration from "./pages/registration";
import RegistrationAccept from "./pages/registrationAcept";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgotPassword";

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
    path: "/delivery",
    element: <Delivery />,
  },
  {
    path: "/service",
    element: <Service/>
  },
  {
    path: "/guarantee",
    element: <Guarantee />
  },
  {
    path: "/credit",
    element: <Credit />
  },
  {
    path: "/dysonbrand",
    element: <Dysonbrand />
  },
  {
    path: "applebrand",
    element: <Apple />
  },
  {
    path: "xiaomibrand",
    element: <Xiaomi />
  },
  {
    path: "samsungbrand",
    element: <Samsung />
  },
  {
    path: "sonybrand",
    element: <Sony />
  },
{    path: "/basket",
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
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
