import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Inicio from "./Pages/Inicio/Inicio";
import Sobre from "./Pages/Sobre/Sobre";
import Footer from "./Components/Footer/Footer";

import BubbleOne from "./Components/assets/saturn-rxx-removebg.png";
import BubbleTwo from "./Components/assets/saturn-favicon.ico";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>

      {/* Bubbles */}
      <div className="bolhas-container">
        <div className="bolha">
          <img src={BubbleTwo} alt="icon float" className="w-7" />
        </div>
        <div className="bolha">
          <img src={BubbleOne} alt="" className="w-7" />
        </div>
        <div className="bolha">
          <img src={BubbleTwo} alt="icon float" className="w-7" />
        </div>
        <div className="bolha">
          <img src={BubbleOne} alt="" className="w-7" />
        </div>
        <div className="bolha">
          <img src={BubbleTwo} alt="icon float" className="w-7" />
        </div>
        <div className="bolha">
          <img src={BubbleOne} alt="" className="w-7" />
        </div>
        <div className="bolha">
          <img src={BubbleTwo} alt="icon float" className="w-7" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
