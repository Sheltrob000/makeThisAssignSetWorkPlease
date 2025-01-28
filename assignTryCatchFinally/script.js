class ValidationError extends Error{
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
let usernameLength = 10

function validateUsername(username){
    if (username.length < usernameLength){
        throw new ValidationError("username is to short");
    }else return "username valid";
}


try{
    console.log(validateUsername("helloshor"));
}catch (error){
    console.error(error);
}
console.log("hello");