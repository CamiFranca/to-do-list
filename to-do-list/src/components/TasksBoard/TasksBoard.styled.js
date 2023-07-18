import styled from "styled-components";

export const TaskBoardContainer = styled.div`
width: 15%;
height:20%;
display:flex;
flex-direction:column;
border-radius:3px;
background-color: blueviolet;
padding:15px;

.centreCard{
    height:100%;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    
}
.list{
    display:flex;
    flex-direction: column;
    
    h1{
     margin-bottom:15px;
    }
    textarea{
        width: 100%;
        max-height:80%;
        border:none;
        outline:none;
        /* appearance:none; */
        resize: none;
        background-color:blueviolet;
        /* height: auto;
        max-height: 200px; */
        /* overflow-y: auto; */
    }
}

.icons{
    display:flex;
   
    img{
        height:24px;
        width:24px;
        margin:9px;
        
    } 
}

    

`
