"use strict";
// תרגול א
//1
const returnBig = (num1, num2) => {
    if (num1 > num2)
        return num1;
    return num2;
};
//2
const printBig = (num1, num2) => {
    if (num1 > num2) {
        console.log(num1);
    }
    else {
        console.log(num2);
    }
};
//3
const ifEvenOrOdd = (num) => {
    if (num % 2 === 0)
        return "even";
    return "odd";
};
//4
const lengthString = (string) => {
    const length = string.length;
    return length;
};
//5
const range = (number) => {
    const result = [];
    for (let i = 1; i < number; i++) {
        result.push(i);
    }
    return result;
};
//6
const getMax = (array) => {
    const result = Math.max(...array);
    return result;
};
//8
const printPerson = (person) => {
    const result = `name: ${person.name}, age: ${person.age}, is student: ${person.isStudent}`;
    console.log(result);
};
//9
const isMinor = (person) => {
    if (person.age < 10)
        return true;
    return false;
};
//12
const oldPerson = (persons) => {
    let old = 0;
    let name = "";
    persons.forEach((onePerson) => {
        if (onePerson.person.age >= old) {
            old = onePerson.person.age;
            name = onePerson.person.name;
        }
    });
    return name;
};
//13
const olBook = (persons) => {
    let old = 2023;
    let name = "";
    persons.forEach((onePerson) => {
        if (onePerson.favoriteBook.Year <= old) {
            old = onePerson.favoriteBook.Year;
            name = onePerson.favoriteBook.Title;
        }
    });
    return name;
};
// תרגול ב
// 1
const sumAllEven = (numbers) => {
    let sum = 0;
    numbers.forEach((number) => {
        if (number % 2 === 0) {
            sum += number;
        }
    });
    return sum;
};
const arearRectangle = (dimensions) => {
    const area = dimensions.height * dimensions.width;
    return area;
};
//3
const isPalindrome = (item) => {
    item = String(item);
    let left = 0;
    let right = item.length - 1;
    let isPalindrome = true;
    while (left < right) {
        if (item[left] !== item[right]) {
            isPalindrome = false;
            break;
        }
        left++;
        right--;
    }
    return isPalindrome;
};
//4
const correctSizeToItem = (item) => {
    let first = item[0];
    let notFirst = item.substring(1, item.length);
    first = first.toUpperCase();
    notFirst = notFirst.toLowerCase();
    const result = first + notFirst;
    return result;
};
const correctSizeToArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = correctSizeToItem(array[i]);
    }
};
//5
const toSet = (array) => {
    const helpArray = [];
    array.forEach((number) => {
        if (!helpArray.includes(number)) {
            helpArray.push(number);
        }
    });
    return helpArray;
};
const cronyms = (person) => {
    let cronyms = person.firstName[0] + person.lastName[0];
    cronyms = cronyms.toUpperCase();
    return cronyms;
};
const average = (array) => {
    let sum = 0;
    array.forEach((man) => {
        sum += man.age;
    });
    sum /= array.length;
    return sum;
};
const findMaxAndMin = (numbers) => {
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const result = { max, min };
    return result;
};
//9
const reverseArray = (array) => {
    return array.reverse();
};
