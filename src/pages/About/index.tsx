import { CreatorDescription } from './CreatorDescription';
import { creators } from "../../pseudo_database/creators";
import { Typography } from '@mui/material';

export const About = () => {
    return (
        <div>
        <Typography>Meet our creators:</Typography>
        {creators.map((creator, id) => { return (
            <CreatorDescription key={id} creator={creator}/>)}
            )
        }
        </div>
    )
};