import { NextApiRequest, NextApiResponse } from 'next';
import connectToMongo from '@/utils/connectionToMongo';
import Recipe from '@/schemas/recipesSchema';

export default function getRecipes (req: NextApiRequest, res: NextApiResponse) {
    connectToMongo();
    Recipe.find()
        .then((data) => res.json(data))
        .catch((err) => res.send(err));
}
