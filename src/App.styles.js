import styled from 'styled-components';
import { Card, Box } from '@mui/material';

export const StyledCard = styled(Card)`
    background-color: #1e1e1e;
    color: white;
    height: auto;
    display: flex;
    flex-flow: column;
`;

export const StyledBox = styled(Box)`
    display: grid;
    height: 50rem;
    width: 40rem;
    grid-template-columns: 2fr 2fr 2fr;
    grid-template-rows: 0.5fr 2fr 2fr 2fr 0.5fr;
    align-items: center;
    justify-items: center;

    @media (max-width: 576px) {
        width: 20rem;
        height: 35rem;
    } ;
`;
