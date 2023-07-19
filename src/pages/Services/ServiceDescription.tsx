import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Offering, primordium, watson_patreon, cecelia_patreon, eclectic_library_patreon, oracle_deck, soul_shares } from '../../pseudo_database/offerings';


interface ServiceDescriptionProps {
    service : Offering;
}

export const ServiceDescription = ({service}: ServiceDescriptionProps) => {
    return (
<Card>
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
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
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
        <div style={{justifyContent: "space-between", display: "flex", flexWrap: "wrap"}}>
            <ServiceDescription service={primordium}/>
            <ServiceDescription service={watson_patreon}/>
            <ServiceDescription service={cecelia_patreon}/>
            <ServiceDescription service={eclectic_library_patreon}/>
            <ServiceDescription service={oracle_deck}/>
            <ServiceDescription service={soul_shares}/>
        </div>
    );

    
}