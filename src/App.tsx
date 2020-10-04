import React, {ReactNode} from 'react';
import './theme';
import {GlobalStyle, theme} from "./theme";
import styled from "styled-components";
import Collapsible from 'react-collapsible';
import CollapsibleTrigger from "./components/CollapsibleTrigger";
import CareerTimeline from "./components/CareerTimeline";
import {useMediaQuery} from "react-responsive";

const StyledDivTitlePrimaryGreen = styled.div`
    color: ${theme.colors.themePrimary};
    padding: 10px 0 10px 0;
    margin: 0;
    border-bottom: 2px solid;
    border-right: 0.2px solid;
    border-left: 0.2px solid;
    border-top: 0.2px solid;

`
const StyledDivPistachio = styled.div`
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

interface RespWrapperProps {
    children: ReactNode;
}

function App() {
    const Desktop = ({ children }:RespWrapperProps) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }
    const Tablet = ({ children }:RespWrapperProps) => {
        const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
        return isTablet ? children : null
    }
    const Mobile = ({ children }:RespWrapperProps) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    const Default = ({ children }:RespWrapperProps) => {
        const isNotMobile = useMediaQuery({ minWidth: 768 })
        return isNotMobile ? children : null
    }


    return (
            <div style={{maxWidth:350}}>
                <GlobalStyle/>
                <StyledDivTitlePrimaryGreen>
                    <StyledP>Nicolás Vega Terrazas </StyledP>
                </StyledDivTitlePrimaryGreen>
                <StyledDivPistachio>
                    <StyledDiv2>
                        is a fullstack developer at the Bundesdruckerei in Berlin,
                    </StyledDiv2>
                </StyledDivPistachio>
                <StyledDivThird>
                    <StyledDiv2>working on the company's search engine and global data dashboard,
                        to aid policy making and crisis prevention</StyledDiv2>
                </StyledDivThird>
                <StyledDivFourth>
                    <StyledDiv2>He leads an agile team of 3 frontend developers
                        to distribute a consistent and scalable design system across multiple projects in the
                        company</StyledDiv2>
                </StyledDivFourth>
                <StyledDivFifth>
                    <Collapsible trigger={<CollapsibleTrigger title={"career"}/>}>
                        <CareerTimeline/>
                    </Collapsible>
                </StyledDivFifth>
                <StyledDivSixth>
                    <Collapsible trigger={<CollapsibleTrigger title={"bio"}/>}>
                        <p>Hola</p>
                        <p>Hola</p>
                    </Collapsible>
                </StyledDivSixth>
            </div>
    );
}

export default App;
