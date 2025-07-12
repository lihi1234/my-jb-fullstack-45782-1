let colors=0;

function addStudent(event){
    event.preventDefault();
    const myData= getData();
    const newTR= CreateNewLi(myData);
    addToList(newTR);
    // calculateAverage();

}

function getData(){

    const colorName= document.getElementById("color-name").value
    // const lastName= document.getElementById("last-name").value
    // const grade= document.getElementById("garde").value
    // grades.push(grade);
    return{
        colorName,
        // lastName,
        // grade,
    };
}

function CreateNewLi(myData){
    return `<tr>
                <td>${myData.colorName} </td>
                <td style="background-color: ${myData.colorName}"> </td>
            </tr>`
}

function addToList(newTR){
    document.getElementById("colors-table").innerHTML += newTR;
    colors++;
    document.getElementById("numOfColors").innerHTML =colors;

}

// function calculateAverage(){

//     let average=0;

//     for(const grade of grades){
//         average+=Number(grade);
//     }

//     console.log(average);
//     console.log(grades.length)
//      document.getElementById("average").innerHTML=average/grades.length;

// }