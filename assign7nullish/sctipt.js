const user = {
    profile: {
        name: "Alice",
        age: 25
    },

    adress: {
        country: "usa",
        state: "Nebraska",
        city: "Crab Orchard",
        home: "confidential"
    }
};


function getusercity(){
    let usercity = user?.adress?.city;
    return usercity ?? "Unknown";
}

console.log(getusercity())