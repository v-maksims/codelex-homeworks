import { NextApiRequest, NextApiResponse } from 'next';
import connectToMongo from '@/pages/utils/connectionToMongo';
import Recipe from '@/pages/utils/recipeSchema';

type Trecipe = {
    _id: string;
    title: string;
    ingredients: string[];
    recipe: string[];
    image: string;
    category: string;
}

export default function recipesHandler (req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req;
    connectToMongo();

    if (method === 'GET') {
        Recipe.find()
            .then((data) => res.status(200).json(data))
            .catch((error) => res.status(400).send(error));
    } else if (method === 'POST') {
        const {
            image, ingredients, recipe, title, category,
        }:Trecipe = JSON.parse(body).recipeData;

        Recipe.create({
            title: title.toLowerCase(),
            ingredients,
            recipe,
            image,
            category,
        })
            .then((data) => res.status(200).json(data))
            .catch((error) => res.status(400).send(error));
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
