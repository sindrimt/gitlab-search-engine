import React from "react";
import { NavbarOuter } from "./NavbarStyles";
import Logo from "../Logo/Logo";

const Navbar = () => {
    return (
        <NavbarOuter>
            <h4>
                Welcome to <strong>GITLAB SEARCH ENGINE</strong>
            </h4>
            <Logo/>
        </NavbarOuter>
    );
};

export default Navbar;
