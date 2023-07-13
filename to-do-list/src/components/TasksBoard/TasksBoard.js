import React from "react";
import { TaskBoardContainer } from "../TasksBoard/TasksBoard.styled";
import bells from "../../imagens/bells.png"
import addUser from "../../imagens/addUser.png"
// import paintPalette from "../../imagens/paintPalette"
import iconPhoto from "../../imagens/iconePhoto.png"
import folder from "../../imagens/folder.png"
import paintPalette from "../../imagens/paintPalette.png"

export function TasksBoard (){

    return (
        <TaskBoardContainer>
        <div>
        <div className="list">
            <h1>Comprar</h1>
            <span>ovos</span>
            <span>maçã</span>
        </div>
        <div className="icons">
            <img src={bells} alt=""/>
            <img src={addUser} alt=""/>
            <img src={paintPalette} alt=""/>
            <img src={iconPhoto} alt=""/>
            <img src={folder} alt=""/>
        </div>
        </div>
        </TaskBoardContainer>
    )
}