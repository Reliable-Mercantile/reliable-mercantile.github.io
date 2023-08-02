import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Offering, primordium, watson_patreon, cecelia_patreon, eclectic_library_patreon, oracle_deck, soul_shares } from '../../pseudo_database/offerings';


interface ServiceDescriptionProps {
    service : Offering;
}

export const ServiceDescription = ({service}: ServiceDescriptionProps) => {
    return (
<Card square elevation={2} sx={{maxWidth: "50em", width: "30vw", minWidth: "425px"}}>
      <CardMedia
        component="img"
        alt={service.name}
        height="140"
        image={window.location.origin + service.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {service.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service.description}
        </Typography>
      </CardContent>
      {service.link ? 
      <CardActions>
        <Button  variant="contained" href={service.link} target="_blank" size="small">Learn More</Button>
      </CardActions> : ""}
    </Card>) };


export const AllServiceDescriptions = () => {
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

    return (
        <div style={{justifyContent: "space-around", display: "flex", gap: "10px",flexFlow: "wrap"}}>
            <ServiceDescription service={primordium}/>
            <ServiceDescription service={watson_patreon}/>
            <ServiceDescription service={cecelia_patreon}/>
            <ServiceDescription service={eclectic_library_patreon}/>
            <ServiceDescription service={oracle_deck}/>
            <ServiceDescription service={soul_shares}/>
        </div>
    );

    
}