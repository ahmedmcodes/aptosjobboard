import NavBar from "./components/NavBar.component";
import Home from "./components/Home.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Jobs from "./components/Jobs.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
