import { Dialog, Box, styled } from "@mui/material";
import Menu from "./Menu/Menu";
import Emptychat from "./chat/Emptychat";
import ChatBox from "./chat/chatBox";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const RightComponent = styled(Box)`
  border-left: 1px solid rgba(0, 0, 0, 1);
  background: linear-gradient(to bottom, #4169e1, #908c8c);
  height: 100vh;
  `
const dialogStyle = {
  height: "100%",
  width: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  // boxShadow: "0 0 12px white",
  overflow: "hidden",
  // backgroundColor: "#800080",
  borderRadius: "0",
  margin: "-15px",
};
const LeftMenu = styled(Box)`
  height: 100vh;
`
const ChatDialog = () => {

  const { person } = useContext(AccountContext);

  return (
    <div className="container">
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} >
        <Box className="row">
          <LeftMenu className="col-md-4 p-0">
            <Menu />
          </LeftMenu>
          <RightComponent className="col-md-8 p-0">
            {Object.keys(person).length ? <ChatBox /> : <Emptychat />}
          </RightComponent>
        </Box>
      </Dialog>
    </div>
  );
};

export default ChatDialog;
