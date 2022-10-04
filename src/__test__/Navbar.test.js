import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Navbar from "../components/Navbar/Navbar";

describe("Navbar", () => {
    it("Navbar rednered successfully", () => {
        const { NavbarOuter } = render(<Navbar />);
        //expect(NavbarOuter).toEqual("Welcome to GITLAB SEARCH ENGINE");
        const navbarWelcome = screen.getByText("Welcome to");
        const navbarGitlab = screen.getByText("GITLAB SEARCH ENGINE");
        expect(navbarWelcome).toBeInTheDocument();
        expect(navbarGitlab).toBeInTheDocument();
    });
});
