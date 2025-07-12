function addIngredient(event){
    event.preventDefault();
    const myData= getData();
    const newLi= CreateNewLi(myData);
    addToList(newLi);
}

function getData(){

    const name= document.getElementById("ingredient").value
    const amount= document.getElementById("amount").value
    return{
        name,
        amount,
    };
}

function CreateNewLi(myData){
    return `<li> Ingredient: ${myData.name}, Amount: ${myData.amount}</li>`
}

function addToList(newLi){
    document.getElementById("ingredient-list").innerHTML += newLi;

}