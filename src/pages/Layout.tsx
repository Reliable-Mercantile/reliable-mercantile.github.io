import { Outlet, Link } from "react-router-dom";
import "../styles.css"; 
import React from "react";
import {Menu as MenuIcon} from '@mui/icons-material';
import { IconButton } from "@mui/material";

const Header = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const breakpoint = 750;

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setIsMenuOpen(!isMenuOpen);
      };
    

    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
         // subscribe to window resize event "onComponentDidMount"
         window.addEventListener("resize", handleResizeWindow);
         return () => {
           // unsubscribe "onComponentDestroy"
           window.removeEventListener("resize", handleResizeWindow);
         };
       }, []);

    if (width > breakpoint) {
        return (
            <nav className="nav-bar" id="navBar">
                <Link to="/"><img src={window.location.origin + "/images/RM_logo.png"} alt="Reliable Mercantile Logo" width="100%" height="auto"/></Link>
                <div/>
                <Link to="about">about</Link>
                <Link to="services">services</Link>
                <Link to="contact-us">contact us</Link>
            </nav>
        )
    } else {
        return (
            <>
            <nav className="nav-bar" id="navBarMobile" style={{gridTemplateColumns: "64px 10fr min-content", overflow: "visible"}}>
                <Link to="/"><img src={window.location.origin + "/images/RM_logo.png"} alt="Reliable Mercantile Logo" width="100%" height="auto"/></Link>
                <div/>
                <IconButton
                    aria-label="nav-menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
            </nav>
            {isMenuOpen ? 
                <div className="nav-bar" style={{backgroundColor: "#b0341a66", flexDirection: "column", display: "flex"}}>
                    <Link to="about">about</Link>
                    <Link to="services">services</Link>
                    <Link to="contact-us">contact us</Link>
                </div> : ""}
            </> 
        )
    }
}

export const Layout = () => {
    return (
        <>
            <Header/>
            <div style={{ padding: "10px", justifyContent: "flex-start", display: "grid", rowGap: "20px", gridTemplateRows: "repeat(auto, auto)"}}>
                <Outlet/>
            </div>
        </>
    )
};