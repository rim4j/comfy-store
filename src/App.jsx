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
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <SingleProduct /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "orders", element: <Orders /> },
    ],
  },
  { path: "/login", element: <Login />, errorElement: <Error /> },
  { path: "/register", element: <Register />, errorElement: <Error /> },
]);

const App = () => {
  return (
    <div data-theme='dark'>
      <RouterProvider router={router} />;
    </div>
  );
};

export default App;
