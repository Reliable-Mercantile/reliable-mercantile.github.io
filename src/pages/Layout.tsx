import { Outlet, Link } from "react-router-dom";
import "../styles.css"; 

const Header = () => {
 return (
    <nav className="nav-bar" id="navBar">
        <Link to="/"><img src={window.location.origin + "/images/RM_logo.png"} alt="Reliable Mercantile Logo" width="100%" height="auto"/></Link>
        <div/>
        <Link to="about">about</Link>
        <Link to="services">services</Link>
        <Link to="contact-us">contact us</Link>
    </nav>
 )
}

export const Layout = () => {
    return (
        <>
            <Header/>
            <div style={{maxWidth: "1240px", minWidth: "500px", width: "90vw", justifyContent: "flex-start", display: "grid", rowGap: "20px", gridTemplateRows: "repeat(auto, auto)"}}>
                <Outlet/>
            </div>
        </>
    )
};