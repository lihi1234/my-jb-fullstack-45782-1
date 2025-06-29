const customer = {
    firstName: 'Adam',
    lastName: 'Cohen',
    email: 'adenc@gmail.com',
    phoneNumber: '054-9986654',
    creditCard: {
        type: 'visa',
        number: '45620213698574',
        expire: '02/29',
        cvv: 555

    }

}

for (const prop in customer) {

    if (prop == 'creditCard') {
        for (const item in customer[prop]) {
            console.log(`${item} : ${customer[prop][item]}`);

        }
    }
    else
        console.log(`${prop} : ${customer[prop]}`);

}