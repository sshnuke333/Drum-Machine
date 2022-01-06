import styled from 'styled-components';

export const Button = styled.button`
    width: 100px;
    height: 100px;
    color: #090909;
    padding: 0.7em 1.7em;
    font-size: 30px;
    border-radius: 20px;
    background: #e8e8e8;
    border: 1px solid #e8e8e8;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    box-shadow: 2px 2px 4px rgb(144, 219, 163), -2px -2px 4px rgb(144, 219, 163);
    margin: 5px;

    &:hover {
        border: 1px solid white;
        cursor: pointer;
    }

    &:active {
        box-shadow: 3px 3px 4px rgb(144, 219, 163),
            -3px -3px 4px rgb(144, 219, 163);
        background: rgb(144, 219, 163);
    }
`;
