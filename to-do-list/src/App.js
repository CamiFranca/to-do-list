import './App.css';
import React from 'react';
import { CreateUser } from './components/CreateUser/CreateUser';
import { Card } from './components/Card/Card'
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyled';
import { TasksList } from './components/TasksList/TasksList.js';
import { TasksBoard } from './components/TasksBoard/TasksBoard';

export const AppContainer = styled.div`
width: 100vw;
height: 100vh;
background-color:limegreen;
display:flex;
flex-direction:column;
`

export function App() {
    return (
        <AppContainer>
            <GlobalStyle />
            {/* <h1>Aqui é o App</h1> */}
            <Card />
            {/* <CreateUser /> */}
            <TasksList />
            <TasksBoard/>
        </AppContainer>

    )
}

export default App;
