import { Box } from "@mui/material";
import ChatImage from './ChatImage/logo.jpg';
import styled from "@emotion/styled";

const ImageContainer = styled(Box)`
    padding-top: 7rem !important;
    padding: 5rem;
    display: flex;
    justify-content: center;

`

const Emptychat = () =>{
    return(
            <Box className="container">
                <Box className="row align-items-center">
                <ImageContainer className="col-md-12 ">
                    <img src={ChatImage} alt="IM LOGO" className="img-fluid shadow_yellow" />          
                </ImageContainer>
            </Box>
            </Box>
        )
}

export default Emptychat;