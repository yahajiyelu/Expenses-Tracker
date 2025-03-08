import styled from 'styled-components'

import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: #f8f8f8;
    padding: 20px;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 10px;
    }
`;

export const Button = styled(Link)`
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;