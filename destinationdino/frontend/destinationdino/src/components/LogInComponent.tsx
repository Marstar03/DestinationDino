import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

interface LoginProps {
    onSuccess: (response: any) => void;
    onError: (error: any) => void;
}

const Login: React.FC<LoginProps> = ({ onSuccess, onError }) => {
    return (
        <div>
            <h2>Login with Google</h2>
            <GoogleLogin onSuccess={onSuccess} onError={(error: any) => onError(error)} />
        </div>
    );
}

export default Login;



