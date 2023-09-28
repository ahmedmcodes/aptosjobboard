import NavBar from "./components/NavBar/NavBar.component";
import Home from "./components/Home/Home.component";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { OpenJobs, openJobsLoader } from "./OpenJobs/OpenJobs.component";
import {
  JobDescription,
  jobDescriptionLoader,
} from "./components/JobDescription/JobDescription.component";
import ErrorElement from "./components/ErrorElement/ErrorElement.component";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/aptosjobboard/"
      element={<NavBar />}
      errorElement={<ErrorElement />}
    >
      <Route index element={<Home />} />
      <Route
        path="jobs"
        loader={openJobsLoader}
        element={<OpenJobs />}
        errorElement={<ErrorElement />}
      />
      <Route
        path="jobs/:id"
        loader={jobDescriptionLoader}
        element={<JobDescription />}
        errorElement={<ErrorElement />}
      />
      <Route path="*" element={<ErrorElement />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
