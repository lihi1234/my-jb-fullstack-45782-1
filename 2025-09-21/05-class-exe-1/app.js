(async()=>{
    const getData= url=> fetch(url).then(response=> response.json());

    const {users} = await getData('https://dummyjson.com/users');
    const newUsers= users.map(({firstName, lastName})=>`${firstName} ${lastName} \n`).join('');
    console.log(newUsers)
})()

// console.log(users);