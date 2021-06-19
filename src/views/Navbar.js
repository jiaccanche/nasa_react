import { Button, AppBar, Toolbar, makeStyles, IconButton, Link, MenuItem, Drawer } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
const logoBar = process.env.PUBLIC_URL + '/logologo.png';

const headersData = [
    {
      label: "Astronomia",
      href: "/astro",
    },
    {
      label: "El espacio",
      href: "/space",
    },
    {
      label: "Las ciencias exactas",
      href: "/sciencie",
    },
    {
        href: "/contact",
        label: "Contactar"
    }
  ];

const useStyles = makeStyles(() => ({
        toolbar:{
            display: "flex",
            justifyContent: "space-between"
        },
        header: {
            backgroundColor: '#000000',
            padding:"0.2em",
            color:'#ffffff',
            "@media (max-width: 900px)": {
                paddingLeft: 0,
              }
        },
        menuButton: {
            textTransform: "none",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 700,
            size: "18px",
            marginLeft: "38px",
        },
        drawerContainer:{
            padding: "20px 30px"
        }
    })
 );

const Navbar = () => {
  
    const { header, menuButton, toolbar, drawerContainer } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
      });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        
        const setResponsiveness = () => {
          return window.innerWidth < 900
            ? setState( (prevState) => ( { ...prevState, mobileView: true } ) )
            : setState( (prevState) => ( { ...prevState, mobileView: false } ) );
        };
        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());
    
        return () => {
          window.removeEventListener("resize", () => setResponsiveness());
        };
        
        }, []
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return(
                <Button
                    {...{
                            key: label,
                            color: "inherit",
                            to: href,
                            component: RouterLink,
                            className: menuButton
                        }
                    } 
                >
                { label }
                </Button>
            );
        });

    }

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Link
              {...{
                component: RouterLink,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: label,
              }}
            >
              <MenuItem>{label}</MenuItem>
            </Link>
          );
        });
      };

    const displayDesktop= () => {
        return (
            <Toolbar className = { toolbar } >
            
                <img src={logoBar} alt="logo" style={ { maxWidth: 60 }  } />    
                <div> { getMenuButtons() } </div>    
            
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
                <img src={logoBar} alt="logo" style={ { maxWidth: 60 }  } />
            </Toolbar>
        );
    }

    return(
        <AppBar className= {  header } >
            {  mobileView ?  displayMobile() : displayDesktop() }
        </AppBar>    
    );
}

export default Navbar;