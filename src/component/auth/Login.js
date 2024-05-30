import { Box, Button, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate,Link, } from "react-router-dom";
import siena from "../../assets/image/banner1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/slice/LoginSlice";

const Login = ({setIsLoggedIn})=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginFormOpen, setLoginFormOpen] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state=>state)
    
    console.log("user", user)
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        // e.preventDefault()
        dispatch(userLogin({email:email, password:password}))
        localStorage.setItem("isProfile", true)
        navigate("/")
        window.location.reload()
    }
    const handelFormOpen = ()=>{
        // setLoginFormOpen(true)
        navigate("/register")
    }
    return(
        <>
        {/* {!loginFormOpen?  */}
        {/* <> */}
        <Box className="banner-login">
            <Box className="login-form">
           <form autoComplete="off" 
        //    onSubmit={handleSubmit}
           >
                        <h2 style={{
                            textAlign: "center",
                            marginBottom:"20px",
                            fontSize: "50px"
                        }}>Log in</h2>
                            <TextField 
                                label="Email"
                                onChange={e => setEmail(e.target.value)}
                                required
                                variant="outlined"
                                // color="#fff"
                                type="email"
                                // sx={{mb: 3}}
                                sx={{
                                    mb: 3,
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#fff', // Setting border color to white
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#fff', // Setting border color to white on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#fff', // Setting border color to white when focused
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#fff', // Setting label color to white
                                    },
                                    '& .MuiInputLabel-outlined.Mui-focused': {
                                        color: '#fff', // Setting label color to white when focused
                                    },
                                    '& .MuiInputBase-input': {
                                        color: '#fff', // Setting text color to white
                                    },
                                }}
                                fullWidth
                                value={email}
                                // error={emailError}
                            />
                            <TextField 
                                label="Password"
                                onChange={e => setPassword(e.target.value)}
                                required
                                variant="outlined"
                                color="secondary"
                                type="password"
                                value={password}
                                // error={passwordError}
                                fullWidth
                                // sx={{mb: 3}}
                                sx={{
                                    mb: 3,
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#fff', // Setting border color to white
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#fff', // Setting border color to white on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#fff', // Setting border color to white when focused
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#fff', // Setting label color to white
                                    },
                                    '& .MuiInputLabel-outlined.Mui-focused': {
                                        color: '#fff', // Setting label color to white when focused
                                    },
                                    '& .MuiInputBase-input': {
                                        color: '#fff', // Setting text color to white
                                    },
                                }}
                            />
                            <Box sx={{textAlign:"center", color:"#fff"}}>
                            <Button variant="outlined" color="secondary" type="button" sx={{
                                mt:3,
                                color:"#fff",
                                borderColor:"#fff",
                                backgroundColor:"#000",
                                
                                    '&:hover':{
                                        textDecoration: "none !important",
                                        backgroundColor: "#000 !important",
                                        border: "1px solid #fff !important",
                                    }
                                
                            }}
                            onClick={handleSubmit}
                            >Log in</Button>
                            {/* <span onClick={handelFormOpen}>Register</span> */}
                            </Box>
            </form>
            
            </Box>
            
            </Box>
            {/* <small>Create New Account? <Button onClick={handelFormOpen}>Register Here</Button></small> */}
            {/* </>
            :""} */}
        </>
    )
}
export default Login;