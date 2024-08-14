import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import AuthButton from '../components/AuthButton';
import ThemeToggle from '../components/ThemeToggle';

const LoginForm: React.FC = () => {
    const router = useRouter();

    const handleGoogleLogin = async () => {
      try {
        const response = await axios.post('/api/google-login');
        router.push('/onebox'); 
    } catch (error) {
        console.error('Login failed:', error);
    }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="p-8 bg-gray-800 rounded shadow-md">
                <h1 className="text-2xl mb-4">Create a new account</h1>
                <AuthButton onClick={handleGoogleLogin} />
                <p className="mt-4">
                    Already have an account? <a href="#" className="text-blue-500">Sign In</a>
                </p>
            </div>
            <ThemeToggle />
        </div>
    );
};

export default LoginForm;
