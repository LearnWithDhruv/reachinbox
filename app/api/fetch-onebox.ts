import { NextApiRequest, NextApiResponse } from 'next';
import apiClient from '../../utils/api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const response = await apiClient.get('/onebox/list');
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch emails' });
    }
};

export default handler;