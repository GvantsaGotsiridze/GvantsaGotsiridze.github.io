/*const now = 2037;
 const ageJonas = now - 1991;
 const ageSarah = now - 2018;
 console.log(ageJonas, ageSarah);
 console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2;
 const firstName = 'Gvantsa';
 const lastName = 'Gotsiridze';
 console.log(firstName + ' ' + lastName);
 let x = 10 + 5;
 x += 10;// x = x + 10 = 25;
 x *= 4; x = x * 4 = 100;
 x++; x = x + 1;
 x--;
 console.log(x);
 console.log(ageJonas > ageSarah);
 console.log(ageSarah >= 18);
 console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;// x = y = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);

const firstName = 'jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "i'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);


const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
console.log(`just a regular strig...`);

console.log('string with \n\
multiple \n\
lines');

console.log(`string
multiple
lines`);

const age = 15;

if (age >= 18) {
    console.log('sarah can start driving license')
} else {
    const yearsLeft = 18 - age;
    console.log(`sarah is too young. wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n); 

// 5 falsy values: 0, '', undefined, null, NaN. 

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("don't spend it all ;)");
} else {
    console.log('you should get a job!');
}

let height;
if (height) {
    console.log('YAY Height is defined');
} else {
    console.log('height is UNDEFINED')
} 
const age = '18';
if (age === 18) console.log('You just became an adult :D(strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("what's your favouite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
}

if (favourite !== 23) console.log('Why not 23?'); 
const hasDriversLicense = true; //A
const hasGoodVision = true; //B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);



//if (hasDriversLicense && hasGoodVision) {
// console.log('Sarah is able to drive!');
// } else {
// console.log('Someone else should drive...');}//

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
} 

const day = 'monday';
switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');

}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
} 

const age = 23;
age >= 18 ? console.log('I like to drink wine') :
    console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
let drink2;
if (age >= 18) {
    drink2 = 'wine';

} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`); */

