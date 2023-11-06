{
    // Ternary operator || optional chaining || nullish coalescing operator

    const age : number = 18;

    if (age >= 18){
        console.log("adult");
    } else {
        console.log("not adult");
    };

    const isAdult = age>= 18 ? "adult" : "not adult";
    console.log({isAdult});

    // nullish coalescing operator
    // null / undefined ---> decision making
    const isAuthenticated = null;  // or null or undefined or "jffjfj" or ""
    const result1 = isAuthenticated ?? "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({result1}, {result2});


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
    console.log({userPermanentAddress})
 }