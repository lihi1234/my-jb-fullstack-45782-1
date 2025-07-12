const grades=[];

function addStudent(event){
    event.preventDefault();
    const myData= getData();
    const newTR= CreateNewLi(myData);
    addToList(newTR);
    calculateAverage();

}

function getData(){

    const firstName= document.getElementById("first-name").value
    const lastName= document.getElementById("last-name").value
    const grade= document.getElementById("garde").value
    grades.push(grade);
    return{
        firstName,
        lastName,
        grade,
    };
}

function CreateNewLi(myData){
    return `<tr>
                <td>${myData.firstName} </td>
                <td>${myData.lastName} </td>
                <td>${myData.grade} </td>
            </tr>`
}

function addToList(newTR){
    document.getElementById("grades-table").innerHTML += newTR;

}

function calculateAverage(){

    let average=0;

    for(const grade of grades){
        average+=Number(grade);
    }

    console.log(average);
    console.log(grades.length)
     document.getElementById("average").innerHTML=average/grades.length;

}