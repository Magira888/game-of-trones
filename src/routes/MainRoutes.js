import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CharactersPage from "../pages/CharactersPage.jsx";
import ShopPage from "../pages/ShopPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AccountPage from "../pages/AccountPage";
import NotFoundPage from "../pages/NotFoundPage";
import AdminPage from "../pages/AdminPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage /> },
    { link: "/characters", element: <CharactersPage /> },
    { link: "/shop", element: <ShopPage /> },
    { link: "/register", element: <RegisterPage /> },
    { link: "/login", element: <LoginPage /> },
    { link: "/account", element: <AccountPage /> },
    { link: "/admin", element: <AdminPage /> },

    { link: "/*", element: <NotFoundPage /> },
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
