import React from "react";
import { CardContainer } from './Card.styled'
import { useState } from "react";

export function Card() {

    const [tasks, setTasks] = useState([])
    const [newTasks, setNewTasks] = ("")

    const handleTasksDelete = (index) => {
        const updatedTasks = tasks.filter((task) =>
            task.index !== index)
        setTasks(updatedTasks)

    }
    const handleTasksCreat = (event)=>{
        event.preventDefault()
        const refreshTasks = [...tasks,newTasks]
        setTasks(refreshTasks)
        setNewTasks("")
    }


    return (
        <CardContainer>
            <h1>Aqui é o Card</h1>
        </CardContainer>
    )
}