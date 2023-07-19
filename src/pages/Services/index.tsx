import { Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import { AllServiceDescriptions } from './ServiceDescription';

const TextSection = styled.div`
  font-family: 'Besley', serif;
`

export const Services = () => {
    return (
        <>
            <Typography variant="h3">
                Let us know what you have in mind!
            </Typography>
            <Typography variant="h4">
                But if you must order on-menu, the following goods and/or services are available by various means through Reliable Mercantile members:
            </Typography>
            <TextSection>
                <AllServiceDescriptions/>
            </TextSection>
        </>
    )
};