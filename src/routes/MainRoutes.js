import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CharactersPage from "../pages/CharactersPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage /> },
    { link: "/characters", element: <CharactersPage /> },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item, index) => (
        <Route path={item.link} element={item.element} key={index} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
