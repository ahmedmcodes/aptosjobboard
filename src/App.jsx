import NavBar from "./components/NavBar.component";
import Home from "./components/Home.component";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Jobs, openJobsLoader } from "./components/Jobs.component";
import {
  JobDescription,
  careerLoader,
} from "./components/JobDescription.component";
import NotFound from "./components/NotFound.component";
import ErrorElement from "./ErrorElement/ErrorElement.component";

const router2 = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route
        path="jobs"
        loader={openJobsLoader}
        element={<Jobs />}
        errorElement={<ErrorElement />}
      />
      <Route
        path="jobs/:id"
        loader={careerLoader}
        element={<JobDescription />}
        errorElement={<ErrorElement />}
      />
      <Route path="*" element={<ErrorElement />} />
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
