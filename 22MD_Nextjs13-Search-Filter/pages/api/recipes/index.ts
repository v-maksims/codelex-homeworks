import { NextApiRequest, NextApiResponse } from 'next';
import connectToMongo from '@/pages/utils/connectionToMongo';
import Recipe from '@/pages/utils/recipeSchema';

export default function recipesHandler (req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    console.log('method:', method);

    connectToMongo();

    if (method === 'GET') {
        Recipe.find().then((data) => {
            // res.revalidate('/recipes');
            res.status(200).json(data);
        });
    }

    // switch (method) {
    // case 'GET':
    //     Recipe.find().then((data) => res.json(data));
    //     break;
    // default:
    //     res.setHeader('Allow', ['GET']);
    //     res.status(405).end(`Method ${method} Not Allowed`);
    // }
}
