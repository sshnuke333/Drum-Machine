import React, { useEffect } from 'react';
import { Button } from './DrumButton.styles';
import { bank } from '../drumpPadData';

export const DrumButton = () => {
    useEffect(() => {
        window.addEventListener('keypress', handleKeyPress);
        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, []);

    const handleKeyPress = (event) => {
        const key = event.key.toUpperCase();
        if (bank.find((val) => val.keyTrigger === key)) {
            playSound(key);
            clickAnimation(key);
        }
    };

    const playSound = (id) => {
        const sound = document.getElementById(id);
        sound.currentTime = 0;
        sound.play();
    };

    const clickAnimation = (id) => {
        const button = document.getElementById(id).parentElement;
        setTimeout(() => {
            button.style.background = '#e8e8e8';
            button.style.boxShadow =
                '2px 2px 4px rgb(144, 219, 163), -2px -2px 4px rgb(144, 219, 163)';
        }, 300);
        button.style.background = 'rgb(144, 219, 163)';
        button.style.boxShadow =
            '3px 3px 4px rgb(144, 219, 163),-3px -3px 4px rgb(144, 219, 163)';
    };

    return bank.map((data) => (
        <Button
            id={data.id}
            key={data.id}
            className={`drum-pad ${data.keyTrigger}`}
            onClick={() => {
                clickAnimation(data.keyTrigger), playSound(data.keyTrigger);
            }}
        >
            {data.keyTrigger}
            <audio src={data.url} id={data.keyTrigger} className="clip"></audio>
        </Button>
    ));
};
