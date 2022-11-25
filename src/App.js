import logo from "./logo.svg";
import Home from "./Home/Home";
import Personajes from './views/Characters/Personajes'
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Personajes/>
      <Footer />
    </>
  );
}

export default App;
