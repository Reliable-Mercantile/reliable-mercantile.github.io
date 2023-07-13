import React from 'react';
import { Home } from '../Home';
import { creators } from '../../pseudo_database/creators';
import { AllCreatorDescriptions } from './PersonDescription';

export const About = () => {
    return (
        <>
        <Home/>
        <AllCreatorDescriptions creators={creators}/>
        </>
    )
};