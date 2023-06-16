import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CharactersPage from "../pages/CharactersPage.jsx";
import ShopPage from "../pages/ShopPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AccountPage from "../pages/AccountPage";
import NotFoundPage from "../pages/NotFoundPage";
import AdminPage from "../pages/AdminPage";
import Edit from "../components/Edit/Edit";
import Cart from "../components/Cart/Cart";
import { useSelector } from "react-redux";
import { ADMIN } from "../helpers/consts";

const MainRoutes = () => {
  const { user } = useSelector((state) => state.auth);
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage /> },
    { link: "/characters", element: <CharactersPage /> },
    { link: "/shop", element: <ShopPage /> },
    { link: "/register", element: <RegisterPage /> },
    { link: "/login", element: <LoginPage /> },
    { link: "/account", element: <AccountPage /> },
    { link: "/admin", element: <AdminPage /> },
    { link: "/edit/:id", element: <Edit /> },
    { link: "/*", element: <NotFoundPage /> },
  ];

  const PRIVATE_ROUTES = [{ link: "/admin", element: <AdminPage /> }];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item, index) => (
        <Route path={item.link} element={item.element} key={index} />
      ))}
      {PRIVATE_ROUTES.map((elem, index) => (
        <Route
          path={elem.link}
          key={index}
          element={user === ADMIN ? elem.element : <Navigate replace to="*" />}
        />
      ))}
    </Routes>
  );
};

export default MainRoutes;
