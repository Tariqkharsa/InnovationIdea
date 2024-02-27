import React, { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';

function Login() {
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

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            
            // Assume the response contains a token field
            const sessionToken = data.token;
            
            // Handle storing the session token (e.g., in local storage or state)
            console.log('Session Token:', sessionToken);
            
            // Redirect or perform other actions upon successful login
        } catch (error) {
            console.error('Login Error:', error);
            // Handle login errors (e.g., display error message to the user)
        }
    };

    return (
        <Container component="main" maxWidth="xs" style={containerStyle}>
            <form style={formStyle} onSubmit={handleLogin}>
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
                    Sign In
                </Button>
            </form>
        </Container>
    );
}

export default Login;
