import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import FavoriteEmpty from "./pages/favorite";
import News from "./pages/news";
import AboutUs from "./pages/aboutUs";
import BasketFull from "./pages/basket";
import Favorite from "./pages/favorite";
import Basket from "./pages/basket";
import Registration from "./pages/registration";
import RegistrationAccept from "./pages/registrationAccept";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgotPassword";
import Product from "./pages/product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfoProduct from "./components/infoProduct";
import ApplePage from "./components/applePage";
import DysonPage from "./components/dysonPage";
import SamsungPage from "./components/samsungPage";
import SonyPage from "./components/sonyPage";
import XiaomiPage from "./components/xiaomiPage";
import Layout from "./components/layout";
import CategoryPage from "./pages/category";
import CardNews from "./components/cardNews";
import CardNews2 from "./components/cardNews2";
import CardNews3 from "./components/cardNews3";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    element: <Product />,
  },
  {
    path: "/applePage",
    element: <ApplePage />,
  },
  {
    path: "/dysonPage",
    element: <DysonPage />,
  },
  {
    path: "/samsungPage",
    element: <SamsungPage />,
  },
  {
    path: "/sonyPage",
    element: <SonyPage />,
  },
  {
    path: "/xiaomiPage",
    element: <XiaomiPage />,
  },
  {
    path: "/categoryPage",
    element: <CategoryPage />,
  },
  {
    path: "/cardNews",
    element: <CardNews />,
  },
  {
    path: "/cardNews2",
    element: <CardNews2 />,
  },
  {
    path: "/cardNews3",
    element: <CardNews3 />,
  },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={routes} />
    </Layout>
  );
}

export default App;
