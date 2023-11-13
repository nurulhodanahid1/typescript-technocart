# interview answere 1:
* * benefits of using TypeScript over JavaScript in a project:
1. JavaScript extends to Typescript with extra features
2. Very easy to find bugs
3. Catching potential errors during development
4. Easy to manage large codebase 
5. Typescript code can be transpiled into older versions of JS
6. support older browser
7. increase productivity
8. type safety and
9. less bugs and less testing

# interview answer 2:
* * Optional Chaining
Optional chaining operator (?.) allows to access properties or methods of an object without explicitly checking if each level of the chain is null or undefined.

type User = {
    name: string;
    address: {
        city: string;
        presentAddress: string;
        permanentAddress?: string;
    }
}
const user : User = {
    name: "nahid",
    address: {
        city: "Gazipur",
        presentAddress: "Sreepur"
    }
}
const userPermanentAddress = user?.address?.permanentAddress ?? "user permanent address is not available";
console.log({userPermanentAddress}) //{userPermanentAddress: "user permanent address is not available"}

* * Nullish coalescing operator: 
Nullish coalescing operator (??) is used to provide a default value for a variable if its current value is null or undefined.
const isAdmin : null = null;
const result1 = isAdmin ?? "Normal User";
console.log({result1}); //{result1: "Normal User"}

# interview answer 3


