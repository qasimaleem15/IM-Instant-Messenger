import ConversationUser from "./ConversationUser";
import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../service/api";
import { Box, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";

const Container = styled(Box)`
  height: 80vh;
  overflow: overlay;
`;

const Conversation = ({ text }) => {
  const [users, setUsers] = useState([]);

  const { account, socket, setActiveUsers } = useContext(AccountContext);
  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      const filteredData = response.filter(user =>
        user.name.toLowerCase().includes(text.toLowerCase()));
      setUsers(filteredData);
    }
    fetchData();
  }, [text]);

   useEffect(() => {
     socket.current.emit('addUsers', account);
     socket.current.on("getUsers", users => {
       setActiveUsers(users);
     })
   }, [account])
   
  return (
    <Container>
      {users.map(
        (user) =>
          user.sub != account.sub && (
            <ConversationUser key={user.id} user={user} />
          )
      )}
    </Container>
  );
};

export default Conversation;
