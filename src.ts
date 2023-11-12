{
    // solution 1
    const numberToSquareAndStringToLength = (value: string | number) : number | number | undefined => {
        if (typeof value === "number") {
            return value * value;
        }
        if (typeof value === "string") {
        return value.length;
        }
    };
    const numberSquareResult = numberToSquareAndStringToLength(10);
    const stringLengthResult = numberToSquareAndStringToLength("Find out my length");
    console.log(numberSquareResult);
    console.log(stringLengthResult);
    

    // solution 2
    interface Person {
        name: string;
        phone?: string;
        address?: {
            city: string;
            street: string;
        }
    }
    const myself: Person = {
        name: "Nahid",
        phone: "01300000000",
        address: {
            city: "CTG",
            street: "Oxygen Road CTG",
        }
    };
    const getAddressCity = (me : Person) : string | undefined => {
        return me?.address?.city;
    };
    const city = getAddressCity(myself);
    console.log(city)
    

    // solution 3
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
        super(name, species);
        }
    };
    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
    }

    const isCat = (animal: Animal) => {
        if(animal instanceof Cat){
            console.log("yes, it's a cat.")
        } else {
            console.log("no, it's not a cat.")
        };
    };

    const cat = new Cat("Sundhary", "persian");
    const dog = new Dog("Kalu", "zerman")

    isCat(cat);
    isCat(dog);
    

    // solution 4
    const totalNumber = (mixedData: (string | number)[]) : number => {
        let total : number = 0;
        mixedData.map(i => {
            if(typeof i === "number"){
                total = total + i;
            }
        })
        return total;
    };
    const mixedData: (string | number)[] = [1, 'two', 3, 'four', 5];
    const totalNumberSum = totalNumber(mixedData);
    console.log(totalNumberSum)
    

    // solution 5
    interface Car {
        make: string;
        model: string;
        year: number;
    }
    interface Driver {
        name: string;
        drivingLicense: string;
    }

    const car : Car = {
        make: "Yamaha Company",
        model: "R15",
        year: 2020,
    };
    const driver : Driver = {
        name: "Nahid",
        drivingLicense: "455553457"
    };

    type TypeOfBoth = typeof car & typeof driver;
    const makeCombined = (car: Car, driver: Driver) : TypeOfBoth => {
      return {
        ...driver,
        ...car,
      };
    };
    const combinedResult: TypeOfBoth = makeCombined(car, driver);
    console.log(combinedResult);
    

    // solution 6
    const add = (unkhonwValue: unknown) : void => {
        let initialValue : number = 0;
        if(Array.isArray(unkhonwValue)){
            if (unkhonwValue.every(i=>typeof(i) === "number")) {
                const sum = unkhonwValue.reduce((item, a) => item + a, initialValue);
                console.log(sum);
            } else {
                console.log("Error!!! Your value is not an array of numbers");
            }
        } else {
            console.log("Error!!! Your entered value in not an array");
        }

    }


    const unkhonwValue: unknown  = [2, 3, 4];
    add(unkhonwValue);
    

    // solution 7
        const findFirstOccurrence = <T>(param1: T[], param2: T): number => {
            const index : number = param1.indexOf(param2);
            if(index >=0) {
                return index;
            } else {
                return -1;
            }
        };
        const numbers: number[] = [1, 2, 3, 4, 5, 2];
        const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];
        const targetNumber: number = 1;
        const targetString: string = "mango";
        const indexInNumbers : number = findFirstOccurrence(numbers, targetNumber);
        const indexInStrings : number = findFirstOccurrence(strings, targetString);
        console.log(indexInNumbers);
        console.log(indexInStrings);
    
}
