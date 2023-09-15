import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import MyAcount from "../MyAccount";
import MyOrders from "../MyOrders";
import MyOrderCheck from "../MyOrderCheck";
import NotFound from "../NotFound";
import SingIn from "../SingIn";
import Navbar from "../../components/Navbar";
import CheckOutSideMenu from "../../Components/CheckOutSideMenu";
import "./App.css";


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/fornitures", element: <Home /> },
    { path: "/toys", element: <Home /> },
    { path: "/others", element: <Home /> },
    { path: "/my-acount", element: <MyAcount /> },
    { path: "/my-order", element: <MyOrderCheck /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrderCheck /> },
    { path: "/my-orders/:id", element: <MyOrderCheck /> },
    { path: "/*", element: <NotFound /> },
    { path: "/sing-in", element: <SingIn /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
