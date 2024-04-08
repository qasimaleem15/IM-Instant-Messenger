import { useState } from "react";
import MenuHeader from "./MenuHeader";
import { Box, styled } from "@mui/material";
import  SearchMenu  from "./Search";
import Conversation from "./Conversation";

const LeftComponent = styled(Box)`
  border-left: 1px solid rgba(0, 0, 0, 1);
  background: linear-gradient(to bottom, #4169e1, #908c8c);
  height: 100vh;
  `
const Menu = () =>{
  const [text, setText] = useState('')
    return(

       <LeftComponent>
            <MenuHeader />
            <SearchMenu setText={setText} className="menu"/>
            <Conversation text={text}/>
       </LeftComponent>

    )
}
export default Menu;