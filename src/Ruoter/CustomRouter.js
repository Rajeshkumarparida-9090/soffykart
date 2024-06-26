import React, { Component, useEffect } from "react";
// import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../component/Home";
import About from "../component/About";
import Contact from "../component/Contact";
import Login from "../component/auth/Login";
import Register from "../component/auth/Register";
import { useSelector } from "react-redux";

// const pages = ['Products', 'Pricing', 'Blog'];
const settings = ["Profile", "Account", "Dashboard"];
const pages = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const CustomRouter = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isProfile, setIsProfile] = React.useState(false)
  const user = useSelector(state=>state);
  console.log("user====", user)

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
  useEffect(()=>{
    setIsProfile(JSON.parse(localStorage.getItem("isProfile")))
    
  },[])
  const logout = ()=>{
    setIsProfile(false)
    localStorage.setItem("isProfile", false)
  }
  console.log("isProfile", isProfile)
 
  return (
    <>
      <Router>
        {!isProfile ? 
        <>
          <Login setIsProfile={setIsProfile} />
          {/* <Register /> */}
          </>
        :
          <AppBar position="static">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  LOGO
                </Typography>
                  {/* for mobile view */}
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
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        {/* <Typography textAlign="center">{page.name}</Typography> */}
                        <Link to={page.link}>{page.name}</Link>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  LOGO
                </Typography>

                {/* for desktop view */}
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => (
                    <Button
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {/* {page} */}
                      <Link to={page.link}>{page.name}</Link>
                    </Button>
                  ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                        
                      </MenuItem>
                      
                    ))}
                    <MenuItem>
                      <Typography textAlign="center" onClick={logout}>Logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        }
        <Routes>
        {!isProfile ? <Route path="/login" Component={Login} />: <Route exact path="/" Component={Home} />}
          <Route path="/register" Component={Register} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </Router>
    </>
  );
};
export default CustomRouter;
