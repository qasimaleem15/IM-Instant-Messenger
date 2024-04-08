import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../service/api";
import ChatHeader from "./chatHeader";
import Messeges from "./Messeges";

const ChatBox = () => {
    const { person, account } = useContext(AccountContext);

    const [conversation, setConversation] = useState({});

    useEffect(() => {
      const getConversationDetails = async () => {
     let data = await getConversation({senderId: account.sub, receiverId: person.sub});
        setConversation(data);
    }
      getConversationDetails();
    },[person.sub]);
  return (
    <Box>
      <ChatHeader person={person} />
      <Messeges person={person} conversation={conversation} />
    </Box>
  );
};
export default ChatBox;
