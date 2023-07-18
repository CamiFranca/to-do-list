import './App.css';
import React from 'react';
import { CreateUser } from './components/CreateUser/CreateUser';
import { Card } from './components/Card/Card'
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyled';
import { TasksList } from './components/TasksList/TasksList.js';
import { TasksBoard } from './components/TasksBoard/TasksBoard';
import { LoginUser } from './components/LoginUser/LoginUser';

export const AppContainer = styled.div`
width: 100vw;
height: 100vh;
background-color:limegreen;
display:flex;
/* flex-direction:column;
justify-content: center;
align-items:center; */

`

export function App() {
    return (
        <AppContainer>
            <GlobalStyle />
            {/* <Card />
            <CreateUser />
            <TasksList /> */}
            {/* <TasksBoard/> */}
            <LoginUser/>
        </AppContainer>

    )
}

export default App;
