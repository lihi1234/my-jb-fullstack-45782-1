// let rand= parseInt(Math.random()*5+1)


// //1
// const ShowName = ()=> console.log('Lihi');

// const showNameCallback= callback=> callback();

// showNameCallback(ShowName);

// //2
// function cool(callback) {
// 	callback();
// }

// cool(()=>console.log(`the rand num is: ${rand}`));

// //3

// function nice(callback) {
// 	callback(42);
// }

// nice(num=> console.log(num));

// //4
// function amazing(callback) {
// 	const num = callback(42, 128, 37, 81, 66);
// 	document.write(`Num: ` + num);
// }

// amazing((num1, num2, num3, num4, num5)=>{
//     const numbers=[num1, num2, num3, num4, num5];
//     num= numbers[rand-1];
//     console.log(num);
//     return num;
// })

// //5

// function coolColor(paintCallback) {
// 	paintCallback();
// }

// coolColor(()=> document.body.style.backgroundColor = "lightblue")

// //6
// function niceColor(paintCallback) {
// 	paintCallback('Green');
// }

// niceColor(color=>document.body.style.backgroundColor = color)

//8

setInterval(()=>{
    const rand= parseInt(Math.random()*100+1)
    
    document.getElementById("container").innerHTML= rand;
}, 1*1000)