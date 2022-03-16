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
import {Link} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";
import {ADMIN} from "../../helpers/consts";
import {useProducts} from '../../contexts/ProductContext';
import "../Navbar/Navbar.css";
import {useEffect} from "react";

const pages = [
  {name: "Model X", link: "/", id: 1},
  {name: "Model 3", link: "/aboutus", id: 2},
  {name: "Model Y", link: "/contacts", id: 3},
  {name: "Model S", link: "/contacts", id: 4},
  {name: "Solar Roof", link: "/contacts", id: 5},
  {name: "Solar Panels", link: "/contacts", id: 6},
];

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {
    handleLogout,
    user: {email},
  } = useAuth();

  const {cart} = useProducts();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar id="navbar_color" position="fixed" sx={{backgroundColor: "transparent"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{mr: 10, display: {xs: "none", md: "flex"}}}
            >
              <img width="130rem" className="logo"
                   src="https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Wordmark-Black-Logo.wine.svg" alt=""/>
            </Typography>
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: {xs: "flex", md: "none"},
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
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
                display: {xs: "block", md: "none"},
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Link to={page.link}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
              {/* ADMIN PANEL */}
              {email == ADMIN ? (
                <MenuItem>
                  <Link to="/admin">
                    <Typography textAlign="center">ADMIN PANNEL</Typography>
                  </Link>
                </MenuItem>
              ) : null}
              {/* ADMIN PANEL */}
            </Menu>
          </Box>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}
            >
              {/*<img className="logo" src={Logo} alt="" />*/}
              <img width="122rem"
                   src="https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Wordmark-Black-Logo.wine.svg" alt=""/>
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: {xs: "none", md: "flex", justifyContent: "center"},
            }}
          >
            {pages.map((page) => (
              <Link to={page.link}>
                <Button
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "#2c343d",
                    display: "block",
                    fontFamily: "lato",
                    fontSize: "16px",
                    textTransform: "capitalize",
                    fontWeight: "800",
                    mr: 6
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}

            {/* ADMIN PANEL */}
            {email == ADMIN ? (
              <Link to="/admin">
                <Button
                  sx={{
                    fontWeight: 800,
                    color: "red",
                    display: "block",
                    fontFamily: "lato",
                    fontSize: "16px",
                  }}
                >
                  ADMIN PANEL
                </Button>
              </Link>
            ) : (
              <Link to="/cart">
                <Button sx={{my: 2, color: '#2c343d'}}>
                  {/*<Badge*/}
                  {/*    badgeContent={cart?.products ? cart.products.length : 0}*/}
                  {/*    color="secondary"*/}
                  {/*>*/}
                  {/*  /!*<ShoppingCartIcon />*!/*/}
                  {/*</Badge>*/}
                </Button>
              </Link>
            )}
            {/* ADMIN PANEL */}
          </Box>
          <Box>
            <Link to="/products">
              <Button
                id="button"
                variant="standard"
                sx={{
                  my: 2,
                  display: "block",
                  fontFamily: "Roboto",
                  fontSize: "17px",
                  textTransform: "capitalize",
                  color: "#2c343d",
                }}
              >
                Shop
              </Button>
            </Link>
          </Box>
          <Box sx={{flexGrow: 0}}>
            {email ? (
              <Button
                id="button"
                variant="standard"
                color="error"
                sx={{
                  my: 2,
                  display: "block",
                  fontFamily: "Roboto",
                  fontSize: "17px",
                  textTransform: "capitalize",
                  color: "#2c343d"
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : null}


            {email ? null : (
              <Link to="/auth">
                <Button
                  id="button"
                  variant="standard"
                  sx={{
                    my: 2,
                    display: "block",
                    fontFamily: "Roboto",
                    fontSize: "17px",
                    textTransform: "capitalize",
                    color: "#2c343d"

                  }}
                  onClick={handleLogout}
                >
                  Account
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

