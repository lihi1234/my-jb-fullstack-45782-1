const axios= require('axios');

(async()=>{
    const getData= url=> axios(url);

    const {users} = await getData('https://dummyjson.com/users').data;
    const newUsers= users.map(({firstName, lastName})=>`${firstName} ${lastName} \n`).join('');
    console.log(newUsers)
})()

// console.log(users);