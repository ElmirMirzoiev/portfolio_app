import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./navBar/NavBar";
import { Home } from "./pages/homePage/Home";
import { About } from "./pages/aboutPage/About";

function App() {
  return (
    <div className="App">
      <div className="appBlockElement" />
      <div className="appContent">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
        </Routes>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
