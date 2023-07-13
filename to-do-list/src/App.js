import './App.css';
import React from 'react';
import { CreateUser } from './components/CreateUser/CreateUser';
import { Card } from './components/Card/Card'
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyled';


export const AppContainer = styled.div`
width: 100vw;
height: 100vh;
background-color:limegreen;
`

export function App() {
    return (
        <AppContainer>
            <GlobalStyle/>
            <h1>Aqui é o App</h1>
            <Card />
            <CreateUser />
        </AppContainer>

    )
}

export default App;
