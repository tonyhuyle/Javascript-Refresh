// Callback hell = Situation is js where callbacks are 
//                 Nested within others to the point of
//                 Difficulty reading.
//                 Old pattern to handle async functions
//                 Use Promises + async/await to avoid


function walkDog(callback) {

    setTimeout(() => {
        console.log("You walk the dog");
        callback();
    },1500)
}

function cleanKitchen(callback) {

    setTimeout(() => {
        console.log("You clean the kitchen");
        callback();
    },2500)
}

function takeOutTrash(callback) {

    setTimeout(() => {
        console.log("You take out the trash");
        callback();
    },3000)
}

walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => console.log("You finished all the chores!"));
    })
})  
