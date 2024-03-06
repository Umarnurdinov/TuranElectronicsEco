import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import FavoriteEmpty from "./pages/favoriteEmpty";
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
  }
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
