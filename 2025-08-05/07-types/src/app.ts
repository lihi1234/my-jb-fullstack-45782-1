const age: number = 23;
const message: string = 'ggg';
const isActive: boolean = true;

//arrays

const ages: number[] = [23, 42, 55]

const messages: string[] = ['555', 'ffff'];

const someFlags: boolean[] = [true, false, true];

// objects

const myObj: object = {}
type User = {
    name: string,
    age: number,
    birthdate: Date
};
const aUser: User = {
    name: 'yuval',
    age: 22,
    birthdate: new Date()
}

const bUser: User = {
    name: 'shlomo',
    age: 27,
    birthdate: new Date()
}

const users: User[] = [];
users.push(aUser);
users.push(bUser);

//specials

type NumberOrString= number| string;

const someVar:NumberOrString = 'vgvbt';
const someVar2:NumberOrString= 55;
