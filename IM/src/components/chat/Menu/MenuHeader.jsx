import { Box, styled } from "@mui/material";
import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Chat as MessageIcon, ScreenShare } from "@mui/icons-material";
import MoreMenu from "./MoreMenu";
import InfoDrawer from "../../Drawer/InfoDrawer";
import ScreenShareInfoDrawer from "../../screenshare/Drawer/ScreenShareInfoDrawer";
import ScreenShareButton from "../../screenshare/screenshare";

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
  cursor: pointer;
`;

const MenuHeader = () => {
  const [openProfileDrawer, setOpenProfileDrawer] = useState(false);
  const [openScreenShareDrawer, setOpenScreenShareDrawer] = useState(false);

  const { account } = useContext(AccountContext);

  const toggleProfileDrawer = () => {
    setOpenProfileDrawer(!openProfileDrawer);
  };

  const toggleScreenShareDrawer = () => {
    setOpenScreenShareDrawer(!openScreenShareDrawer);
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
              onClick={() => toggleProfileDrawer()}
            />
          </UserDpbox>
          <Box className="col-md-8 Menuitems">
            <MessageIcon className="menu_icon1" />
            <ScreenShare className="menu_icon" onClick={() => toggleScreenShareDrawer()} />
            <MoreMenu setOpenDrawer={setOpenProfileDrawer} className="menu_icon" />
          </Box>
        </Component>
      </Box>
      <InfoDrawer open={openProfileDrawer} setOpen={setOpenProfileDrawer}>
        {/* Content for the profile InfoDrawer */}
      </InfoDrawer>
      <ScreenShareInfoDrawer open={openScreenShareDrawer} setOpen={setOpenScreenShareDrawer}>
        {/* Content for the screen sharing drawer */}
        {/* You can include the ScreenShareButton component here */}
        <ScreenShareButton />
      </ScreenShareInfoDrawer>
    </>
  );
};

export default MenuHeader;
