import { Box, styled, Typography } from "@mui/material";
import { UnfoldMoreDouble, Search } from "@mui/icons-material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";


const Header = styled(Box)`
  height: 84px;
  background-color: #800080;
  margin: 0;
  padding: 0 32px;
  border-left: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled("img")({
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  objectFit: "cover",
});
const Left = styled(Box)`
  display: flex;
  gap: 12px;
`;
const Name = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  color: #ffd700;
`;
const OnlineStatus = styled(Typography)`
  font-size: 12px;
  color: #ffd700;
`;
const Right = styled(Box)`
  display: flex;
  gap: 18px;   
`
const SearchIcon = styled(Search)`
    font-size: 32px;
    color: #ffd700;
    cursor: pointer;
    `
    const MenuItem = styled(UnfoldMoreDouble)`
    font-size: 32px;
    color: #ffd700;
    cursor: pointer;
    `
    const ChatHeader = ({ person }) => {

      const { activeUsers } = useContext(AccountContext);
    
      return (
        <Header>
          <Left>
            <Image src={person.picture} alt="dp" className="rounded-cicrcle img-fluid" />
            <Box>
              <Name>{person.name}</Name>
              <OnlineStatus>
                {activeUsers && activeUsers.find(user => user.sub === person.sub) ? 'online' : 'offline' }
              </OnlineStatus>
            </Box>
          </Left>
          <Right>
            <SearchIcon />
            <MenuItem />
          </Right>
        </Header>
      );
    };
    
export default ChatHeader;
