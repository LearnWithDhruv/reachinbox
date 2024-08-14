import { NextApiRequest, NextApiResponse } from 'next';
import apiClient from '../../utils/api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { thread_id } = req.query;
    const { from, to, subject, body } = req.body;
    try {
        await apiClient.post(`/reply/${thread_id}`, {
            from,
            to,
            subject,
            body,
        });
        res.status(200).json({ message: 'Email sent!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send email' });
    }
};

export default handler;