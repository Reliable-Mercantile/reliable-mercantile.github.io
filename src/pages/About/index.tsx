import React from 'react';
import { Home } from '../Home';
import { creators } from '../../pseudo_database/creators';
import { AllCreatorDescriptions } from './PersonDescription';

export const About = () => {
    return (
        <div style={{maxWidth: "1240px", width: "90vw"}}>
        <Home/>
        <AllCreatorDescriptions/>
        </div>
    )
};