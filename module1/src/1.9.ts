{
    // type alias

    // type for function
    type Add = (num1: number, num2 :number) => number;
    const add : Add = (num1, num2) => num1 + num2;

    type IsAdmin = boolean;
    type UserName = string;
    const userName : UserName = "Nahid";
    const isAdmin : IsAdmin = false;
    
    // type for object
    type Student = {
        name: string;
        age: number,
        contactNumber?: string;
    }

    const student1 : Student = {
        name: "ashik",
        age: 45,
        contactNumber: "0134888888"
    }

    const student2 : Student = {
        name: "sohag", 
        age: 56
    }
    const student3 : Student ={
        name: "srabon",
        age: 34,
        contactNumber: "0123454556"
    }
}