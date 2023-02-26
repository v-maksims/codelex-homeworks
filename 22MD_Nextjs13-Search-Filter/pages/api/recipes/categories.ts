import { NextApiRequest, NextApiResponse } from 'next';
import connectToMongo from '@/pages/utils/connectionToMongo';
import Category from '@/pages/utils/categoriesSchema';

export default function recipesHandler (req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    connectToMongo();

    if (method === 'GET') {
        Category.find()
            .then((data) => res.status(200).json(data))
            .catch((error) => res.status(400).send(error));
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
