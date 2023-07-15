import { Outlet, Link } from "react-router-dom";
import "../styles.css"; 
import React from "react";

const Header = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 700;

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
            <nav className="nav-bar" id="navBarMobile" style={{gridTemplateColumns: "64px 10fr min-content"}}>
                <Link to="/"><img src={window.location.origin + "/images/RM_logo.png"} alt="Reliable Mercantile Logo" width="100%" height="auto"/></Link>
                <div/>

            </nav>
        )
    }
}

export const Layout = () => {
    return (
        <>
            <Header/>
            <div style={{maxWidth: "1240px", width: "90vw", justifyContent: "flex-start", display: "grid", rowGap: "20px", gridTemplateRows: "repeat(auto, auto)"}}>
                <Outlet/>
            </div>
        </>
    )
};