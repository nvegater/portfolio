import React from 'react';
import './theme';
import {GlobalStyle, theme} from "./theme";
import styled from "styled-components";
import Collapsible from 'react-collapsible';
import CollapsibleTrigger from "./components/CollapsibleTrigger";
import SkillsPieChart from "./components/SkillsPieChart";

const StyledDiv = styled.div`
    color: ${theme.colors.themeDarkAlt};
    padding: 10px 0 10px 0;
    margin: 0;
    border-bottom: 2px solid;
`

const StyledP = styled.p`

  color: ${theme.colors.background};
  
`
const StyledDiv2 = styled.div`
  color: ${theme.colors.background};
`


const LayoutLeft = styled.main`
    max-width: 350px;
    float: left;
    margin-bottom: 5em;
    margin-top: 20px;
    margin-left: 20px;

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
                        <StyledP>Hola</StyledP>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledDiv2>Nicolás Vega Terrazas is a fullstack developer at the Bundesdruckerei in Berlin</StyledDiv2>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledDiv2>Currently he maintains a search-engine and a global indicators web-app,
                            used to aid policy making decisions and crisis prevention</StyledDiv2>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledDiv2>Leads a frontend agile team of 3 developers
                            to distribute a consistent and scalable design system across multiple projects in the company</StyledDiv2>
                    </StyledDiv>
                </Section>
                <Collapsible trigger={<CollapsibleTrigger title={"skills"}/>}>
                    <SkillsPieChart/>
                </Collapsible>
                <Collapsible trigger={<CollapsibleTrigger title={"bio"}/>}>
                    <p>Hola</p>
                    <p>Hola</p>
                </Collapsible>

            </LayoutLeft>
        </>
    );
}

export default App;
