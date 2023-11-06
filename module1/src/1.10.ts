{
    // union types

    type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
    type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";
    type Developer = FrontendDeveloper | FullstackDeveloper;

    const newDeveloper : FrontendDeveloper = "juniorDeveloper";

    type User = {
        name: string;
        email: string;
        gender: "male" | "female";
        bloodGroup: "O+" | "AB+" | "O-" | "A+";
    }

    const user1 : User = {
        name: "nahid",
        email: "nahid@gmail.com",
        gender: "male",
        bloodGroup: "AB+"
    }
    const user2 : User = {
        name: "shakib",
        email: "shakib@gmail.com",
        gender: "male",
        bloodGroup: "A+"
    }

    // intersection types

    type FrontDeveloper = {
        skills: string[];
        designation1: "Frontend Developer";
    }
    type BackDeveloper = {
        skills: string[];
        designation2: "Backend Developer";
    }
    type FullDeveloper = FrontDeveloper & BackDeveloper;

    const fullDeveloper : FullDeveloper = {
        skills: ["HTMS", "CSS", "EXPRESS"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer",
    }


 }