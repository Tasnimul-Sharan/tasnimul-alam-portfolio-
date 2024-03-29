import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/Home";
import Contract from "./Contract/Contract";
import Header from "./Home/Header";
import Footer from "./Footer";
import Blogs from "./Blogs/Blogs";
import Projects from "./Home/Projects";
import ProjectDetails from "./Home/ProjectDetails";
import About from "./Home/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Skills from "./Home/Skills";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contract" element={<Contract />} />
          <Route path="/projets/:projectId" element={<Projects />} />
          <Route
            path="/projetdetails/:projectId"
            element={<ProjectDetails />}
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
