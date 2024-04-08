
import { useContext } from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LoginDialog from "./Account/loginDialogBox";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/chatDialog";

// For CSS AppBar => Header
const LoginHeader = styled(AppBar)`
    height: 30vh;
    background-color: #800080;
    box-shadow: none;
    `
    const Header = styled(AppBar)`
    height: 12vh;
    background-color: #800080;
    box-shadow: none;
    `
// For CSS Box => Component 
    // const Component = styled(Box)`
    // height: 100vh;
    // background:  #ffd700;
    // width: 100vw;
    // `
const Messenger = () => {

     const { account } = useContext(AccountContext);


  return (
    <Box>
      {
        account ?
        <>
          <Header>
            <Toolbar>

            </Toolbar>
          </Header>
          <ChatDialog />
        </>
        :
        <>
      <LoginHeader>
         <Toolbar>
            
         </Toolbar>
      </LoginHeader>
      <LoginDialog />
      </>
      }
    </Box>
  );
};

export default Messenger;
