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
                return false
            }
        }

        return true
    };

    if (checkFunc(a)) {
        return a;
    } else {
        while (true) {
            a++
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
            x++
            if (x % y === 0) {
                return x;
            }
        }
    }
};

console.log(function21(1, 23));
console.log(function21(23, 23));
console.log(function21(7, 3));
console.log(function21(-5, 7));
