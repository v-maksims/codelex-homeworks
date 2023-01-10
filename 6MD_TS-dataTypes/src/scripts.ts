// Exercise 1, 
// Create the Product interface based on the following example products.
// - type can be only "Program" or "Course"
// - currency can be only "USD", "HUF", "EUR"
//
// If you get stuck with the createdAt, check what is the return type of
// Date.parse (you can hover your mouse over it).

export interface Product {
    id: number,
    title: string,
    price: string,
    createdAt: number,
    currency: string,
    type: string,
    relatedCourses: Product[],

}

const products: Product[] = [
    {
        id: 4,
        title: "How to Hack NASA with HTML",
        price: "5000.00",
        createdAt: Date.parse("2022-05-18T14:48:00"),
        currency: "HUF",
        type: "Course",
        relatedCourses: [],
    },
    {
        id: 6,
        title: "Cat Grooming Masterclass",
        price: "10.00",
        createdAt: Date.parse("2022-05-19T16:00:00"),
        currency: "USD",
        type: "Program",
        relatedCourses: [
            {
                id: 11,
                title: "Lying Yourself, that you are the Master",
                price: "0.00",
                createdAt: Date.parse("2022-05-18T16:00:00"),
                currency: "USD",
                type: "Course",
                relatedCourses: [],
            },
            {
                id: 16,
                title: "Taming your cat, a life long learning",
                price: "0.00",
                createdAt: Date.parse("2022-05-17T16:00:00"),
                currency: "USD",
                type: "Course",
                relatedCourses: [],
            },
        ],
    },
]

// Exercise 2,
// Add type annotations to the arguements and return types 
// of these two functions. 

function filterCourses(products: Product[]): Product[] {
    return products.filter(product => product.type === 'Course')
};

function getTitles(products: Product[]): string[] {
    return products.map(product => product.title)
};

// Exercise 3,
// When Typescript infers correctly the types and when it is necessary
// to define them explicitly? Try to remove type annotations from the 
// filterCourses and getTitles functions
// above. Hover the mouse to the variables to check the inferred types.
// When do you see "any", and when something else?

// This two functions just here to check the proper return type in the tests.
const courses = filterCourses(products)
// const titles = getTitles(products)

// Exercise 4,
// Can I pass a Product object to the format Price function without
// typescript error? Why? 
// Spot that the inline type annotation here is different than the
// Product's type definition.  
function formatPrice(product: { price: string, currency: string }) {
    return `${product.price} ${product.currency}`
}

// passing a product to the function, for tests only.

// const price = formatPrice(products[0])


// ----- Everyday types -----

// Exercise 1) Primitives and arrays

// TODO: remove the "any" type, and add a concerete type for these basic primitives
// How they are working, if you remove all type definitions? How inference is working here?

let price: number;
price = 100.5;

let title: string;
title = "How to Hack NASA with HTML?";

let option: boolean;
option = true;

let prices: number[];
prices = [3, 5, 100, 3.5];

let titles: string[];
titles = ["How to Hack NASA with HTML?", "Cat Taming Masterclass"];

let options: boolean[];
options = [true, true, false];

// Exercise 2) Any

// Here we have a product, which type is an explicit any.
// Unforunately we have here a cat instead. It is clearly seen,
// that everything is accepted, typescript basically switched off.
// We will got a lot of runtime errors and unexpected undefineds
// here.

// TODO: Create a proper type definition based on the usage of the product,
//    correct the input data and the function usage below based on that.

const anyProduct: any = {name: 'Mr. Fluff', kind: 'British Shorthair', age: 4}
const productTitle = anyProduct.title
const priceWithTaxes = anyProduct.price * (1.25)
const upperCaseTitle = anyProduct.price.toUpperCase()
