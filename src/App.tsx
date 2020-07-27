import React from 'react';
import './theme';
import {GlobalStyle, theme} from "./theme";
import styled from "styled-components";
import Collapsible from 'react-collapsible';
import CollapsibleTrigger from "./components/CollapsibleTrigger";
import SkillsPieChart from "./components/SkillsPieChart";

const StyledDiv = styled.div`
    color: ${theme.colors.themePrimary};
    padding: 10px 0 10px 0;
    margin: 0;
    border-bottom: 2px solid;
        border-right: 0.2px solid;
        border-left: 0.2px solid;
        border-top: 0.2px solid;

`
const StyledDivSecond = styled.div`
    color: ${theme.colors.pistachio};
    padding: 10px 0 10px 0;
    margin: 0;
    border-bottom: 2px solid;
        border-right: 0.2px solid;
        border-left: 0.2px solid;

`
const StyledDivThird = styled.div`
    color: ${theme.colors.redSalsa};
    padding: 10px 0 10px 0;
    margin: 0;
    border-bottom: 2px solid;
        border-right: 0.2px solid;
        border-left: 0.2px solid;

`
const StyledDivFourth = styled.div`
    color: ${theme.colors.iceberg};
    padding: 10px 0 10px 0;
    margin: 0;
    border-bottom: 2px solid;
        border-right: 0.2px solid;
        border-left: 0.2px solid;

`
const StyledDivFifth = styled.div`
    color: ${theme.colors.cetaceanBlue};
    padding: 10px 0 10px 0;
    margin: 0;
    border-bottom: 2px solid;
    border-right: 0.2px solid;
            border-left: 0.2px solid;

`
const StyledDivSixth = styled.div`
    color: ${theme.colors.themeDarkAlt};
    padding: 10px 0 10px 0;
    margin: 0;
    border-bottom: 2px solid;
        border-right: 0.2px solid;
        border-left: 0.2px solid;

`

const StyledP = styled.p`

  color: ${theme.colors.background};
  padding: 5px;
  
`
const StyledDiv2 = styled.div`
  color: ${theme.colors.background};
  padding: 3px;
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
                        <StyledP>Nicolás Vega Terrazas </StyledP>
                    </StyledDiv>
                    <StyledDivSecond>
                        <StyledDiv2>is a fullstack developer at the Bundesdruckerei in
                            Berlin,</StyledDiv2>
                    </StyledDivSecond>
                    <StyledDivThird>
                        <StyledDiv2>working on the company's search engine and global data dashboard,
                            to aid policy making and crisis prevention</StyledDiv2>
                    </StyledDivThird>
                    <StyledDivFourth>
                        <StyledDiv2>He leads an agile team of 3 frontend developers
                            to distribute a consistent and scalable design system across multiple projects in the
                            company</StyledDiv2>
                    </StyledDivFourth>
                </Section>
                <StyledDivFifth>
                    <Collapsible trigger={<CollapsibleTrigger title={"skills"}/>}>
                        <SkillsPieChart/>
                    </Collapsible>
                </StyledDivFifth>
                <StyledDivSixth>
                    <Collapsible trigger={<CollapsibleTrigger title={"bio"}/>}>
                        <p>Hola</p>
                        <p>Hola</p>
                    </Collapsible>
                </StyledDivSixth>


            </LayoutLeft>
        </>
    );
}

export default App;
