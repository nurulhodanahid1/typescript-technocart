// learning functions

// normal function
function sum (x : number, y : number) : number {
    return x + y;
}
sum(23, 34)


// arrow function
const add = (num1: number, num2: number) : number => num1 + num2;
add(3, 45);

// Object --> function --> method
const poorUser ={
    name: "Nahid",
    balance: 0,
    newBalance(balance : number) : string {
        return `My new balance is: ${balance + balance}`;
    }
}


const arr : number[] = [3, 5, 7];

const newArr : number[] = arr.map((item : number) => item*item);



