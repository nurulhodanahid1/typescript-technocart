{
    // spread operator
    // rest operator
    // destructuring 

    // spread operator
    const bros1 : string[] = [ "mahim", "fowad", "ahad"];
    const bros2 : string[] = [ "b", "shakib", "ahosan"];
    bros1.push(...bros2)

    const mentors1 = {
        typescript: "mezba",
        next : "nahid",
    }
    const mentors2 = {
        prisma: "ashok",
        cloud : "bristy",
    }
    const mentorList = {
        ...mentors1,
        ...mentors2
    }

    // rest operator
    const greetFriend = (...friends : string[]) => {
        friends.forEach((friend : string) => console.log(`Hi ${friend}`));
    }
    greetFriend("shakil", "srabon", "tanvir", "al amain");
}