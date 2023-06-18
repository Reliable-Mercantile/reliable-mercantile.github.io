import React from "react";
import { Outlet, Link } from "react-router-dom";
// import RMLogo from "../images/RM_logo.png";
import "../styles.css"; 

const Header = () => {
 return (
    <nav className="nav-bar" id="navBar">
        {/* <Link to="/"><img src={RMLogo} alt="Reliable Mercantile Logo" width="100%" height="auto"/></Link> */}
        <div/>
        <Link to="/about">about</Link>
        <Link to="/services">services</Link>
        <Link to="/calendar">calendar</Link>
    </nav>
 )
}

export const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
};