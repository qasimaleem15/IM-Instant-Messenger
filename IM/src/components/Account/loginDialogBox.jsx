import { useContext } from "react";
import { Dialog, Box, Typography, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { AccountContext } from "../../context/AccountProvider";
import AnimatedText from "./AnimatedText";
import { addUser } from "../../service/api";
// Main CSS
const Component = styled(Box)`
  display: flex;
  padding: 4rem 0.5rem;
  gap: 4rem;
  @media (max-width: 600px) {
    display: block;
    padding: 2rem 0.5rem;
    gap: 0;
  }
`;
const Container = styled(Box)`
  padding: 1rem 1rem;
  @media (max-width: 600px) {
    padding: 1rem 0;
  }
`;
const ParaFirst = styled(Typography)`
  color: #ffd700;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 0 0 24px white;
  line-height: 38px;
  font-weight: 500 !important;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 16px;
    text-align: center;
    line-height: 24px;
  }
  @media (min-width: 601px) and (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`;
const dialogStyle = {
  height: "95%",
  marginTop: "10%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "0 0 24px white",
  overflow: "hidden",
  backgroundColor: "#800080",
  borderRadius: "24px",
};
const DeveloperName = styled("h2")`
  font-size: 42px;
  font-weight: 500 !important;
  font-weight: bolder;
  margin-top: 1rem;
  text-align: center;
  color: #ffd700;
  text-shadow: 0 0 44px white;
  line-height: 28px;
  @media (max-width: 600px) {
    font-size: 14px;
    font-weight: 500 !important;
    margin-top: 0rem;
    color: #ffd700;
    text-shadow: 0 0 24px white;
  }
  @media (min-width: 601px) and (max-width: 768px) {
    font-size: 18px;
    font-weight: bolder;
    margin-top: 1rem;
  }
`;
const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    // Assuming res.credential contains the JWT token
    const token = res.credential; // Extract the token from res.credential
    const decodedToken = jwtDecode(token); // Decode the JWT token
    console.log(decodedToken); // Log the decoded token to console
    setAccount(decodedToken);
    await addUser(decodedToken);
  };
  const onLoginError = (res) => {
    console.log("Login Failed", res);
  };
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
      <Component className="container">
        <Box className="row align-items-center">
          <Container className="col-md-6 pr-0">
            <ParaFirst>
              Register for instant messaging (IM) to engage in real-time
              communication with your significant other.{" "}
            </ParaFirst>
          </Container>

          <Box
            style={{ position: "relative" }}
            className="col-md-5 d-flex justify-content-center p-0"
          >
            <img src={qrCodeImage} alt="QR Code" className="img-fluid" />
            <Box style={{ position: "absolute", top: "45%" }}>
              <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </Box>
          </Box>
        </Box>
      </Component>
      <DeveloperName>
        <AnimatedText texts={["Muhammad Qasim", "Ahmad Iqbal"]} />
      </DeveloperName>
    </Dialog>
  );
};

export default LoginDialog;
