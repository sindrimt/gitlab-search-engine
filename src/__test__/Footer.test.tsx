import { render, fireEvent, screen } from "@testing-library/react";

import Footer from "../components/Footer/Footer";

describe("Footer", () => {
    it("Check if corect text is rendered in footer", () => {
        render(<Footer />);
        const footerText = screen.getByText("@ Made by group 40 - Marcus, Ragnar, Kelvin and Sindri");
        expect(footerText).toBeInTheDocument();
    });
});
