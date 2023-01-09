// Task 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

console.log('-----Task_01-----');

const sumFunction = (numOne: number, numTwo: number) => numOne + numTwo;

console.log(sumFunction(1, 2));
console.log(sumFunction(1, 10));
console.log(sumFunction(99, 1));

// Task 2
// Write a function that takes a value as argument
// Return the type of the value

console.log('-----Task_02-----');

const typeOfFunction = (value: any) => typeof value;

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

const function31 = (numArr: number[]) => {
    let result: number = 0;
    numArr.forEach(num => Math.sign(num) === -1 ? result++ : null);
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

const function34 = (numArr: number[]) => numArr.reduce((a: number, b: number) => a + b) / numArr.length;

console.log(function34([10, 100, 40]));
console.log(function34([10, 100, 1000]));
console.log(function34([-50, 0, 50, 200]));

// Task 35
// Write a function that takes an array of strings as argument
// Return the longest string

console.log('-----Task_35-----');

const function35 = (arr: string[]) => {
    let result: string = '';
    arr.forEach(word => word.length > result.length ? result = word : null);
    return result;
};

console.log(function35(['help', 'me']));
console.log(function35(['I', 'need', 'candy']));

// Task 36
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

console.log('-----Task_36-----');

const function36 = (arr: (boolean | string | number)[]) => arr.every(val => val === arr[0]);

console.log(function36([true, true, true, true]));
console.log(function36(['test', 'test', 'test']));
console.log(function36([1, 1, 1, 2]));
console.log(function36(['10', 10, 10, 10]));


// Task 37
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays


console.log('-----Task_37-----');

const function37 = (arrOne: (number | string | boolean)[], arrTwo: number[], arrThree?: string[]) => {
    arrTwo.forEach(val => arrOne.push(val));
    arrThree?.forEach(val => arrOne.push(val));
    return arrOne;
};

console.log(function37([1, 2, 3], [4, 5, 6]));
console.log(function37(['a', 'b', 'c'], [4, 5, 6]));
console.log(function37([true, true], [1, 2], ['a', 'b']));

// Task 38
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

type Tobject38 = {
    a: number,
    b: number
}

console.log('-----Task_38-----');

const function38 = (arr: Tobject38[]) => arr.sort((a, b) => a.b - b.b);

console.log(function38([{ a: 1, b: 2 }, { a: 5, b: 4 }]));
console.log(function38([{ a: 2, b: 10 }, { a: 5, b: 4 }]));
console.log(function38([{ a: 1, b: 7 }, { a: 2, b: 1 }]));

// Task 39
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

console.log('-----Task_39-----');

const function39 = (numArrOne: number[], numArrTwo: number[]) => {
    numArrTwo.forEach(num => numArrOne.includes(num) ? 0 : numArrOne.push(num));

    return numArrOne.sort((a, b) => a - b)
};

console.log(function39([1, 2, 3], [3, 4, 5]));
console.log(function39([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

// Task 40
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

console.log('-----Task_40-----');

const function40 = (numArr: number[], number: number) => {
    let result: number = 0;
    numArr.forEach(num => num > number ? result += num : 0);
    return result;
};

console.log(function40([1, 2, 3, 4, 5, 6, 7], 2));
console.log(function40([-10, -11, -3, 1, -4], -3));
console.log(function40([78, 99, 100, 101, 401], 99));

// Task 41
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

console.log('-----Task_41-----');

const function41 = (numOne: number, numTwo: number) => {
    let numArr: number[] = [];

    for (let i = numOne; i <= numTwo; i++) {
        numArr.push(i)
    };

    return numArr;
};

console.log(function41(2, 10));
console.log(function41(1, 3));
console.log(function41(-5, 5));
console.log(function41(2, 7));

// Task 42
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

console.log('-----Task_42-----');

type Tobject42 = {
    [key: string]: string[]
}

const function42 = (nameArr: string[]) => {
    let result: Tobject42 = {};
    for (let i = 0; i < nameArr.length; i++) {
        let nameLetter: string = nameArr[i].toLowerCase().charAt(0)
        if (result.hasOwnProperty(nameLetter)) {
            result[nameLetter].push(nameArr[i]);
        } else {
            result[nameLetter] = []
            result[nameLetter].push(nameArr[i]);
        }
    }
    return result;
}

console.log(function42(['Alf', 'Alice', 'Ben']));
console.log(function42(['Ant', 'Bear', 'Bird']));
console.log(function42(['Berlin', 'Paris', 'Prague']));

// Task 43
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

console.log('-----Task_43-----');

const function43 = (arr: (number | string | boolean)[], num: number) => {
    let result: (number | string | boolean)[] = [...arr];
    num >= 6 ? result.unshift(num) : result.unshift(0);
    return result;
};

console.log(function43([1, 2, 3], 6));
console.log(function43(['a', 'b'], 2));
console.log(function43([null, false], 11));


// Task 44
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

console.log('-----Task_44-----');

const function44 = (numArr: number[], pos: number) => {
    let result: number[] = [];
    const forLoopNum: number = pos - 1;
    for (let i = forLoopNum; i < numArr.length; i += pos) {
        result.push(numArr[i]);
    };
    return result;
};

console.log(function44([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(function44([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
console.log(function44([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2));

// Task 45
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

type Tobject45 = {
    continent: string,
    country: string
};

console.log('-----Task_45-----');

const function45 = (obj: Tobject45) => obj.country;

console.log(function45({ continent: 'Asia', country: 'Japan' }));
console.log(function45({ country: 'Sweden', continent: 'Europe' }));

// Task 46
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

type Tobject46 = {
    [key: string]: (string | number),
};

console.log('-----Task_46-----');

const function46 = (obj: Tobject46) => obj['prop-2'];

console.log(function46({ one: 1, 'prop-2': 2 }));
console.log(function46({ 'prop-2': 'two', prop: 'test' }));

// Task 47
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

type Tobject47 = {
    [key: string]: string
}

console.log('-----Task_47-----');

const function47 = (obj: Tobject47, key: string) => obj[key];

console.log(function47({ continent: 'Asia', country: 'Japan' }, 'continent'));
console.log(function47({ country: 'Sweden', continent: 'Europe' }, 'country'));

// Task 48
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

type Tobject48 = {
    [key: string]: string | number,
}

console.log('-----Task_48-----');

const function48 = (obj: Tobject48, prop: string) => Object.keys(obj).some(key => key === prop);

console.log(function48({ a: 1, b: 2, c: 3 }, 'b'));
console.log(function48({ x: 'a', y: 'b', z: 'c' }, 'a'));
console.log(function48({ x: 'a', y: 'b', z: 'c' }, 'z'));

// Task 49
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

type Tobject49 = {
    key: string,
}

console.log('-----Task_49-----');

const function49 = (str: string) => {
    let result: Tobject49 = { key: '' };
    result.key = str;
    return result;
};

console.log(function49('a'));
console.log(function49('z'));
console.log(function49('b'));

// Task 50
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

type Tobject50 = {
    [key: string]: string,
}

console.log('-----Task_50-----');

const function50 = (strA: string, strB: string) => {
    let result: Tobject50 = {};
    result[strA] = strB;
    return result;
};

console.log(function50('a', 'b'));
console.log(function50('z', 'x'));
console.log(function50('b', 'w'));

// Task 51
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

type TobjecStringsOrNumbers = {
    [key: (string | number)]: (string | number),
}

console.log('-----Task_51-----');

const function51 = (arrA: (number | string)[], arrB: (number | string)[]) => {
    let result: TobjecStringsOrNumbers = {};
    for (let i = 0; i < arrA.length; i++) {
        result[arrA[i]] = arrB[i]
    }
    return result;
};

console.log(function51(['a', 'b', 'c'], [1, 2, 3]));
console.log(function51(['w', 'x', 'y', 'z'], [10, 9, 5, 2]));
console.log(function51([1, 'b'], ['a', 2]));

// Task 52
// Write a function that takes an object (a) as argument
// Return an array with all object keys

type TobjectStringNumber = {
    [key: string]: number,
}

console.log('-----Task_52-----');

const function52 = (obj: TobjectStringNumber) => {
    let result = [];
    result.push(Object.keys(obj));
    return result;
};

console.log(function52({ a: 1, b: 2, c: 3 }));
console.log(function52({ j: 9, i: 2, x: 3, z: 4 }));
console.log(function52({ w: 15, x: 22, y: 13 }));

// Task 53
// Write a function that takes an object (a) as argument
// Return the sum of all object values

console.log('-----Task_53-----');

const function53 = (obj: TobjectStringNumber) => {
    let valueArr: number[] = Object.values(obj);
    let result: number = 0;
    valueArr.forEach(num => result += num)
    return result;
};

console.log(function53({ a: 1, b: 2, c: 3 }));
console.log(function53({ j: 9, i: 2, x: 3, z: 4 }));
console.log(function53({ w: 15, x: 22, y: 13 }));

// Task 54
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

console.log('-----Task_54-----');

const function54 = (obj: TobjectStringNumber) => {
    delete obj.b;
    return obj;
};

console.log(function54({ a: 1, b: 7, c: 3 }));
console.log(function54({ b: 0, a: 7, d: 8 }));
console.log(function54({ e: 6, f: 4, b: 5, a: 3 }));

// Task 55
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

console.log('-----Task_55-----');

const function55 = (objOne: TobjectStringNumber, objTwo: TobjectStringNumber) => {
    objTwo.d = objTwo.b;
    delete objTwo.b;
    let newobj: TobjectStringNumber = { ...objOne, ...objTwo };
    return newobj;
};

console.log(function55({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(function55({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

// Task 56
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

console.log('-----Task_56-----');

const function56 = (obj: TobjectStringNumber, num: number) => {
    const objKeys: string[] = Object.keys(obj);
    objKeys.forEach(key => obj[key] = obj[key] * num);
    return obj;
};

console.log(function56({ a: 1, b: 2, c: 3 }, 3));
console.log(function56({ j: 9, i: 2, x: 3, z: 4 }, 10));
console.log(function56({ w: 15, x: 22, y: 13 }, 6));

// Task 57
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

console.log('-----Task_57-----');

const function57 = (obj: TobjecStringsOrNumbers) => {
    const objKeys: (string | number)[] = Object.keys(obj);
    const objValues: (string | number)[] = Object.values(obj);
    let newObject: TobjecStringsOrNumbers = {};
    for (let i = 0; i < objKeys.length; i++) {
        newObject[objValues[i]] = objKeys[i];
    }
    return newObject;
};

console.log(function57({ z: 'a', y: 'b', x: 'c', w: 'd' }));
console.log(function57({ 2: 'a', 4: 'b', 6: 'c', 8: 'd' }));
console.log(function57({ a: 1, z: 24 }));

// Task 58
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

type TobjectStringString = {
    [key: string]: string,
}

console.log('-----Task_58-----');

const function58 = (obj: TobjectStringString) => {
    const objKeys: string[] = Object.keys(obj);
    const objValues: string[] = Object.values(obj);
    for (let i = 0; i < objValues.length; i++) {
        objValues[i].trim() === '' ? obj[objKeys[i]] = null : obj[objKeys[i]] = objValues[i];
    }
    return obj;
};

console.log(function58({ a: 'a', b: 'b', c: '' }));
console.log(function58({ a: '', b: 'b', c: ' ', d: 'd' }));
console.log(function58({ a: 'a', b: 'b ', c: ' ', d: '' }));

// Task 59
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

type TobjectProps = {
    fn?: string,
    ln?: string,
    size?: string,
    weight?: string,
}

console.log('-----Task_59-----');

const function59 = (obj: TobjecStringsOrNumbers) => {
    let editedObj: TobjectProps = {};

    obj.hasOwnProperty('fn') && (editedObj.fn = String(obj.fn));
    obj.hasOwnProperty('ln') && (editedObj.ln = String(obj.ln));
    obj.hasOwnProperty('size') && (editedObj.size = obj.size + 'cm');
    obj.hasOwnProperty('weight') && (editedObj.weight = obj.weight + 'kg');

    return editedObj;
};

console.log(function59({ fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67 }));
console.log(function59({ fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102 }));
console.log(function59({ fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71 }));
console.log(function59({ fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de' })
);

// Task 60
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

console.log('-----Task_60-----');

const function60 = (objectArr: TobjectStringString[], continent: string) => {
    const objectArrCopy: TobjectStringString[] = [];
    objectArr.forEach(obj => objectArrCopy.push({ ...obj }))
    objectArrCopy.forEach(key => key.continent = continent);
    return objectArrCopy
};

console.log(function60([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));
console.log(function60([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));

// Task 61
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

type TobjectNumbersNumber = {
    [key: number]: number,
}

console.log('-----Task_61-----');

const function61 = (numArr: number[]) => {
    let resultObj: TobjectNumbersNumber = {};
    numArr.forEach(num => resultObj.hasOwnProperty(num) ? resultObj[num]++ : resultObj[num] = 1);
    return resultObj
};

console.log(function61([1, 2, 2, 3]));
console.log(function61([9, 9, 9, 99]));
console.log(function61([4, 3, 2, 1]));

// Taks 62
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

console.log('-----Task_62-----');

const function62 = (dateOne: Date, dateTwo: Date) => dateOne.getTime() === dateTwo.getTime();

console.log(function62(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(function62(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
console.log(function62(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));

// Task 63
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

console.log('-----Task_63-----');

const function63 = (dateOne: Date, dateTwo: Date) => {
    const dateOneMsecInDay: number = dateOne.getTime() / 86400000;
    const dateTwoMsecInDay: number = dateTwo.getTime() / 86400000;
    if (dateOne > dateTwo) {
        return dateOneMsecInDay - dateTwoMsecInDay;
    } else {
        return dateTwoMsecInDay - dateOneMsecInDay;
    }
};

console.log(function63(new Date('2020-06-11'), new Date('2020-06-01')));
console.log(function63(new Date('2000-01-01'), new Date('2020-06-01')));

// Task 64
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

console.log('-----Task_64-----');

const function64 = (dateOne: Date, dateTwo: Date) => dateOne.getDay() === dateTwo.getDay();

console.log(function64(new Date('2000/01/01'), new Date('2000/01/01')));
console.log(function64(new Date('2000/01/01'), new Date('2000/01/02')));
console.log(function64(new Date('2001/01/01'), new Date('2000/01/01')));
console.log(function64(new Date('2000/11/01'), new Date('2000/01/01')));

// Task 65
// Write a function that takes two number arrays as parameters 
// and return an array which contains elements from both arrays

console.log('-----Task_65-----');

const function65 = (numArrOne: number[], numArrTwo: number[]) => [...numArrOne, ...numArrTwo];

console.log(function65([1, 2], [3, 4]));
console.log(function65([1, 2], [3, 4, 5, 6]));

// Task 66
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the last element

console.log('-----Task_66-----');

const function66 = (strArr: string[], str: string) => [...strArr, str];

console.log(function66(['Apple', 'Orange', 'Banana'], 'Kiwi'));

// Task 67
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the first element

console.log('-----Task_67-----');

const function67 = (strArr: string[], str: string) => [str, ...strArr];

console.log(function67(['Apple', 'Orange', 'Banana'], 'Kiwi'));

// Task 68 
// Write a function that takes two objects as parameters 
// and return an object which contains properties from both objects

console.log('-----Task_68-----');

const function68 = (objOne: TobjectStringNumber, objTwo: TobjectStringNumber) => {
    return { ...objOne, ...objTwo };
};

console.log(function68({ a: 1, b: 2 }, { c: 3, d: 4 }));
console.log(function68({ a: 1, b: 2 }, { c: 3, d: 4, e: 5, f: 6 }));

// Task 69
// Write a function that takes an object and a string as parameters 
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

console.log('-----Task_69-----');

const function69 = (obj: TobjecStringsOrNumbers, str: string) => {
    return { ...obj, favoriteMovi: str }
};

console.log(function69({ eyeColor: 'green', age: 10 }, 'Garfield'));
console.log(function69({ eyeColor: 'blue', age: 15 }, 'Twilight'));
