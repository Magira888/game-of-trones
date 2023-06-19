import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CharactersPage from "../pages/CharactersPage.jsx";
import ShopPage from "../pages/ShopPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import AdminPage from "../pages/AdminPage";
import Edit from "../components/Edit/Edit";
import { ADMIN } from "../helpers/consts";
import { useSelector } from "react-redux";
import CommentsPage from "../pages/CommentsPage";

const MainRoutes = () => {
  const { user } = useSelector((state) => state.auth);
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/characters", element: <CharactersPage />, id: 2 },
    { link: "/shop", element: <ShopPage />, id: 3 },
    { link: "/register", element: <RegisterPage />, id: 4 },
    { link: "/login", element: <LoginPage />, id: 5 },
    { link: "/edit/:id", element: <Edit />, id: 7 },
    { link: "/comments/:id", element: <CommentsPage />, id: 8 },
    { link: "/*", element: <NotFoundPage />, id: 9 },
  ];

  const PRIVATE_ROUTES = [{ link: "/admin", element: <AdminPage />, id: 1 }];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
      {user &&
        PRIVATE_ROUTES.map((item) => (
          <Route
            path={item.link}
            key={item.id}
            element={
              user === ADMIN ? item.element : <Navigate replace to="*" />
            }
          />
        ))}
    </Routes>
  );
};

export default MainRoutes;
