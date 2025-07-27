const getPriceWithVAT = price => {
   if(isNaN(price)) throw new Error('price must be a num');
    return price * 1.18;
}

const price = +prompt("enter price");
try{
   alert(getPriceWithVAT(price)); 
}
catch(err){
    console.log(err.message)
}
