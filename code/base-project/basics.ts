// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 34;

let userName: string = 'Jozsef';

let isMe: boolean = true;

let hobbies: null;

let stuff: string[] = ['a', 'b', 'c'];

let dude = {
    name: 'Jozsef',
    age: 34
};

// Union

let example: string | number = 'example';

example = 19;

// Type

type Person = {
    name: string;
    age: number;
};

let dud: Person = {
    name: 'Jozsef',
    age: 34
};

// Functions

function add(a: number, b: number): number {
    return a + b;
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    return [value, ...array];
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
