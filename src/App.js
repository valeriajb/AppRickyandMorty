import Home from "./Home/Home";
import Personajes from "./views/Characters/Personajes";
import Episodies from './views/Episodies/Episodies'
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Personajes" element={<Personajes />} />
          <Route path="/Episodies" element={<Episodies/>}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
