import React from 'react';
import './theme';
import {GlobalStyle, theme} from "./theme";
import styled from "styled-components";

const StyledDiv = styled.div`
    color: ${theme.colors.themePrimary};
    padding: 10px 0 10px 0;
    margin: 0;
    border-bottom: 4px solid;
    border-right: 0.5px solid;
`

const StyledP = styled.p`

  color: ${theme.colors.background};
  
`
const StyledDiv2 = styled.div`
  color: ${theme.colors.background};
`


const LayoutLeft = styled.main`
    max-width: 500px;
    float: left;
    margin-bottom: 5em;
`

const Section = styled.section`
    display: block;
`


function App() {
    return (
        <>
            <LayoutLeft>
                <GlobalStyle/>
                <Section>
                    <StyledDiv>
                        <StyledP>Nicolás Vega Terrazas</StyledP>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledDiv2> is a fullstack developer at the Bundesdruckerei Gmbh in Berlin</StyledDiv2>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledDiv2>leading a frontend team of 3 developers</StyledDiv2>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledDiv2>maintaining a search-engine and a global indicators web application</StyledDiv2>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledDiv2>building typed npm packages in React</StyledDiv2>
                    </StyledDiv>
                </Section>
            </LayoutLeft>
        </>
    );
}

export default App;
