function tellFirstName(){
    const name= prompt("enter your name");
    document.querySelectorAll('input')[0].value=name;

}

function changeInputBackground(){
    const color= prompt("enter color");

    for(const element of document.querySelectorAll("input")){
        element.style.backgroundColor= color;
    }
}

function paintDiv(){
    const color= prompt("enter color");
    document.getElementById("container").style.backgroundColor=color;
}