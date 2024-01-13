import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import DogSearchParams from "./components/dog-adoption/DogSearchParams";
import DogDetails from "./components/dog-adoption/DogDetails";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App bg-verylight m-0 ml-0 flex h-screen min-h-screen flex-col p-0">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/dogsadoption" element={<DogSearchParams />} />
            <Route path="/dogdetails/:dogId" element={<DogDetails />} />
            {/* <Route path="/dogwalking" element={<VolunteerSearchParams />} />
           <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />  */}
          </Routes>
        </main>

        <footer className="m-0 w-full pt-12">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
