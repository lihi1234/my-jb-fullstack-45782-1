function changeColor(){
    const bgColor= document.getElementById("background-color");
    console.log(bgColor.value)

    document.getElementById("content").style.backgroundColor=bgColor.value;
 
    
}