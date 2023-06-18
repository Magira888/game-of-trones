import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import photo from "./pngegg.png";
import { useDispatch, useSelector } from "react-redux";
import { clearInputs } from "../../auth/auth-slice";
import { handleLogout } from "../../auth/auth-action";

const pages = [
  { path: "/", title: "Home" },
  { path: "/characters", title: "Characters" },
  { path: "/shop", title: "shop" },
];

const settings = [
  { path: "/register", title: "Register" },
  { path: "/login", title: "Login" },
];
const logouts = [{ path: "/login", title: "Logout" }];

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user } = useSelector((state) => state.auth);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {user ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <AppBar position="static" sx={{ backgroundColor: "black" }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <img
                  src={photo}
                  alt=""
                  style={{ width: "15%" }}
                  onClick={() => navigate("/")}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "black",
                    textDecoration: "none",
                  }}
                ></Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.title}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page, index) => (
                    <Button
                      key={index}
                      onClick={() => navigate(page.path)}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page.title}
                    </Button>
                  ))}
                </Box>
                <Box sx={{ display: "flex", color: "inherit" }}>
                  {logouts.map((logout) => (
                    <MenuItem
                      key={logout.title}
                      onClick={() => {
                        navigate(logout.path);
                        dispatch(handleLogout(navigate));
                      }}
                    >
                      <Typography textAlign="center">{logout.title}</Typography>
                    </MenuItem>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <AppBar position="static" sx={{ backgroundColor: "black" }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <img
                  src={photo}
                  alt=""
                  style={{ width: "15%" }}
                  onClick={() => navigate("/")}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "black",
                    textDecoration: "none",
                  }}
                ></Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.title}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page, index) => (
                    <Button
                      key={index}
                      onClick={() => navigate(page.path)}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page.title}
                    </Button>
                  ))}
                </Box>
                <Box sx={{ display: "flex", color: "inherit" }}>
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting.title}
                      onClick={() => {
                        navigate(setting.path);
                        dispatch(clearInputs());
                      }}
                    >
                      <Typography textAlign="center">
                        {setting.title}
                      </Typography>
                    </MenuItem>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
      )}
    </>
  );
}
export default Navbar;
