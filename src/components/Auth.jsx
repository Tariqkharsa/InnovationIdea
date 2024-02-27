import React, { useState } from 'react';
import { Button, Typography, Container, Card, CardContent } from '@mui/material';
import Login from './Login';
import Signup from './SignUp';

function Auth() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(prevState => !prevState);
    };

    return (
        <Container component="main" maxWidth="sm" style={{ marginTop: '5rem' }}>
            <Card variant="outlined">
                <CardContent sx={{marginBottom: '10rem'}}>
                    <Typography sx={{marginBottom: '-5rem'}} variant="h4" align="center" gutterBottom>
                        {isLogin ? 'Login' : 'Sign Up'}
                    </Typography>
                    {isLogin ? <Login /> : <Signup />}
                </CardContent>
                <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    onClick={toggleForm}
                    style={{ margin: '1rem 0' }}
                >
                    {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
                </Button>
            </Card>
        </Container>
    );
}

export default Auth;
