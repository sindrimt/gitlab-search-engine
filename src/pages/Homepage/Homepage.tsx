import { resolveSoa } from 'dns';
import React, { useState, useEffect } from 'react'

import { HomepageContainer, GridElement, HeaderContainer, Header, TextContainer, Text } from "./HomepageStyles";

type Props = {}

function Homepage({}: Props) {

    const [isLoaded, setIsLoaded] = useState(false); 
    const [error, setError] = useState(null);
    const [commits, setCommits] = useState();

    useEffect(() => {
        //Create a .env with REACT_APP_API_KEY = 'your-access-token'. Add it to .gitignore.
        fetch("https://gitlab.stud.idi.ntnu.no/api/v4/projects/17480/repository/commits/?access_token="+process.env.REACT_APP_API_KEY)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                setIsLoaded(true);
            }, 
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

  return (
    <HomepageContainer>
        <GridElement>
            <HeaderContainer>
                <Header>Some stats</Header>
            </HeaderContainer>
            <TextContainer>
                {isLoaded?(
                    //Create interface
                    <Text>Commits: </Text>):(
                    <Text>No commits</Text>
                )}
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