setInterval(()=>{
    let hour= new Date().getHours();
    let minuets= new Date().getMinutes();
    let secondes= new Date().getSeconds();
    let time=`${hour}: ${minuets}: ${secondes}`;
    document.getElementById("clock").innerHTML= time ;
    //document.write(`${hour}: ${minuets}: ${secondes}`);
}, 1*1000)

