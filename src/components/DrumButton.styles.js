import styled from 'styled-components';

export const Button = styled.button`
    width: 8rem;
    height: 8rem;
    color: #090909;
    font-size: 2rem;
    border-radius: 1.25rem;
    border: 1px solid #e8e8e8;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    margin: 0.75rem;
    box-shadow: 3px 3px 4px rgb(144, 219, 163), -3px -3px 4px rgb(144, 219, 163);

    &:hover {
        border: 1px solid white;
        cursor: pointer;
    }
`;
