import styled from "styled-components"

export const LoginUserContainer = styled.div`
height:100%;
width:100%;
display:flex;
align-items:center;
justify-content:center;
background-color:white;

.login{
background-color: lightblue; 
display:flex;
justify-content: center;
flex-direction:column;
align-items: center;
justify-content:center;
padding: 36px;
border-radius: 3px;
width:90%;
height:90%;
}


img{
    width:72px;
    height:72px;
    margin-bottom:26px;
}

form{
   
    display:flex;
    justify-content: center;
    flex-direction:column;  
    /* height:100%; */

    input{
        margin-bottom:12px; 
        padding:6px;
        width: 15vw;
        border:none;
        outline:none;
      

    }
}

button{
   
    margin-bottom:18px;
    padding:6px;
    cursor:pointer;
    width: 15vw;
    border:none;
}

span{
    margin-bottom:12px;
    cursor:pointer;
}

`