import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./pages/Home/Home";
// import Store from "./pages/Store/Store";
// import Layout from "./pages/Layout/PageLayout";
// import Checkout from "./components/Checkout/Checkout";
// import Error from "./pages/Error/Error";
// import { httpGetData } from "./utils/http-firebase";
// import GeneralLayout from "./pages/Layout/GeneralLayout/GeneralLayout";
// import About from "./pages/Jade/About";
// import Compromise from "./pages/Jade/Compromise/Compromise";
// import Mision from "./pages/Jade/Mision/Mision";
// import Values from "./pages/Jade/Values/Values";
// import Privacy from "./pages/Help/Privacy/Privacy";
// import Terms from "./pages/Help/Terms/Terms";
// import Delivery from "./pages/Help/Delivery/Delivery";
// import Return from "./pages/Help/Return/Return";
// import Services from "./pages/Services/Services";
// import Payment from "./pages/Payment/Payment";
import Test from "./pages/Test/Test";

const router = createBrowserRouter([
  {
    path: "",
    // element: <Layout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Test />,
      },
    ],
  },
  //     {
  //       path: "tienda",
  //       element: <Store />,
  //       loader: async () => {
  //         return httpGetData("items");
  //       },
  //     },
  //     {
  //       path: "servicios",
  //       element: <Services />,
  //     },
  //   ],
  // },
  // {
  //   path: "checkout",
  //   element: <Checkout />,
  // },
  // {
  //   path: "jade",
  //   element: <GeneralLayout />,
  //   children: [
  //     {
  //       path: "acerca",
  //       element: <About />,
  //     },
  //     {
  //       path: "compromiso",
  //       element: <Compromise />,
  //     },
  //     {
  //       path: "mision_&_vision",
  //       element: <Mision />,
  //     },
  //     {
  //       path: "valores_&_enfoques",
  //       element: <Values />,
  //     },
  //   ],
  // },
  // {
  //   path: "ayuda",
  //   element: <GeneralLayout />,
  //   children: [
  //     {
  //       path: "privacidad",
  //       element: <Privacy />,
  //     },
  //     {
  //       path: "terminos",
  //       element: <Terms />,
  //     },
  //     {
  //       path: "envio",
  //       element: <Delivery />,
  //     },
  //     {
  //       path: "devolucion",
  //       element: <Return />,
  //     },
  //   ],
  // },
  // {
  //   path: "pay",
  //   element: <Payment />,
  // },
  // {
  //   path: "/test",
  //   element: <Test />,
  // },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
