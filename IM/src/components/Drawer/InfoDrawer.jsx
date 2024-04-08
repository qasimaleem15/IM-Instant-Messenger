import { Box, Drawer, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";

const drawerstyle = {
    left: 1,
    width: '33%',
    '@media (max-width: 600px)': { // Media query for mobile screens (example: max-width 600px)
        width: '100%', // Set width to 100% for mobile screens
      },
}
const Header = styled(Box)`
    height: 15%;
    display: flex;
    background-color: #800080;

    & > p {
        margin-top: auto;
        color: #ffd700;
        font-weight: 700;
        padding: 15px;
        padding-left: 75px;
        font-size: 24px;
    }
    @media (max-width: 600px) { // Media query for mobile screens (example: max-width 600px)
        height: 10%; // Set height to 10% for mobile screens
        & > p {
          font-size: 18px; // Decrease font size for mobile screens
        }
      }
`
const Component = styled(Box)`
background: linear-gradient(to bottom, #4169e1, #908c8c);
height: 85%;
@media (max-width: 600px) { // Media query for mobile screens (example: max-width 600px)
    height: 90%; // Set height to 90% for mobile screens
  }
`
const InfoDrawer = ({open, setOpen}) =>{ // Object Destructring Method

    const handleClose =() =>{
        setOpen(false);
    }

    return(
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{sx: drawerstyle}}
            style={{zIndex: 1500}}
        >
            <Header>
               <ArrowBack onClick={() => setOpen(false)}  className="cursor_pointer drawer_arrow"/> 
               <Typography>Profile</Typography>
            </Header>
            <Component>
                <Profile />
            </Component>
        </Drawer>
    )
}
export default InfoDrawer;