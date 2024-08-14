import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmailList from './EmailList';
import EmailDetail from './EmailDetail';
import Editor from './Editor';
import ThemeToggle from './ThemeToggle';
import KeyboardShortcuts from './KeyboardShortcuts';
import { Email } from '../types/types'; // Import the Email type

const Onebox: React.FC = () => {
    const [emails, setEmails] = useState<Email[]>([]); // Type emails as an array of Email objects
    const [selectedEmail, setSelectedEmail] = useState<Email | null>(null); // selectedEmail can be an Email or null
    const [isReplying, setIsReplying] = useState(false);

    useEffect(() => {
        fetchEmails();
    }, []);

    const fetchEmails = async () => {
        try {
            const response = await axios.get('/api/fetch-onebox');
            setEmails(response.data);
        } catch (error) {
            console.error('Error fetching emails:', error);
        }
    };

    const selectEmail = async (id: string) => {
        try {
            const response = await axios.get(`/api/fetch-email?thread_id=${id}`);
            setSelectedEmail(response.data);
            setIsReplying(false); // Reset replying state when selecting a new email
        } catch (error) {
            console.error('Error fetching email:', error);
        }
    };

    const deleteEmail = async (id: string | undefined) => {
        if (!id) return;
        try {
            await axios.delete(`/api/delete-email?thread_id=${id}`);
            setEmails(emails.filter(email => email.id !== id));
            setSelectedEmail(null);
        } catch (error) {
            console.error('Error deleting email:', error);
        }
    };

    const handleReply = () => {
        if (selectedEmail) {
            setIsReplying(true);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            <EmailList emails={emails} onSelectEmail={selectEmail} />
            <EmailDetail email={selectedEmail} onDeleteEmail={() => deleteEmail(selectedEmail?.id)} />
            {isReplying && selectedEmail && (
                <Editor email={selectedEmail} onClose={() => setIsReplying(false)} />
            )}
            <ThemeToggle />
            <KeyboardShortcuts onDelete={() => deleteEmail(selectedEmail?.id)} onReply={handleReply} />
        </div>
    );
};

export default Onebox;
