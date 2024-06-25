import { Outlet } from "react-router-dom";
// Páginas
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import BubbleOne from "./Components/assets/saturn-rxx-removebg.webp";
import BubbleTwo from "./Components/assets/saturn-favicon.ico.webp";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* Bubbles */}
      <div className="bolhas-container">
        <div className="bolha">
          <img src={BubbleTwo} alt="icon float" className="w-7 h-7" />
        </div>
        <div className="bolha">
          <img src={BubbleOne} alt="" className="w-7 h-7" />
        </div>
        <div className="bolha">
          <img src={BubbleTwo} alt="icon float" className="w-7 h-7" />
        </div>
        <div className="bolha">
          <img src={BubbleOne} alt="" className="w-7 h-7" />
        </div>
        <div className="bolha">
          <img src={BubbleTwo} alt="icon float" className="w-7 h-7" />
        </div>
        <div className="bolha">
          <img src={BubbleOne} alt="" className="w-7 h-7" />
        </div>
        <div className="bolha">
          <img src={BubbleTwo} alt="icon float" className="w-7 h-7" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
