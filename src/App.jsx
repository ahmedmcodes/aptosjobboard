import NavBar from "./components/NavBar.component";
import Home from "./components/Home.component";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export default App;
