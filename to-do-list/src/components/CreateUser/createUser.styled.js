import styled from "styled-components"

export const CreateUserContainer = styled.div`
background-color: pink;
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
width:30%;
height:20%;
padding:22px;

form{
    display: flex;
    flex-direction:column;  
    justify-content: center;
    align-items:center;
    width: 80%;
   
}

input{
    padding: 9px;
    margin-bottom: 12px;
    display: flex;
    flex-direction:column;  
    justify-content: center;
    align-items:center;
    width: 80%;
    outline: 0;
    border:none;
}
button{
    padding:9px;
    width: 80%;
    cursor: pointer;
    outline:none;
    text-decoration:none;
    border:none;
    /* box-shadow: 1 1 1 1; */

}
`