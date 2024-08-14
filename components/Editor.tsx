import React, { useState } from 'react';
import axios from 'axios';
import { Email } from '../types/types';

interface EditorProps {
    email: Email;
    onClose: () => void;
}

const Editor: React.FC<EditorProps> = ({ email, onClose }) => {
    const [content, setContent] = useState(`\n\n\n---\nOn ${email.date}, ${email.from} wrote:\n${email.body}`);

    const handleSend = async () => {
        try {
            await axios.post(`/api/send-reply?thread_id=${email.id}`, {
                from: email.from,
                to: email.to,
                subject: `Re: ${email.subject}`,
                body: content,
            });
            alert('Email sent!');
            onClose(); // Close the editor after sending the email
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <div className="w-2/3 p-4 bg-gray-800">
            <textarea
                className="w-full h-64 p-2 bg-gray-900 text-white rounded"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex justify-end space-x-2 mt-4">
                <button
                    onClick={onClose}
                    className="bg-gray-600 text-white p-2 rounded hover:bg-gray-700"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSend}
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Editor;
