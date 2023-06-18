import React from "react";
import { Button, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Creator } from '../../pseudo_database/creators';

interface logoProps {
    src: string
}

const CircularLogo = styled.img<logoProps>`
  width: 8rem;
  border-radius: 100%;
  border-color: #FFFFFF;
  border-style: solid;
  border-width: 5px;
  transition: none;
`;

interface CreatorDescriptionProps {
    creator: Creator
}

const SupportButton = ({name, url_link} : {name: string, url_link: string}) => {
    console.log("I made it in here, isn't that so exciting?")
    return(
        <Button fullWidth href={url_link}>
            Want to support {name}?
        </Button>
    )
}

export const CreatorDescription = (props: CreatorDescriptionProps) => {
    const creator = props.creator;
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <CircularLogo src={creator.image}/>
            <Paper>
                <Typography>{creator.description}</Typography>
            </Paper>
            {creator.links !== undefined && creator.links.patreon !== undefined ? 
                <SupportButton name={creator.name} url_link={creator.links.patreon}/> :
                "" }
        </div>)
};