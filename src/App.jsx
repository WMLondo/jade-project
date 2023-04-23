import "boxicons";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Layout from "./pages/Layout/PageLayout";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Checkout from "./components/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "tienda",
        element: <Store />,
      },
    ],
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  { path: "iniciar-sesion", element: <SignIn /> },
  { path: "registrarme", element: <SignUp /> },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>;
    </Provider>
  );
}

export default App;
