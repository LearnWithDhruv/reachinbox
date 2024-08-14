import { useEffect } from 'react';

interface KeyboardShortcutsProps {
    onDelete: () => void;
    onReply: () => void;
}

const KeyboardShortcuts: React.FC<KeyboardShortcutsProps> = ({ onDelete, onReply }) => {
    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key === 'D' || event.key === 'd') {
                event.preventDefault();
                onDelete();
            } else if (event.key === 'R' || event.key === 'r') {
                event.preventDefault();
                onReply();
            }
        };

        document.addEventListener('keydown', handleKeydown);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, [onDelete, onReply]);

    return null;
};

export default KeyboardShortcuts;
