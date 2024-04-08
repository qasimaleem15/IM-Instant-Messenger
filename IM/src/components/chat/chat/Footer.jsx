import { Box, InputBase, styled } from "@mui/material";
import {
  EmojiEmotionsOutlined,
  AttachFile,
  MicOutlined,
} from "@mui/icons-material";
// import { useEffect } from "react";
// import { uploadFile } from "../../../service/api";

const Container = styled(Box)`
  height: 55px;
  background: #800080;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 8px 22px;
  & > svg {
    color: #ffd700;
    font-size: 28px;
    margin: 12px;
    cursor: pointer;
  }
  & > label {
    color: #ffd700;
    font-size: 28px;
    margin: 8px;
    cursor: pointer;
  }
`;
const Search = styled(Box)`
  background-color: #fff;
  border-radius: 18px;
  width: 95%;
`;
const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;
`;
const ClipIcon = styled(AttachFile)`
  transform: rotate(40deg);
  font-size: 26px;
  margin-top: -6px;
  cursor: pointer;
`;

const Footer = ({sendText, setValue, value, setFile}) => {

  // useEffect(() => {
  //   const getImage =async () => {
  //     if (file) {
  //       const data = new FormData();
  //       data.append("name", file.name);
  //       data.append("file", file);

  //       await uploadFile(data);
  //     }
  //   }
  //   getImage();
  // }, [file])

  const onFileChange = (e) => {
    console.log(e);
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  }
  return (
    <Container>
      <EmojiEmotionsOutlined />
      <label htmlFor="fileInput">
      <ClipIcon />
      </label>
      <input 
      type="file"
      id="fileInput"
      style={{display: 'none'}} 
      onChange={(e) => onFileChange(e)}
      />
      <Search>
        <InputField
          placeholder="Type a Message"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          value={value}
        />
      </Search>
      <MicOutlined />
    </Container>
  );
};

export default Footer;
