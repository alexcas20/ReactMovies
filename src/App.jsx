import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SingleMovie } from "./components/SingleMovie/SingleMovie";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/shared/Navbar/Navbar";
import { Footer } from "./components/shared/Footer/Footer";

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies/:id" element={<SingleMovie />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </>
  );
}

export default App;
