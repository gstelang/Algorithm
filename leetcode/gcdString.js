
function gcdOfStrings(str1 = '', str2 = '') {
    if (str1 + str2 !== str2 + str1){
       return "";
    } else if (str1 == str2){
       return str1;
    } else if (str1.length > str2.length){
       console.log("gcd(" + str1.slice(str2.length) + "," + str2 + ")");
       return gcdOfStrings(str1.slice(str2.length), str2);
    } else {
        console.log("gcd(" + str2.slice(str1.length) + "," + str1 + ")");
        return gcdOfStrings(str2.slice(str1.length), str1);
    }
 };

// gcd("ABABAB", "ABAB")
// gcd("AB", "ABAB")
// gcd("AB","AB")

// const answer1 = gcdOfStrings("ABCABC", "ABC"); // "ABC"
const answer2 = gcdOfStrings("ABABAB", "ABAB"); //  "AB"
// const answer3 = gcdOfStrings("LEET", "CODE"); //  ""
// const answer4 = gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX")
// console.log(answer1);
console.log(answer2);
// console.log(answer3);
// console.log(answer4);
