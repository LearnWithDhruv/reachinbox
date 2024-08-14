// src/components/EmailList.tsx
import React from 'react';
import { Email } from '../types/types';

interface EmailListProps {
    emails: Email[]; // Define that emails is an array of Email objects
    onSelectEmail: (id: string) => void;
}

const EmailList: React.FC<EmailListProps> = ({ emails, onSelectEmail }) => {
    return (
        <div className="w-full md:w-1/3 p-4 bg-gray-800">
            {emails.map((email) => (
                <div
                    key={email.id}
                    onClick={() => onSelectEmail(email.id)}
                    className="p-2 hover:bg-gray-700 cursor-pointer"
                >
                    <h3 className="text-lg md:text-xl">{email.subject}</h3>
                    <p className="text-sm md:text-base">{email.snippet}</p>
                </div>
            ))}
        </div>
    );
};

export default EmailList;
