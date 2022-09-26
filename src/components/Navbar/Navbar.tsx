import React from 'react'

import { NavbarContainer, HeaderContainer, Header} from "../Navbar/NavbarStyles";

type Props = {}

function Navbar({}: Props) {
  return (
    <NavbarContainer>
        <HeaderContainer>
            <Header>Our repository</Header>
        </HeaderContainer>
    </NavbarContainer>
  )
}

export default Navbar