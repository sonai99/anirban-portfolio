import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import About from "./components/About";
import Experience from "./components/Experience";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import { Route, Routes } from "react-router";



function App() {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path="/portfolio" element={<Portfolio />}/> 
      <Route path="/experience" element={<Experience />}/> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
