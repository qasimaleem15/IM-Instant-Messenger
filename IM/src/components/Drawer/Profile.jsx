import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 25px 0;
//   height: 30%;
  align-items: center;
//   border-bottom: 2px solid  #ffd700;
@media (max-width: 600px) { // Media query for mobile screens (example: max-width 600px)
   padding: 28px 0;
  }
` 
const Wrapper =styled(Box)`
    background-color: #800080;
    margin-top: 12px;
    padding: 32px 30px;
    box-shadow: 0px 0px 12px 2px #ffd700 !important;
    @media (max-width: 600px) { // Media query for mobile screens (example: max-width 600px)
        margin-top: 4px;
    padding: 22px 30px;
      }
`
const UserNameplaceholder = styled(Typography)`
    color: #ffd700;
    font-size: 14px;
    font-weight: 500;
`
const UserName = styled(Typography)`
    color: #ffd700;
    font-size: 18px;
    font-weight: 600;
    margin-top: 12px;
    @media (max-width: 600px) { // Media query for mobile screens (example: max-width 600px)
        font-size: 16px;
      }

`
const GoogledesContainer = styled(Typography)`
    margin-top: 12px;
    padding: 32px 30px;
 & > p{
    color: #ffd700;
    font-size: 16px;
 }
 @media (max-width: 600px) { // Media query for mobile screens (example: max-width 600px)
    margin-top: 4px;
    padding: 22px 30px;
 & > p{
    color: #ffd700;
    font-size: 14px;
 }
  }
`
const Profile = () =>{
    const {account} = useContext(AccountContext);
    return(
        <>
        <ImageContainer>
            <img src={account.picture} alt="User DP" className="rounded-circle shadow cursor_pointer"/>
        </ImageContainer>
        <Wrapper>
            <UserNameplaceholder>User Name:</UserNameplaceholder>
            <UserName>{account.name}</UserName>
        </Wrapper>
        <GoogledesContainer>
            <Typography>This is not your username or pin. This name taken from your Google account.</Typography>
        </GoogledesContainer>
        <Wrapper>
            <UserNameplaceholder>About</UserNameplaceholder>
            <UserName>Hi, There I'm using Instant Messenger (IM).</UserName>
        </Wrapper>
        </>
    )
}

export default Profile;