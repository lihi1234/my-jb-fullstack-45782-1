// let colors=0;
// const items = JSON.parse(localStorage.getItem("animals"));
// items.forEach(addElementToDom);

// localStorage.removeItem("animals");
 let animals = JSON.parse(localStorage.getItem("animals")) || [];

window.onload = function () {

    animals.forEach((item) => {
        const tr = CreateNewLi(item);
        document.getElementById("animals-table").innerHTML += tr;
    });
};


// function addElement () {
//     saveDataInLocalStorage();
//     addElementToDom(input.value);
//     input.value = "";
// };

// function addElementToDom(text) {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(text));
//     ul.appendChild(li)
// }



function addStudent(event){
    event.preventDefault();
    const myData= getData();   
    const newTR= CreateNewLi(myData);
    addToList(newTR);
    saveToLocalStorage(myData);   


}

function saveToLocalStorage(myData){
    animals.push(myData);
    localStorage.setItem("animals", JSON.stringify(animals));
}
function getData(){

    const type= document.getElementById("animal-type").value
    const name= document.getElementById("animal-name").value
     const age= document.getElementById("age").value
     const pic= document.getElementById("pic").value
    // grades.push(grade);
    return{
        type,
        name,
        age,
        pic,
    };
}

function CreateNewLi(myData){
    return `<tr>
                <td>${myData.type} </td>
                <td>${myData.name} </td>
                <td>${myData.age} </td>
                <td> <img src="${myData.pic}"></td>
            </tr>`
}

function addToList(newTR){
   
    document.getElementById("animals-table").innerHTML += newTR;

}









