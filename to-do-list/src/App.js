import './App.css';
import React from 'react';
import { CreateUser } from './components/CreateUser/CreateUser';
import { Card } from './components/Card/Card'
import GlobalStyle from './GlobalStyled';
import styled from 'styled-components';

export const AppContainer = styled.div`
padding: 100px;
background-color:limegreen;
`

export function App() {
    return (

        <AppContainer>
            <GlobalStyle />
            <h1>Aqui é o App</h1>
            <CreateUser />
            <Card />
        </AppContainer>

    )
}


export default App;
