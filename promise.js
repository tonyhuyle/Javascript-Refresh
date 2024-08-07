// Promise = An object that manages async operations
//           Wrap a Promise Object around {async code}
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resole,reject) => {async code})
//  
function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;

            if(dogWalked) {
                resolve("You walked the dog");
            }
            else {
                reject("You didn't walk the dog");
            }
        },1500)
    });
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const kitchenCleaned = true;
            
            if(kitchenCleaned) {
                resolve("You cleaned the kitchen");
            }
            else {
                reject("You didn't clean the kitchen");
            }
        },2500)
    });
}

function takeOutTrash() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = false;

            if(trashTakenOut) {
                resolve("You took out the trash");
            }
            else {
                reject("You didn't take out the trash");
            }
        },3000)
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores!")})
         .catch(error => console.error(error));