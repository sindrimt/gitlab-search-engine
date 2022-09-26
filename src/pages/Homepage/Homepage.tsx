import React from 'react'

import { HomepageContainer, GridElement, HeaderContainer, Header, TextContainer, Text } from "./HomepageStyles";

type Props = {}

function Homepage({}: Props) {
  return (
    <HomepageContainer>
        <GridElement>
            <HeaderContainer>
                <Header>Some stats</Header>
            </HeaderContainer>
            <TextContainer>
                <Text>Commits:</Text>
            </TextContainer>
        </GridElement>
        <GridElement>
            <HeaderContainer>
                <Header>Some information</Header>
            </HeaderContainer>
            <TextContainer>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </TextContainer>
        </GridElement>
    </HomepageContainer>
  )
}

export default Homepage