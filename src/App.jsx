import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SingleMovie } from "./components/SingleMovie/SingleMovie";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies/:id" element={<SingleMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
