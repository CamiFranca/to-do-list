import './App.css';
import React from 'react';
import { CreateUser } from './components/CreateUser/CreateUser';
import { Card } from './components/Card/Card'
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyled';
import { TasksList } from './components/TasksList/TasksList.js';
import { TasksBoard } from './components/TasksBoard/TasksBoard';
import { LoginUser } from './components/LoginUser/LoginUser';
import { SideArea } from './components/SideArea/SideArea';

export const AppContainer = styled.div`
width: 100vw;
height: 100vh;
background-color:limegreen;
display:flex;
flex-wrap:wrap;
>div{
    display:flex;
    justify-content: center;
    align-items:center;
    width:70%;
    height:90%;
    border: 1px solid yellow;
}


`

export function App() {
    return (
        <AppContainer>
            <GlobalStyle />
            <Card />
            <SideArea/>
            {/* <CreateUser /> */}
            {/* <TasksList /> */}
            <div><TasksBoard/></div>
            
            {/* <LoginUser/> */}
        </AppContainer>

    )
}

export default App;
