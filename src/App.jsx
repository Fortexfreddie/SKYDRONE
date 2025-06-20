import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Feature from "./pages/Feature";

function App() {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Feature" element={<Feature />} />
    </Routes>
  )
}

export default App
