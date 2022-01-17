import React from 'react';
import { DrumButton } from './components/DrumButton';
import { StyledCard, StyledBox } from './App.styles';
import { SoundDisplay } from './components/SoundDisplay';

export default function App() {
    return (
        <StyledCard id="drum-machine" variant="outlined">
            <StyledBox>
                <SoundDisplay />
                <DrumButton></DrumButton>
            </StyledBox>
        </StyledCard>
    );
}
