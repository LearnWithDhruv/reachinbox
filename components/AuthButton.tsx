import React from 'react';

interface AuthButtonProps {
    onClick: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
            <img src="/google-icon.png" alt="Google" className="mr-2" />
            Sign Up with Google
        </button>
    );
};

export default AuthButton;
