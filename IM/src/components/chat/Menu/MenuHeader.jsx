import { Box, styled } from "@mui/material";
import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Chat as MessageIcon, ScreenShare } from "@mui/icons-material";
import MoreMenu from "./MoreMenu";
import InfoDrawer from "../../Drawer/InfoDrawer";

const Component = styled(Box)`
  height: 84px;
  background-color: #800080;
  margin: 0;
  padding: 0;
`;
const UserDpbox = styled(Box)`
  height: 80px;
  width: 80px;
  margin-left: 1rem;
  curser: pointer;
`;
// const ContainerLeft = styled(Box)`
//   height: 10vh;
// `;

const MenuHeader = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const { account } = useContext(AccountContext);
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <Box className="container p-0 ">
        <Component className="row align-items-center">
          <UserDpbox className="col-md-4 d-inline-flex align-items-center">
            <img
              src={account.picture}
              alt="User DP"
              className="img-fluid rounded-circle cursor_pointer"
              onClick={() => toggleDrawer()}
            />

          </UserDpbox>
          <Box className="col-md-8 Menuitems">
            <MessageIcon className="menu_icon1" />
            <ScreenShare className="menu_icon" />
            <MoreMenu setOpenDrawer={setOpenDrawer} className="menu_icon" />
          </Box>
        </Component>
      </Box>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />

    </>
  );
};

export default MenuHeader;
