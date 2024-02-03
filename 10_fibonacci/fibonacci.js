const fibonacci = function(number) {
    let num = Number(number);
    if(num < 0) {
        return "OOPS";
    } else if(num === 0) {
        return 0;
    }
    let arr = [0,1];

    for (let i = 2; i <= num; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    };

    return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
