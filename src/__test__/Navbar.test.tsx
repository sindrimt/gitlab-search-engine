import { render, fireEvent, screen } from "@testing-library/react";

import Navbar from "../components/Navbar/Navbar";

describe("Navbar", () => {
    it("Check if corect text is rendered in navbar", () => {
        render(<Navbar />);
        const navbarWelcome = screen.getByText("Welcome to");
        const navbarGitlab = screen.getByText("GITLAB SEARCH ENGINE");
        expect(navbarWelcome).toBeInTheDocument();
        expect(navbarGitlab).toBeInTheDocument();
    });
});
