function validate(event){
    event.preventDefault();
    const password= document.getElementById("password").valve
    const hasCapitalLetters= password.toLowerCase() !== password;
    if(!hasCapitalLetters){
        document.getElementById("password-eror").innerText= "password must have a capital letter";
    }
    return hasCapitalLetters;
}