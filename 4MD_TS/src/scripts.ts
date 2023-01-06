// Task 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

console.log('-----Task_01-----');

const sumFunction = (a: number, b: number) => a + b;

console.log(sumFunction(1, 2));
console.log(sumFunction(1, 10));
console.log(sumFunction(99, 1));

// Task 2
// Write a function that takes a value as argument
// Return the type of the value

console.log('-----Task_02-----');

const typeOfFunction = (a: any) => typeof a;

console.log(typeOfFunction(1));
console.log(typeOfFunction(false));
console.log(typeOfFunction({}));
console.log(typeOfFunction(null));
console.log(typeOfFunction('string'));
console.log(typeOfFunction(['array']));

// Task 3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

console.log('-----Task_03-----');

const function3 = (a: number | string, b: number | string) => a === b ? true : false;

console.log(function3(2, 3));
console.log(function3(3, 3));
console.log(function3(1, '1'));
console.log(function3('10', '10'));

// Task 4
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

console.log('-----Task_04-----');

const function4 = (a: string, b: number) => a[b - 1];

console.log(function4('abcd', 1));
console.log(function4('zyxbwpl', 5));
console.log(function4('gfedcba', 3));

// Task 5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

console.log('-----Task_05-----');

const function5 = (a: string) => a.slice(3);

console.log(function5('abcdefg'));
console.log(function5('1234'));
console.log(function5('fgedcba'));

// Task 6
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

console.log('-----Task_06-----');

const function6 = (a: string) => a.slice(a.length - 3);

console.log(function6('abcdefg'));
console.log(function6('1234'));
console.log(function6('fgedcba'));

// Task 7
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

console.log('-----Task_07-----');

const function7 = (a: string) => a.slice(0, 3);

console.log(function7('abcdefg'));
console.log(function7('1234'));
console.log(function7('fgedcba'));

// Task 8
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

console.log('-----Task_08-----');

const function8 = (a: string) => a.slice(0, Math.ceil(a.length / 2));

console.log(function8('abcdefg'));
console.log(function8('1234'));
console.log(function8('gedcba'));

// Task 9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

console.log('-----Task_09-----');

const function9 = (a: string) => a.substring(0, a.length - 3);

console.log(function9('abcdefg'));
console.log(function9('1234'));
console.log(function9('fgedcba'));

// Task 10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

console.log('-----Task_10-----');

const function10 = (a: number, b: number) => b / a * 100;

console.log(function10(100, 50) + '%');
console.log(function10(10, 1) + '%');
console.log(function10(500, 25) + '%');

// Task 11
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

console.log('-----Task_11-----');

const function11 = (a: number, b: number, c: number, d: number, e: number, f: number) => Math.pow((a + b - c) * d / e, f);

console.log(function11(6, 5, 4, 3, 2, 1));
console.log(function11(6, 2, 1, 4, 2, 3));
console.log(function11(2, 3, 6, 4, 2, 3));

// Task 12
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

console.log('-----Task_12-----');

const function12 = (a: number) => a % 2 === 0 ? true : false;

console.log(function12(10));
console.log(function12(-4));
console.log(function12(5));
console.log(function12(-111));

// Task 13
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

console.log('-----Task_13-----');

const function13 = (a: string, b: string) => {
    if (b.includes(a)) {
        let result: number = 0
        let arr: string[] = b.split('');
        arr.forEach(letter => letter === a ? result++ : null)
        return result;
    } else {
        return 0;
    }
};

console.log(function13('m', 'how many times does the character occur in this sentence?'));
console.log(function13('h', 'how many times does the character occur in this sentence?'));
console.log(function13('?', 'how many times does the character occur in this sentence?'));
console.log(function13('z', 'how many times does the character occur in this sentence?'));

// Task 14
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

console.log('-----Task_14-----');

const function14 = (a: number) => Number.isInteger(a);

console.log(function14(4));
console.log(function14(1.123));
console.log(function14(1048));
console.log(function14(10.48));

