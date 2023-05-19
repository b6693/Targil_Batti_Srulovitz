import logo from "./logo.svg";
import "./App.css";
import ImagesList from "./ImagesList";
import { useState } from "react";
import Home from "./Home";
import { Route, Routes, Router } from "react-router-dom";

function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="imagesList" element={<ImagesList />} />
      </Routes>
    </div>
  );
}

export default App;
