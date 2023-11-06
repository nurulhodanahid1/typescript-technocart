{
    // Never, unknown and nullable type

    // nullable types
    const searcResult = (value : string | null ) => {
        if (value){
            console.log("searching");
        } else {
            console.log("there is no search value available");
        }
    }
    searcResult(null);

    // unknown typeof
    const getSpeedInMitrePerSecond = (value : unknown) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        } else if ( typeof value === "string") {
            const [result, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(result)*1000) / 3600;
            console.log(`The speed is = ${convertedSpeed} ms^-1`);
        } else {
            console.log("wrong input value");
        }
    }
    // getSpeedInMitrePerSecond("34 km");
    // getSpeedInMitrePerSecond(566);
    getSpeedInMitrePerSecond(null)


    // Never type
    const throwError = (message : string) : never => {
        throw new Error(message);
    }
    throwError("there was an error occurred OMG");
    

}