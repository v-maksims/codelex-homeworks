import { NextApiRequest, NextApiResponse } from 'next';
import connectToMongo from '@/utils/connectionToMongo';
import Recipe from '@/schemas/recipesSchema';

export default function getRecipesByID (req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    connectToMongo();
    Recipe.findOne({ _id: id })
        .then((data) => res.json(data))
        .catch((err) => res.send(err));
}
