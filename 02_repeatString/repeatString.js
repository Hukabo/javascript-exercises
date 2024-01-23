const repeatString = function(string, num) {
    let mergedString = "";
    if(num < 0) {
        return "ERROR";
    } 
    // else {
    //     for(let i = 0; i < num; i++) {
    //         mergedString = mergedString + string;
    //     }
    //     return mergedString;
    // }
    return string.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
