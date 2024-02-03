const palindromes = function (str) {
    let strArr = str.toLowerCase().split('');
    strArr = strArr.filter(char => (char !== '!' && char !== ' ' && char !== '.' && char !== ','));
    // for (let i = strArr.length; i >= 0; i--) {
    //     if(strArr[i] === '!' ||
    //        strArr[i] === ' ' ||
    //        strArr[i] === '.' ||
    //        strArr[i] === ',') {
    //         strArr.splice(i,1);
    //        };
    // }
    
    let reversed = strArr.slice().reverse();

        if(strArr.toString() === reversed.toString()) {
            return true;
        }
        return false;
};

// Do not edit below this line
module.exports = palindromes;
