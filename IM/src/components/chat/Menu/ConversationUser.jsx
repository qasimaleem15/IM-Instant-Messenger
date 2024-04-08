import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { useContext } from "react";
import { setConversation } from "../../../service/api";

const Container = styled(Box)({
  display: "flex",
  padding: "1rem 2rem",
  height: "85px",
  gap: "1rem",
  borderBottom: "1px solid #ffd700",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#800080",
    transition: "0.5s ease-in-out all",
    "& > div p": {
      color: "#ffd700",
      transition: "0.5s ease-in-out all",
    },
    "& > div img": {
      transition: "0.4s ease-in-out all",
      transform: "scale(1.2)",
    },
  },
  "&:focus": {
    backgroundColor: "#800080",
    outline: "none",
    "& > div p": {
      color: "#ffd700",
    },
  },
  "@media (max-width: 768px)": {
    padding: "0.5rem 1rem",
    height: "75px",
    "&:hover": {
      backgroundColor: "initial",
      "& > div p": {
        color: "initial",
        transform: "initial",
      },
      "& > div img": {
        transform: "initial",
        boxShadow: "0 0 22px 4px #ffd700 !important",
      },
    },
    "&:focus": {
      backgroundColor: "initial",
      "& > div p": {
        color: "initial",
      },
    },
  },
});

const UserName = styled(Typography)({
  color: "#800080",
  fontSize: "16px",
  fontWeight: 600,
  "@media (max-width: 768px)": {
    fontSize: "12px",
  },
});

const ConversationUser = ({ user }) => {
  const { setPerson, account } = useContext(AccountContext);
  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub })
  }
  return (
    <Container onClick={() => getUser()} tabIndex={0}>
      <Box>
        <img
          src={user.picture}
          alt="user dp"
          className="img-fluid rounded-circle"
          width="50"
        />
      </Box>
      <Box>
        <UserName>{user.name}</UserName>
      </Box>
    </Container>
  );
};

export default ConversationUser;
