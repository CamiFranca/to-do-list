import React from "react";
import { CreateUserContainer } from "./createUser.styled";
import { useState } from "react";
import axios from 'axios'
export function CreateUser() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)

    }
        const addUser = (e) => {
            e.preventDefault()

            const body = {
                name,
                email,
                password
            }

            // axios.post(`${BaseUrl}`, body, {

            // }).then((response) => {
            //     console.log(response)
            // }).catch((error) => {
            //     console.log(error.response)
            // })
        }

    
    return (
        <CreateUserContainer>
          
            <form onSubmit={addUser}>
                <input value={name}
                    onChange={handleName}
                    placeholder="Nome" />
                <input value={email}
                    onChange={handleEmail}
                    placeholder="E-mail" />
                <input value={password}
                    onChange={handlePassword}
                    placeholder="Senha" />
                <button>Criar perfil</button>
            </form>
        </CreateUserContainer>
    )
}