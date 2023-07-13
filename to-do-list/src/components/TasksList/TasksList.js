import React from "react";
import { TasksListContainer } from "./TasksList.styled";
import arrow from "../../imagens/arrow.png"

export function TasksList() {


    return (
        <TasksListContainer>
            
            <div className="side">
                <h1>LABELS</h1>

                <div className="tasks">
                
                <img src={arrow} alt="arrow"/> 
                <span>Preparar almoço </span>
                
                </div>

            </div>
        </TasksListContainer>
    )
}