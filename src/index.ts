/* let/const */
let period = 50
const baseUrl = 'ya.ru'

/*objects */
let firstName = 'Misha'
let account = {
    firstName,
    getName(){
        return this.firstName
    }
}

/*spread*/

let person = {...account}
let dates = [...[11,12,13]]

/** destructoring */

let { firstName: myName } = person
let [ firstDate ] = dates

/** themplate string */

function userMessage([start, end] : TemplateStringsArray, {firstName: name} : typeof person): string {
    return `${start}${name}${end}`
}

console.log(userMessage`Good Day, ${person} !!`)

/** forof */

for(const date of dates) {
    console.log(date);
}

/** arrow functions */

let sum = (a: number, b: number) => a + b;

/** class */

class Point {
    public x = 10

    sum():number {
        return this.x
    }
}

/** optional chaning */

const user: any = {}
let x = user?.info?.baz()

/** ?? */

let admin;
let p = admin ?? user

let dog;
let littleDog = dog != null ? dog : 'default value';

let littleDog2 = dog ?? 'default value';