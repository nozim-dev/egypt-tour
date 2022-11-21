import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import SectionOne from "./Components/Section-1/SectionOne";
import SectionTwo from "./Components/section-2/SectionTwo";
import SectionThree from "./Components/section-3/SectionThree";
import SectionFour from "./Components/section-4/SectionFour";
import SectionFive from "./Components/section-5/SectionFive";
import "./Components/style/index.scss";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<SectionOne />} path="/" />
        <Route element={<SectionTwo />} path="/Guides" />
        <Route element={<SectionThree />} path="/About" />
        <Route element={<SectionFour />} path="/Inspiration" />
        <Route element={<SectionFive />} path="/Contact" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
