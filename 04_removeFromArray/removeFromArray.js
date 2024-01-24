// const removeFromArray = function() {
//     const arr = arguments[0];

//     for (let i = 1; i < arguments.length; i++) {
//         const index = arr.indexOf(arguments[i]);
//         if(index !== -1){
//             arr.splice(index, 1);
//         }
//     }

//     return arr;
// };

// const removeFromArray = function() {
//     let arr = arguments[0];
    
//     for(let i = 1; i < arguments.length; i++){
//         arr = arr.filter((element) => element !== arguments[i]);
//     }
    
//     return arr;
// }

const removeFromArray = function(arr) {
    const elementToRemove = Array.from(arguments).slice(1);

    const removedArr = arr.filter(element => !elementToRemove.includes(element))

    return removedArr;
}

// Do not edit below this line
module.exports = removeFromArray;
