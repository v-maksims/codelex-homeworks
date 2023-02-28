import { NextApiRequest, NextApiResponse } from 'next';
import connectToMongo from '@/pages/utils/connectionToMongo';
import Recipe from '@/pages/utils/recipeSchema';
import { Trecipe } from '@/app/types/recipe';

export default function recipeIdHandler (req: NextApiRequest, res: NextApiResponse) {
    const { query, method, body } = req;

    connectToMongo();

    if (method === 'GET') {
        Recipe.findOne({ _id: query.id })
            .then((data) => res.status(200).json(data))
            .catch((error) => res.status(400).send(error));
    } else if (method === 'DELETE') {
        Recipe.findByIdAndDelete(query.id)
            .then(() => res.status(200).json('Recipe deleted success'))
            .catch((error) => res.status(400).send(error));
    } else if (method === 'PUT') {
        const {
            image,
            ingredients,
            recipe,
            title,
            category,
            _id,
        }:Trecipe = JSON.parse(body).recipeData;

        Recipe.updateOne({ _id }, {
            $set: {
                title: title.toLowerCase(),
                ingredients,
                recipe,
                image,
                category,
            },
        })
            .then((data) => res.status(200).json(data))
            .catch((error) => res.status(400).send(error));
    } else {
        res.setHeader('Allow', ['GET', 'DELETE', 'PUT']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
