import React, { useState, useEffect } from "react";
// import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
// import { animateScroll as scroll } from "react-scroll";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "../NavBar/NavbarElements";
// import { getToken, removeToken } from "../authTokenHandler";
// import { getUser, removeUser } from "../userSessionHandler";
// import { getCartItems } from "../cartHandler";
import { Badge, Typography } from "@mui/material";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [cartCount, setCartCount] = useState("");
  const [user, setUser] = useState({});
  // const isLoggedIn = getToken();
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    // const cartItems = getCartItems();
    // const userString = getUser();
    // const userObj = JSON.parse(userString);
    // setUser(userObj);

    // if (cartItems !== null) setCartCount(cartItems.length);
  }, []);

  const toggleHome = () => {
    // scroll.scrollToTop();
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "50ch",
      },
    },
  }));
  const onLoginClick = () => {
    // if(isLoggedIn) {
    //   removeToken();
    //   removeUser();
    //   window.location = "/Home";
    // } else {
    //   window.location = "/Login";
    // }
  };

  // const adminRedirect = () => {
  //   console.log(user.role)
  //   if (user.role === 'movieAdmin'){
  //     window.location = "/ViewMovie";
  //   } else if(user.role === 'systemAdmin'){
  //     window.location = "/AddTheater";
  //   }
  // }

  const logout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('user');
    window.location = "/"
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLinks
              onClick={() => logout()}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <LogoutIcon />
            </NavLinks>
            <MobileIcon onClick={toggle}>{/* <FaBars /> */}</MobileIcon>
            <NavMenu>
              {user?.role === "" || user?.role === "" ? (
                <NavItem>
                  <NavLinks
                    // onClick={adminRedirect}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Admin
                  </NavLinks>
                </NavItem>
              ) : (
                <></>
              )}
            </NavMenu>
            <NavBtn>
              {user?.role === "customer" || !user?.role ? (
                <div
                  // onClick={() => (window.location = "/Cart")}
                  style={{ cursor: "pointer" }}
                >
                  <Badge
                    badgeContent={!cartCount ? 0 : cartCount}
                    sx={{ mr: 1 }}
                    color="error"
                  >
                    Home
                    {/* <ShoppingCartIcon sx={{ color: "white" }} /> */}
                  </Badge>
                </div>
              ) : (
                <></>
              )}
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
