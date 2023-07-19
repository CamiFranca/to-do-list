import styled from "styled-components";

export const TaskBoardContainer = styled.div`
width: 65%;
height:65%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:3px;
background-color: blueviolet;
/* padding:15px; */
margin:18px;

/* .centreCard{
    height:80%;
    width: 80%;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    background-color: blue;
    justify-content:center;
    align-items:center;
} */
.list{
    padding:18px;
    display:flex;
    flex-direction: column;
    height:100%;
    width: 100%;
    background-color:green;

    h1{
     margin-bottom:15px;
    }

    textarea{
        width: 100%;
        height:100%;
        border:none;
        outline:none;
        resize: none;
        background-color:green;
    
        /* overflow-y: auto; */
    }
}

.icons{
    display:flex;
    width: 100%;
    justify-content:center;
    align-items:center;
    background-color:green;
    img{
        height:24px;
        width:24px;
        margin:9px;
       
    } 
}

    

`
