function validateForm() {
    let isvalidated = true;
    document.getElementById("errorUsername").innerText = "";
    document.getElementById("errorPassword").innerText = "";

    let username = document.getElementById("username").value;
    if (username === "") {
        document.getElementById("errorUsername").innerText = "Username is required";
        isvalidated = false
    }
    
    let password = document.getElementById("password").value;
    if (password === "") {
        document.getElementById("errorPassword").innerText = "Password is required";
        isvalidated = false
    }

    
    if (!isvalidated){
        return false
    }else{return true;}
    
}