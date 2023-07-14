import React from "react";
import { LoginUserContainer } from "../LoginUser/LoginUser.Styled"
import { useState } from "react";
import user_woman from "../../imagens/user_woman.png"
import axios from "axios";


export function LoginUser() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.email)

    }

    const handlePassword = (e) => {
        setPassword(e.target.password)

    }

    // const sendLogin = (e) =>{
    //     e.preventDefault()

    //     const body = {
    //         email : email,
    //         password : password
    //     }

    //     axios.post(`${BaseUrl}`, body, {

    //     }).then((response)=>{
    //         console.log(response)
    //     }).catch((error)=>{
    //         console.log(error.response)
    //     })
    // }

    return (
        <LoginUserContainer>
            <div className="login">
                <img src={user_woman} alt="photo perfil" />

                <form >

                    <input value={email}
                        onChange={handleEmail}
                        placeholder="E-mail" />
                    <input value={password}
                        onChange={handlePassword}
                        placeholder="Senha" />
                </form>
                <button>Entrar</button>

                <span>Fazer login</span>
                <span>Esqueci a senha</span>
            </div>
        </LoginUserContainer>
    )
}