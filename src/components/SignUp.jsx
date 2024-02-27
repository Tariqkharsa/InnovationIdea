// Signup.js
import React, { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const containerStyle = {
        marginTop: '8rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const formStyle = {
        width: '100%',
        marginTop: '1rem',
    };

    const submitButtonStyle = {
        marginTop: '2rem',
    };

    const handleSignup = () => {
        // Handle sign up logic here (to be implemented)
    };

    return (
        <Container component="main" maxWidth="xs" style={containerStyle}>
            <form style={formStyle} onSubmit={handleSignup}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={submitButtonStyle}
                >
                    Sign Up
                </Button>
            </form>
        </Container>
    );
}

export default Signup;