import React, { useState, useEffect } from 'react';
import { StyledDiv } from './SoundDisplay.styles';

export const SoundDisplay = () => {
    const [soundId, setSoundId] = useState('');
    useEffect(() => {
        document.querySelectorAll('button').forEach((ele) => {
            ele.addEventListener('keypress', handleKeyPress);
            ele.addEventListener('click', handleClick);
        });
        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, []);

    const handleKeyPress = (event) => {
        console.log(event);
        const key = event.key.toUpperCase();
        const keyPad = document.getElementsByClassName(key);
        setSoundId(keyPad[0].id);
    };
    const handleClick = (event) => {
        setSoundId(event.target.id);
    };

    return <StyledDiv id="display">{soundId}</StyledDiv>;
};
