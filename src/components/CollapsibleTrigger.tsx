import React, {FC, useState} from 'react';
import {Flex, Box} from 'rebass';
import ArrowDown from '../icons/arrow-down.svg'
import ArrowUp from '../icons/arrow-up.svg'
import styled from "styled-components";
import {theme} from "../theme";

interface CollapsibleTriggerProps {
    title:string;
}

const CollapsibleTitle = styled(Box)`
  font-family: Sk-Modernist-Bold,monospace;;
  color: ${theme.colors.neutralDarkerAlt};
  padding-left: 20px;
`


const CollapsibleTrigger:FC<CollapsibleTriggerProps> = ({title})=> {

    const [isExpanded, expandOrCollapse] = useState<boolean>(false)
    return (<Flex onClick={()=>expandOrCollapse(!isExpanded)}>
        <CollapsibleTitle >
            {title}
        </CollapsibleTitle>
        <Box ml={'auto'} pr={2}>
            {
                isExpanded &&
                <img src={ArrowUp} alt={"Arrow up icon"}/>
            }

            {
                !isExpanded &&
                <img src={ArrowDown} alt={"Arrow down icon"}/>
            }
        </Box>
    </Flex>)
}

export default CollapsibleTrigger