// Task 15
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

console.log('-----Task_15-----');

const function15 = (a: number, b: number) => a < b ? a / b : a * b;

console.log(function15(10, 100));
console.log(function15(90, 45));
console.log(function15(8, 20));
console.log(function15(2, 0.5));

// Task 16
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

console.log('-----Task_16-----');

const function16 = (a: string, b: string) => a.includes(b) ? b + a : a + b;

console.log(function16('cheese', 'cake'));
console.log(function16('lips', 's'));
console.log(function16('Java', 'script'));
console.log(function16(' think, therefore I am', 'I'));

// Task 17
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

console.log('-----Task_17-----');

const function17 = (a: number) => a.toFixed(2);

console.log(function17(2.12397));
console.log(function17(3.136));
console.log(function17(1.12397));
console.log(function17(26.1379));

// Task 18
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

console.log('-----Task_18-----');

const function18 = (a: number) => String(a).split('').map(Number);

console.log(function18(10));
console.log(function18(931));
console.log(function18(193278));

// Task 19
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

console.log('-----Task_19-----');

const function19 = (a: string, b: string) => a.charAt(0).toUpperCase() + a.slice(1).replace('%', '') + b.replace('%', '').split('').reverse().join('');

console.log(function19('java', 'tpi%rcs'));
console.log(function19('c%ountry', 'edis'));
console.log(function19('down', 'nw%ot'));

// Task 20
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

console.log('-----Task_20-----');

const function20 = (a: number) => {
    const checkFunc = (num: number) => {
        if (num <= 1) {
            return false;
        }

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    };

    if (checkFunc(a)) {
        return a;
    } else {
        while (true) {
            a++;
            if (checkFunc(a)) {
                return a;
            }
        }
    };
};

console.log(function20(38));
console.log(function20(7));
console.log(function20(115));
console.log(function20(2000));

// Task 21
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

console.log('-----Task_21-----');

const function21 = (x: number, y: number) => {

    if (x % y === 0) {
        return x;
    } else {
        while (true) {
            x++;
            if (x % y === 0) {
                return x;
            }
        }
    };
};

console.log(function21(1, 23));
console.log(function21(23, 23));
console.log(function21(7, 3));
console.log(function21(-5, 7));

// Task 22
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

console.log('-----Task_22-----');

const function22 = (a: string, b: string) => {
    const arr: string[] = a.split('').reverse()
    for (let i = 3; i < arr.length; i += 4) {
        arr.splice(i, 0, b)
    }
    return arr.reverse().join('')
}

console.log(function22('1234567', '.'));
console.log(function22('abcde', '$'));
console.log(function22('zxyzxyzxyzxyzxyz', 'w'));

// Task 23
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

console.log('-----Task_23-----');

const function23 = (a: string) => {
    const letterArr: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const wordArr: string[] = a.split('');

    let result: string[] = [];

    wordArr.forEach(letter => {
        result.push(letterArr[letterArr.indexOf(letter) + 1])
    });

    return result.join('')
}

console.log(function23('bnchmf'));
console.log(function23('bgddrd'));
console.log(function23('sdrshmf'));

// Task 24
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

console.log('-----Task_24-----');

const function24 = (a: number[], n: number) => a[n - 1];

console.log(function24([1, 2, 3, 4, 5], 3));
console.log(function24([10, 9, 8, 7, 6], 5));
console.log(function24([7, 2, 1, 6, 3], 1));

// Task 25
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

console.log('-----Task_25-----');

const function25 = (a: number[]) => a.slice(3);

console.log(function25([1, 2, 3, 4]));
console.log(function25([5, 4, 3, 2, 1, 0]));
console.log(function25([99, 1, 1]));

// Task 26
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

console.log('-----Task_26-----');

const function26 = (a: number[]) => a.slice(a.length - 3);

console.log(function26([1, 2, 3, 4]));
console.log(function26([5, 4, 3, 2, 1, 0]));
console.log(function26([99, 1, 1]));

// Task 27
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

