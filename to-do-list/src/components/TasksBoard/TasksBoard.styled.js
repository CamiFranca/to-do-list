import styled from "styled-components";

export const TaskBoardContainer = styled.div`
width: 15%;
height:220px;
display:flex;
border-radius:21px;

background-color: blueviolet;
.list{
    display:flex;
    flex-direction: column;
}
.icons{
    display:flex;
    flex-direction: row;
    img{
        height:24px;
        width:24px;
        margin:9px;
        
    }
    
}
`
