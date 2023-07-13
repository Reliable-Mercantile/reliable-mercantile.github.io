import { Button, Typography } from '@mui/material';
import React from 'react';
import { Creator, watson, cecelia, elli, blythe } from '../../pseudo_database/creators';

interface CreatorDescriptionProps {
    creator : Creator;
}

export const CreatorDescription = ({creator}: CreatorDescriptionProps) => {
    return (
        <div style={{display: "grid", rowGap: "5px"}}>
        <img style={{height: "auto", maxWidth: "150px", borderRadius: "50%", border: ""}} src={window.location.origin + creator.image} alt={creator.name.split(" ")[0] + " Logo"}/>
        <Typography variant='subtitle1'>{creator.name}</Typography>
        <Typography variant="body1">{creator.description}</Typography>
        {creator.links ? creator.links.patreon ? 
            <Button 
                style={{backgroundColor: "#b0341a"}}
                variant="contained"
                href={creator.links.patreon}
                target="_blank">
                    Support {creator.name}
            </Button> : 
        "" : ""}
        </div>
    )
};

interface AllCreatorDescriptionsProps {
    creators : Creator[];
}

export const AllCreatorDescriptions = ({creators}: AllCreatorDescriptionsProps) => {
    // return creators.map(creator => { <CreatorDescription creator={creator}/> })
    return (
        <div style={{justifyContent: "space-between", display: "grid", gridTemplateRows: "repeat(auto, 1fr)"}}>
        <CreatorDescription creator={watson}/>
        <CreatorDescription creator={elli}/>
        <CreatorDescription creator={cecelia}/>
        <CreatorDescription creator={blythe}/>
        </div>
    )
}