import NavBar from "./components/NavBar.component";
import Home from "./components/Home.component";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Jobs from "./components/Jobs.component";
import { Test } from "./components/test.component";
import NotFound from "./components/NotFound.component";
import ErrorElement from "./ErrorElement/ErrorElement.component";

const router2 = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path="jobs" element={<Jobs />} />
      <Route
        path="jobs/:id"
        element={<Test />}
        errorElement={<ErrorElement />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <NavBar />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "jobs",
//         element: <Jobs />,
//         children: [
//           {
//             path: "/:id",
//             element: <Test />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

const App = () => {
  return (
    <>
      <RouterProvider router={router2} />
    </>
  );
};
export default App;
