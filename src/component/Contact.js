import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CustomMap from "../reuseComponent/CustomMap";

const Contact = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          marginTop: "15px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
              }}
            >
              Address
            </Typography>

            <Box
              sx={{
                // display:"flex",
                alignItems: "center",
                marginTop: "25px"
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                Address:-
              </span>
              <span
                style={{
                  color: "#ffffffcf",
                }}
              >
                N.P. Magura
                <br />
                Jageswarpada,
                <br />
                Gopalpur,
                <br />
                Baleswar,
                <br />
                756044,
                <br />
                Odisha.
              </span>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
              }}
            >
              Contact
            </Typography>
            <Box
              sx={{
                // display:"flex",
                alignItems: "center",
                marginTop: "25px"
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                Costumer support:-
              </span>
              <span
                style={{
                  color: "#ffffffcf",
                }}
              >
                9337179974
              </span>
            </Box>
            <Box
              sx={{
                // display:"flex",
                alignItems: "center",
                marginTop: "5px"
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                Technical Support :- 
              </span>
              <span
                style={{
                  color: "#ffffffcf",
                }}
              >
                +91-9337179974
              </span>
            </Box>
            <Box
              sx={{
                // display:"flex",
                alignItems: "center",
                marginTop: "5px"
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                Monday To Saturday:- 
              </span>
              <span
                style={{
                  color: "#ffffffcf",
                }}
              >
               (9.30AM to 7.30 PM)
              </span>
            </Box>
            <Box
              sx={{
                // display:"flex",
                alignItems: "center",
                marginTop: "5px"
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                Sunday Closed
              </span>
             
            </Box>
            <Box
              sx={{
                // display:"flex",
                alignItems: "center",
                marginTop: "5px"
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                Whatsapp:- 
              </span>
              <span
                style={{
                  color: "#ffffffcf",
                }}
              >
               9337179974
              </span>
            </Box>

            <Box
              sx={{
                // display:"flex",
                alignItems: "center",
                marginTop: "5px"
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                Email:-
              </span>
              <span
                style={{
                  color: "#ffffffcf",
                }}
              >
               paridarajesh08@gmail.com
              </span>
            </Box>
            {/* <Item>xs=4</Item> */}
          </Grid>
        </Grid>
      </Box>
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
  );
};
export default Contact;
