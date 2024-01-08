import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    function gotoProduct() {
        navigate('/project');
    };

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navlink">Home</Link>
                <Link to="/product" className="navlink">Product</Link>
                <Link to="/contact" className="navlink">Contact</Link>
                <Link to="/about" className="navlink">About</Link>
                <button onClick={gotoProduct} className="navbtn">Project</button>
            </nav>
        </>
    );
};

export default Navbar;
