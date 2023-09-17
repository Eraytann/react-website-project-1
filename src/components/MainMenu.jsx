import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import SearchBoxComponent from "./SearchBoxComponent";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

//This page is creating a main menu which showed on the each page

/*
const Header=styled.header`
    display: flex;
    flex-direction: row;
    gap:10%;
    justify-content: space-around;
    align-items: center;
    background-color: #6DF3DB;
    margin: 0;
    padding-right:18%;
    padding-left:14%;
    flex-wrap:wrap;
`;

const MenuContainer=styled.div`
    display: flex;
    gap:5%;
    
    @media (max-width:1200px){
    display:none;
    }
`;

const LogoContainer=styled.div`
    display: flex;
    max-width: 100%;
    max-height: 100%;

    @media (max-width:1200px)
    {
      flex:4;
      justify-content: center;
      align-items: center;
    }
`;
*/
const Item=styled.a`
    font-family: 'Montserrat', sans-serif;
    color:black;
    text-decoration:none;
    font-weight:bold;
    font-size:18px;
    white-space:nowrap;
`;

const Logo=styled.img`
    border-style: solid;
    border-color: #E3E0E0;
    border-width: 0px 3px 0px 0px;
`;


export default function MainMenu() {  
  const pages = ["Homepage", "Content Page", "Gallery Page", "News Content Page"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
<div>
    <AppBar position="static" sx={{ backgroundColor: '#6DF3DB',paddingBottom:'2%'}}>
      <Container maxWidth="md" >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
          <Logo src="https://images.squarespace-cdn.com/content/5db457979c82027d2d52fcc3/1577636372509-8H07P3A3IWCIRDJGW7CG/HappyHost-logo.png?format=1000w&content-type=image%2Fpng" width={150} height={100}/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none"}  }}>
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
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none"}
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                  <Link to={`/${page.toLowerCase().replace(/\s/g, "-")}`}>{page}
                  </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
          <Logo src="https://images.squarespace-cdn.com/content/5db457979c82027d2d52fcc3/1577636372509-8H07P3A3IWCIRDJGW7CG/HappyHost-logo.png?format=1000w&content-type=image%2Fpng" width={150} height={100}/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
              <Link to={`/${page.toLowerCase().replace(/\s/g, "-")}`}>{page}</Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              
            </Menu>
          </Box>
          
          <SearchBoxComponent/>

        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}

/*


  {/*
    <Header>
    <LogoContainer>
    <Logo src="https://images.squarespace-cdn.com/content/5db457979c82027d2d52fcc3/1577636372509-8H07P3A3IWCIRDJGW7CG/HappyHost-logo.png?format=1000w&content-type=image%2Fpng" width={150} height={100}/>
    </LogoContainer>
    <MenuContainer>
        <Item href="#">Menu 1</Item>
        <Item href="#">Menu 2</Item>
        <Item href="#">Menu 3</Item>
        <Item href="#">Menu 4</Item>
    </MenuContainer>
    </Header>
  /*}
*/