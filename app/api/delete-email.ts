import { NextApiRequest, NextApiResponse } from 'next';
import apiClient from '../../utils/api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { thread_id } = req.query;
    try {
        await apiClient.delete(`/onebox/${thread_id}`);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete email' });
    }
};

export default handler;