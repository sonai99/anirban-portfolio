// import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import About from "./components/About";
// import Experience from "./components/Experience";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import { Route, Routes } from "react-router";
import HomeTest from "./components/HomeTest";
// import About from "./components/About";



function App() {
  return (
    <div>
      <NavBar />
      
      <Routes>
      <Route path="/" element={<HomeTest />}/> 
      {/* <Route path="/about" element={<About />}/>  */}
      <Route path="/portfolio" element={<Portfolio />}/> 
      {/* <Route path="/experience" element={<Experience />}/>  */}
      </Routes>
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
