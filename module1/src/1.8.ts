{
    // destructuring

    const user = {
        id: 33444,
        name: {
            firstName: "nurul",
            middleName: "hoda",
            lastName: "nahid"
        },
        mobile : 89999988,
        address: "gazipur"
    }
    const {id, name: {middleName: midName}, mobile:phone} = user;
    console.log(id, midName, phone);

    // array destructuring
    const friends = ["rachel", "monica", "ross", "smith", "david", "steven"];
    const [ , , bestFriend, ...rest] = friends;
}