//import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
//import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App bg-verylight m-0 ml-0 flex h-screen min-h-screen flex-col p-0">
      <header></header>
      <main className="flex-grow">
        <Home />
      </main>
      <footer className="m-0 w-full pt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
