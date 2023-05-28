import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./navBar/NavBar";
import { Home } from "./pages/homePage/Home";
import { About } from "./pages/aboutPage/About";
import { MyProjects } from "./pages/portfolioPage/MyProjects";
import { Contacts } from "./pages/contactsPage/Contacts";

function App() {
  return (
    <div className="App">
      <div className="appBlockElement" />
      <div className="appContent">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/portfolio"} element={<MyProjects />} />
          <Route path={"/contacts"} element={<Contacts />} />
        </Routes>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
