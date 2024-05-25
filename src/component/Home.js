import React from "react";
import CustomReactPlayer from "../reuseComponent/CustomReactPlayer";
import CustomCarousel from "../reuseComponent/CustomCarousel";
import { Box, Container, Typography } from "@mui/material";
import CustomMap from "../reuseComponent/CustomMap";

const Home = ()=>{
    return(
        <Container maxWidth="xl">
            <Box 
            className="typography-header" 
            sx={{
                marginTop:"15px"
            }}
            >
                <Typography variant="h4" className="header" gutterBottom>Popular Movies</Typography>
            </Box>
            <CustomCarousel />
            <Box 
      sx={{
        position: "relative",
        height: "300px",
        width: "100%",
        margin: "30px 0"
      }}
      >
        <CustomMap />
      </Box>
        </Container>
    )
}
export default Home;