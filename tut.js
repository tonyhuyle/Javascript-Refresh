//react alternatives

//common js function
export default function DoSomething() {
 
}

//arrow function
export const doSomething = () => {
    return <div></div>
}

//anonymous functions
//execute commands without declaring functions
<button 
    onClick={() => {
        console.log("hello world");
    }}>
</button>

//conditionals & ternary operators

/* typical code
if(true) {

} else {

}

let age = 10;
let name = "Pedro";

if(age > 10) {
    name = "Pedro"
} else {
    name = "Jack"
}
*/

let aged = 16;
// && means if then     || opposite if not     ? if else :     
let name0 = aged > 10 && "Pedro";
let name1 = aged > 10 || "Pedro";
let name2 = aged > 10 ? "Pedro" : "Jack";

const Component = () => {
    return age > 10 ? <div>Pedro</div> : <div>Jack</div>;
};

const person = {
    name: "Tony",
    age: 20,
    isMarried: false,
};

//typical 
const name = person.name
const age = person.age
const isMarried = person.isMarried

//quicker alternative
const { names, ages, isMary } = person;

const person0 = {
    name: name,
    age: age,
    isMary: false,
}

//alternatives if names the same for value and number
const person1 = {
    name,
    age,
    isMary,
}

const person2 = {
    name: "Tony",
    age: 20,
    isMary,
}

//keep person object exactly but changes name
const person3 = {...person, name: "Jack"};

const names0 = ["Pedro", "Jack", "Jessica"];
//keeps same but adds Joel
const names1 = [...names, "Joel"];