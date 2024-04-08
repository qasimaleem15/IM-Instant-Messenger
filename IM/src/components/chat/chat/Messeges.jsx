import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import Message from "./Message";
import { useContext, useState, useEffect } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../service/api";

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;
const Container = styled(Box)`
  padding: 2px ; 20px;
`
const Messeges = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessageFlag, setnewMessageFlag] = useState(false);
  const { account } = useContext(AccountContext);
  const [file, setFile] = useState();
  // const scrollRef = useRef();

  useEffect(() => {
    const getMessagesDetails = async () => {
      let data = await getMessages(conversation._id);
      setMessages(data);
    };
    conversation._id && getMessagesDetails();
  }, [person._id, conversation._id, newMessageFlag]);

    // useEffect(() => {
    //   scrollRef.current?.scrollIntoView({transition: "smooth"})
    // }, [messages])

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id, // Corrected access to conversation._id
        type: "text",
        text: value
      };
     await newMessage(message);

     setValue(" ");
     setnewMessageFlag(prev => !prev)
    }
  }

  return (
    <Box>
      <Component>
        {messages &&
          messages.map(message => (
            <Container>
               <Message message={message} />
            </Container>
          ))}
      </Component>

      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value} // Corrected from Value to value
        file={file}
        setFile={setFile}
      />
    </Box>
  );
};

export default Messeges;
