// תרגול א
//1
const returnBig = (num1: number, num2: number) => {
  if (num1 > num2) return num1;
  return num2;
};
//2
const printBig = (num1: number, num2: number) => {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
};
//3
const ifEvenOrOdd = (num: number) => {
  if (num % 2 === 0) return "even";
  return "odd";
};
//4
const lengthString = (string: string) => {
  const length: number = string.length;
  return length;
};
//5
const range = (number: number) => {
  const result: number[] = [];
  for (let i = 1; i < number; i++) {
    result.push(i);
  }
  return result;
};
//6
const getMax = (array: number[]) => {
  const result: number = Math.max(...array);
  return result;
};
//7
type PersonType = {
  name: string;
  age: number;
  isStudent: boolean;
};
//8
const printPerson = (person: PersonType) => {
  const result: string = `name: ${person.name}, age: ${person.age}, is student: ${person.isStudent}`;
  console.log(result);
};
//9
const isMinor = (person: PersonType) => {
  if (person.age < 10) return true;
  return false;
};
//10
interface BookInterface {
  Title: string;
  Author: string;
  Year: number;
}
//11
type ReaderType = {
  person: PersonType;
  favoriteBook: BookInterface;
};
//12
const oldPerson = (persons: ReaderType[]) => {
  let old: number = 0;
  let name: string = "";
  persons.forEach((onePerson) => {
    if (onePerson.person.age >= old) {
      old = onePerson.person.age;
      name = onePerson.person.name;
    }
  });
  return name;
};
//13
const olBook = (persons: ReaderType[]) => {
  let old: number = 2023;
  let name: string = "";
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
const sumAllEven = (numbers: number[]) => {
  let sum: number = 0;
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      sum += number;
    }
  });
  return sum;
};
//2
type rectangle = {
  width: number;
  height: number;
};
const arearRectangle = (dimensions: rectangle) => {
  const area: number = dimensions.height * dimensions.width;
  return area;
};
//3
const isPalindrome = (item: string | number) => {
  item = String(item);
  let left: number = 0;
  let right: number = item.length - 1;
  let isPalindrome: boolean = true;
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
const correctSizeToItem = (item: string) => {
  let first: string = item[0];
  let notFirst: string = item.substring(1, item.length);
  first = first.toUpperCase();
  notFirst = notFirst.toLowerCase();
  const result: string = first + notFirst;
  return result;
};
const correctSizeToArray = (array: string[]) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = correctSizeToItem(array[i]);
  }
};
//5
const toSet = (array: number[]) => {
  const helpArray: number[] = [];
  array.forEach((number) => {
    if (!helpArray.includes(number)) {
      helpArray.push(number);
    }
  });
  return helpArray;
};
//6
type NamePerson = { firstName: string; lastName: string };
const cronyms = (person: NamePerson) => {
  let cronyms: string = person.firstName[0] + person.lastName[0];
  cronyms = cronyms.toUpperCase();
  return cronyms;
};
//7
type Man = {
  name: string;
  age: number;
};
const average = (array: Man[]) => {
  let sum: number = 0;
  array.forEach((man) => {
    sum += man.age;
  });
  sum /= array.length;
  return sum;
};
//8
type values = {
  max: number;
  min: number;
};
const findMaxAndMin = (numbers: number[]) => {
  const max: number = Math.max(...numbers);
  const min: number = Math.min(...numbers);
  const result: values = { max, min };
  return result;
};
//9
const reverseArray = (array: any[]) => {
  return array.reverse();
};
