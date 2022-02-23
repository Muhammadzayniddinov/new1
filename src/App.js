import Homepage from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import StadiumDetail from "./pages/StadiumDetail";
import StadiumCreate from "./pages/StadiumCreate";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stadium/:banana" element={<StadiumDetail />} />
        <Route path="/stadium/create" element={<StadiumCreate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
