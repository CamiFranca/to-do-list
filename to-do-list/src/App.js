import './App.css';
import React from 'react';
import { CreateUser } from './components/CreateUser/CreateUser';
import { Card } from './components/Card/Card'
import styled from 'styled-components';


export const AppContainer = styled.div`
padding: 100px;
background-color:limegreen;
`

export function App() {
    return (

        <AppContainer>
            <h1>Aqui é o App</h1>
            <Card />
            <CreateUser />
        </AppContainer>

    )
}


export default App;
