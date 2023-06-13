import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;
