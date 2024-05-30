import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"

const Register = ()=>{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [password, setPassword] = useState('')
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, dateOfBirth, password) 
    }
    return(
        <>
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
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
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        required
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
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    // sx={{mb: 4}}
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
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                    fullWidth
                    // sx={{mb: 4}}
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
                <TextField
                    type="date"
                    variant='outlined'
                    color='secondary'
                    label="Date of Birth"
                    onChange={e => setDateOfBirth(e.target.value)}
                    value={dateOfBirth}
                    fullWidth
                    required
                    // sx={{mb: 4}}
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
                <Button variant="outlined" color="secondary" type="submit">Register</Button>
            </form>
            <small>Already have an account? <Link to="/login">Login Here</Link></small>
        </>
    )
}
export default Register;