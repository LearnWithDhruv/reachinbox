import React from 'react';
import { Email } from '../types/types';

interface EmailDetailProps {
    email: Email | null;
    onDeleteEmail: () => void;
}

const EmailDetail: React.FC<EmailDetailProps> = ({ email, onDeleteEmail }) => {
    if (!email) return <div className="w-2/3 p-4 bg-gray-900">Select an email to view</div>;

    return (
        <div className="w-2/3 p-4 bg-gray-900">
            <h1>{email.subject}</h1>
            <div dangerouslySetInnerHTML={{ __html: email.body }} />
            <button
                onClick={onDeleteEmail}
                className="mt-4 bg-red-600 text-white p-2 rounded hover:bg-red-700"
            >
                Delete
            </button>
        </div>
    );
};

export default EmailDetail;
