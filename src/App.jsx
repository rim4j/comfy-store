import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Error,
  Register,
  Login,
  Landing,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  Orders,
  About,
} from "./pages";
import { ErrorElement } from "./components";

//loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";

//actions
import { action as registerAction } from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "orders", element: <Orders /> },
      { path: "about", element: <About /> },
    ],
  },
  { path: "/login", element: <Login />, errorElement: <Error /> },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

const App = () => {
  return (
    <div data-theme='dark'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
