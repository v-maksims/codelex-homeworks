import { NextApiRequest, NextApiResponse } from 'next';
import connectToMongo from '@/pages/utils/connectionToMongo';
import Recipe from '@/pages/utils/recipeSchema';

export default function recipeIdHandler (req: NextApiRequest, res: NextApiResponse) {
    const { query, method } = req;

    connectToMongo();

    if (method === 'GET') {
        Recipe.findOne({ _id: query.id })
            .then((data) => res.status(200).json(data))
            .catch((error) => res.status(400).send(error));
    } else if (method === 'DELETE') {
        Recipe.findByIdAndDelete(query.id)
            .then(() => res.status(200).json('Recipe deleted success'))
            .catch((error) => res.status(400).send(error));
    } else {
        res.setHeader('Allow', ['GET', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
