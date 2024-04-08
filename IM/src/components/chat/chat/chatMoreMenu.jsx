

import styled from "@emotion/styled";
import { UnfoldMoreDouble } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const ChatMoreMenu = ({setOpenDrawer}) => {
  const [open, setOpen] = useState(null);
  const handleClose = () => {
    setOpen(null);
  };
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const MenuOption = styled(MenuItem)`
    font-size: 16px;
    padding: 10px 80px 10px 24px;
    color: #000 ;
    // border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    `

  return (
    <>
      <UnfoldMoreDouble onClick={handleClick} className="menu_icon" />
      <Menu 
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuOption onClick={() => {handleClose(); setOpenDrawer(true);}} className="menu_Option">Profile</MenuOption>
        <MenuOption onClick={handleClose} className="menu_Option">Profile</MenuOption>
        <MenuOption onClick={handleClose} className="menu_Option">Profile</MenuOption>
      </Menu>
    </>
  );
};

export default ChatMoreMenu;
