import styled from "styled-components"

export const CardContainer = styled.div`
    height:100%;
    width:100%;
    display:flex;

   
    .header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:51px;
        background-color:white;
        height:10vh;
        width:100%;

    .left{
    width:25%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    .btn_menu{
        margin:27px 27px 27px 0px;
    }
    .menu{
        height:33px;
        width:33px;
       
    }
    .logo{
        height:33px;
        width:33px;
        margin-right:18px;
    }
    h1{
        color:lightgray;
    }
  }
  .rigth{
    width:30%;
    display:flex;
    justify-content:flex-end;
    align-items:center;

    .update{
        margin: 0px 27px 0px 27px;
       
        img{
            height:33px;
            width:33px; 
        }
    
    }
    .equals{
        margin-right:33px;
        img{
        height:33px;
        width:33px;
        
    }
    }
    .picture_user{
        height:33px;
        width:33px; 
        margin-left: 33px;
    }
  }
  button{
        border: none;
        /* border-style:outset; */
   
    }
.search{
        width:65%;
        display:flex;
        align-items:center;
        
    input{
       outline:none;
       height:6vh;
       padding-left:21px;
       border:none;
       background-color: lightgrey;
       width:90%;
       border-radius: 0px 9px 9px 0px;
       /* box-shadow:5px 5px 5px 5px ; */
    }
  
   
}
a{
        height:6vh;
        width:41px; 
        background-color: lightgrey;
        border-radius: 9px 0px 0px 9px;

        img{
        height:33px;
        width:33px; 
        margin:9px 0px 0px 9px;
       
    }
    } 
  
}
`