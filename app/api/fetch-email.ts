import { NextApiRequest, NextApiResponse } from 'next';
import apiClient from '../../utils/api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { thread_id } = req.query;
    try {
        const response = await apiClient.get(`/onebox/${thread_id}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch email' });
    }
};

export default handler;