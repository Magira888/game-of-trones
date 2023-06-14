import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <MainRoutes />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
