import styled from "styled-components";

export const TaskBoardContainer = styled.div`
width: 15%;
height:220px;
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
        border:none;
        outline:none;
        background-color:blueviolet;
        /* margin-bottom:6px; */
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
