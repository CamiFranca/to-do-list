import React from "react";
import { CardContainer } from './Card.styled'
import { useState } from "react";
import tarefas from "../../imagens/tarefas.png"
import menu from "../../imagens/menu.png"
import update from "../../imagens/update.png"
import equals from "../../imagens/equals.png"
import user_woman from "../../imagens/user_woman.png"
import search from "../../imagens/search.png"
export function Card() {

    const [tasks, setTasks] = useState([])
    const [newTasks, setNewTasks] = ("")

    const handleTasksDelete = (index) => {
        const updatedTasks = tasks.filter((task) =>
            task.index !== index)
        setTasks(updatedTasks)

    }
    const handleTasksCreat = (event) => {
        event.preventDefault()
        const refreshTasks = [...tasks, newTasks]
        setTasks(refreshTasks)
        setNewTasks("")
    }


    return (
        <CardContainer>
            <div className="header">
                <div className="left">
                    <button className="btn_menu"> <img className="menu" src={menu} alt='menu' /> </button>
                    <img className="logo" src={tarefas} alt="logotype" />
                    <h1>ListMe</h1>
                </div>

                <div className="search">
                <a><img src={search} alt="search"/></a>
                <input type="search" placeholder="Pesquisar"></input>
                </div>

                <div className="rigth">
                    <button className="update" > <img src={update} alt="updade" /></button>
                    <button className="equals" > <img src={equals} alt="updade" /></button>
                    <img className="picture_user" src={user_woman} alt="picture_user" />
                </div>
            </div>
            
        </CardContainer>
    )
}