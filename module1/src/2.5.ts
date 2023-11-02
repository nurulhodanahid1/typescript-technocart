// Reference type ---> Object

const userName : {
    firstName: string;
    middleName?: string; // Optional type
    lastName: string;
    university: "Jagannath University";  // type --> literal types
    readonly birthDay: string;
} = {
    firstName: "Shakil",
    lastName: "Ahmmed",
    university: "Jagannath University",
    birthDay: "02 May 2000",
}