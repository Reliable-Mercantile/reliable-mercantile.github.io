import { Button, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Creator, watson, cecelia, elli, blythe } from '../../pseudo_database/creators';
import styled from '@emotion/styled';

interface CreatorDescriptionProps {
    creator : Creator;
}

export const CreatorDescription = ({creator}: CreatorDescriptionProps) => {
    const theme = useTheme();
    return (
        <div style={{display: "grid", padding: "10px", rowGap: "10px", gridTemplateRows: "min-content min-content 1fr min-content"}}>
        <img style={{height: "auto", maxWidth: "150px", borderRadius: "50%", border: `3px solid ${theme.palette.primary}`}} src={window.location.origin + creator.image} alt={creator.name.split(" ")[0] + " Logo"}/>
        <Typography variant='subtitle1'>{creator.name}</Typography>
        <Typography variant="body1">{creator.description}</Typography>
        {creator.links ? creator.links.patreon ? 
            <Button 
                variant="contained"
                href={creator.links.patreon}
                target="_blank">
                    Support {creator.name}
            </Button> : 
        "" : ""}
        </div>
    )
};

export const AllCreatorDescriptions = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 750;

    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
         // subscribe to window resize event "onComponentDidMount"
         window.addEventListener("resize", handleResizeWindow);
         return () => {
           // unsubscribe "onComponentDestroy"
           window.removeEventListener("resize", handleResizeWindow);
         };
       }, []);

    if (width > breakpoint) {
        return (
            <div style={{justifyContent: "space-between", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
            <CreatorDescription creator={watson}/>
            <CreatorDescription creator={elli}/>
            <CreatorDescription creator={cecelia}/>
            <CreatorDescription creator={blythe}/>
            </div>
        )
    } else {
        return (
            <div style={{justifyContent: "space-between", display: "grid", gridTemplateRows: "1fr 1fr 1fr 1fr"}}>
            <CreatorDescription creator={watson}/>
            <CreatorDescription creator={elli}/>
            <CreatorDescription creator={cecelia}/>
            <CreatorDescription creator={blythe}/>
            </div>
        )
    }
    
}