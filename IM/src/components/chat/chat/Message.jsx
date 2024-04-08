import {Box, Typography, styled} from "@mui/material";
import { formatDate } from "../../../utils/common-utils";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Own = styled(Box)`
background-color: #800080 !important;
color: #ffd700;
max-width: 60%;
margin-left: auto;
margin-top: 8px;
width: fit-content;
padding: 6px 12px;
border-radius: 22px;
margin-right: 18px;
border-bottom-right-radius: 0px ;
display: flex;
word-break: break-word;
`;
const Wrapper = styled(Box)`
background-color: #ffd700 !important;
color: #800080;
max-width: 60%;
width: fit-content;
padding: 6px 12px;
border-radius: 22px;
border-bottom-right-radius: 0px ;
display: flex;
margin-right: auto;
word-break: break-word;
`;
const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px;
`;
const Time = styled(Typography)`
    font-size: 10px;
    word-break: keep-all;
    margin-top: auto;
`;
export const Message = ({ message }) => {

    const { account } = useContext(AccountContext);

    return(
        <>
            {
                account.sub === message.senderId ?
                    <Own>
                        <Text>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Own>
                :
                    <Wrapper>
                        <Text>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Wrapper>
            }
        </>
       
    )
}

export default Message;