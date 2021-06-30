import { Button, AppBar, Toolbar, IconButton, Link, MenuItem, Drawer } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

import headersData from "../static/headersData.json";
import { navBarStyles } from './Styles';
const logoBar = process.env.PUBLIC_URL + '/logologo.png';


const Navbar = () => {

  const { header, menuButton, toolbar, drawerContainer } = navBarStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {

    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };

  }, []
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href, section }) => {
      return (
        !section ?
          (<Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton
            }
            }
          >
            {label}
          </Button>
          ) :
          (<Button
            key={label}
            color={"inherit"}
            className={menuButton}
            onClick={() => window.location.replace(href)}
          >
            {label}
          </Button>
          )
      );
    });

  }

  const getDrawerChoices = () => {
    return headersData.map(({ label, href, section }) => {
      return (
        <Link
          {...{
            component: section ? null : RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label
          }}

          onClick={() => window.location.replace(href)}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar} >

        <img src={logoBar} alt="logo" style={{ maxWidth: 60 }} />
        <div> {getMenuButtons()} </div>

      </Toolbar>
    );
  }

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <img src={logoBar} alt="logo" style={{ maxWidth: 60 }} />
      </Toolbar>
    );
  }

  return (
    <AppBar className={header} >
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
}

export default Navbar;