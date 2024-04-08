import { Search } from "@mui/icons-material";
import { Box, styled } from "@mui/material";
import { InputBase } from "@mui/material";

const Component = styled(Box)`
  background: #4169e1;
  display: flex;
  height: 74px;
  align-items: center;
  justify-content: center;
  // padding:12px;
  border-bottom: 1px solid #ffd700;
`;
const Wrapper = styled(Box)`
  background-color: #f0f2f5;
  position: relative;
  margin: 0 13px;
  margin-left: 18px;
  width: 100%;
  border-radius: 10px;
  @media (max-width: 600px) {
    margin: 0 20px;
  }
`;
const InputField = styled(InputBase)`
  width: 100%;
  padding: 16px 10px;
  height: 15px;
  padding-left: 64px;
  font-size: 14px;
`;
const Icon = styled(Box)`
  position: absolute;
  height: 100%;
  padding: 6px 10px;
  color: #000;
  top: -4px;
`;
const SearchMenu = ({setText}) => {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <Search 
          fontSize="small"
          />
        </Icon>
        <InputField placeholder="Search" 
          onChange={(e) => setText(e.target.value)}
        />
      </Wrapper>
    </Component>
  );
};
export default SearchMenu;
