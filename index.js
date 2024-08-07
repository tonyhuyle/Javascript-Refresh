// JSON = (JS Object Notation) data-interchanging format
//        Used for exchanging data between a server and web app
//        JSON files {key:vakue} OR [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string
//        JSON.parse() = converts a JSON string to a JS object

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];  //array
const person = {                                 //object
    "name": "Spongebob",
    "age": 20,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
};

const people = [{
    "name": "Spongebob",
    "age": 20,
    "isEmployed": true
},

{
    "name": "Patrick",
    "age": 21,
    "isEmployed": false
},

{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},

{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}];

//object to string
//const jsonString = JSON.stringify(names);
//const jsonString = JSON.stringify(people);
//const jsonString = JSON.stringify(person);

// ` to convert to string with back tick
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;  //array
const jsonPerson = `{"name": "Spongebob", "age": 20, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob", "age": 20, "isEmployed": true}, 
                    {"name": "Patrick", "age": 21, "isEmployed": false}, 
                    { "name": "Squidward", "age": 50, "isEmployed": true},
                    {"name": "Sandy", "age": 27, "isEmployed": false}]`;

//string to object
const parsedData = JSON.parse(jsonNames);
console.log(parsedData)

fetch("people.json")
    .then(response => response.json())
    //.then(value => console.log(value))
    //.then(values => values.forEach(value => console.log(value))) //prints each object
    .then(values => values.forEach(value => console.log(value.name))) //shows specific property (name, age, employment)
    .catch(error => console.error(error))