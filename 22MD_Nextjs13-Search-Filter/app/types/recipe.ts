export type TCategory = 'appetizers' | 'main courses' | 'desserts' | 'breakfasts' | ''

export type Trecipe = {
    _id: string;
    title: string;
    ingredients: string[];
    recipe: string[];
    image: string;
    category: TCategory;
}

export type TCategoryData = {
    _id: string;
    category: Omit<TCategory, ''>
}
