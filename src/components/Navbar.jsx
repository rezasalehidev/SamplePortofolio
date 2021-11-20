import React, { useState } from "react";
import logo from "../logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <div className="d-flex justify-content-between align-items-center">
                        <img src={logo} alt="logo" className="logo" />
                        <span className="textLogo">Portofolio</span>
                    </div>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={handleClick}
                >
                    {click ? <FaTimes style={{ color: "white" }} /> : <FaBars style={{ color: "white" }} />}
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                About Me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                How Work
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Portofolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Contacts
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