console.log('-----Task_27-----');

const function27 = (a: number[]) => a.slice(0, 3);

console.log(function27([1, 2, 3, 4]));
console.log(function27([5, 4, 3, 2, 1, 0]));
console.log(function27([99, 1, 1]));


// Task 28
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

console.log('-----Task_28-----');

const function28 = (a: number[], n: number) => a.slice(a.length - n);

console.log(function28([1, 2, 3, 4, 5], 2));
console.log(function28([1, 2, 3], 6));
console.log(function28([1, 2, 3, 4, 5, 6, 7, 8], 3));

// Task 29
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

console.log('-----Task_29-----');

const function29 = (a: (string | number | boolean)[], b: string | number | boolean) => a.filter(val => val !== b);

console.log(function29([1, 2, 3], 2));
console.log(function29([1, 2, '2'], '2'));
console.log(function29([false, '2', 1], false));
console.log(function29([1, 2, '2', 1], 1));

// Task 30
// Write a function that takes an array (a) as argument
// Return the number of elements in a

console.log('-----Task_30-----');

const function30 = (a: number[]) => a.length;

console.log(function30([1, 2, 2, 4]));
console.log(function30([9, 9, 9]));
console.log(function30([4, 3, 2, 1, 0]));

// Task 31
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

console.log('-----Task_31-----');

const function31 = (a: number[]) => {
    let result: number = 0;
    a.forEach(num => Math.sign(num) === -1 ? result++ : null);
    return result;
};

console.log(function31([1, -2, 2, -4]));
console.log(function31([0, 9, 1]));
console.log(function31([4, -3, 2, 1, 0]));

// Task 32
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

console.log('-----Task_32-----');

const function32 = (numbers: number[]) => numbers.sort((a, b) => b - a);

console.log(function32([1, 3, 2]));
console.log(function32([4, 2, 3, 1]));

// Task 33
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

console.log('-----Task_33-----');

const function33 = (letters: string[]) => letters.sort();

console.log(function33(['b', 'c', 'd', 'a']));
console.log(function33(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

// Task 34
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

console.log('-----Task_34-----');

const function34 = (a: number[]) => a.reduce((a: number, b: number) => a + b) / a.length;

console.log(function34([10, 100, 40]));
console.log(function34([10, 100, 1000]));
console.log(function34([-50, 0, 50, 200]));

// Task 35
// Write a function that takes an array of strings as argument
// Return the longest string

console.log('-----Task_35-----');

const function35 = (a: string[]) => {
    let result: string = '';
    a.forEach(word => word.length > result.length ? result = word : null);
    return result;
};

console.log(function35(['help', 'me']));
console.log(function35(['I', 'need', 'candy']));

// Task 36
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

console.log('-----Task_36-----');

const function36 = (a: (boolean | string | number)[]) => a.every(val => val === a[0]);

console.log(function36([true, true, true, true]));
console.log(function36(['test', 'test', 'test']));
console.log(function36([1, 1, 1, 2]));
console.log(function36(['10', 10, 10, 10]));


// Task 37
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays


console.log('-----Task_37-----');

const function37 = (a: (number | string | boolean)[], b: number[], c?: string[]) => {
    b.forEach(val => a.push(val));
    c?.forEach(val => a.push(val));
    return a;
};

console.log(function37([1, 2, 3], [4, 5, 6]));
console.log(function37(['a', 'b', 'c'], [4, 5, 6]));
console.log(function37([true, true], [1, 2], ['a', 'b']));

// Task 38
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

type Tobject1 = {
    a:number,
    b:number
}

console.log('-----Task_38-----');

const function38 = (arr: Tobject1 []) =>  arr.sort((a, b) => a.b - b.b);

console.log(function38([{ a: 1, b: 2 }, { a: 5, b: 4 }]));
console.log(function38([{ a: 2, b: 10 }, { a: 5, b: 4 }]));
console.log(function38([{ a: 1, b: 7 }, { a: 2, b: 1 }]));