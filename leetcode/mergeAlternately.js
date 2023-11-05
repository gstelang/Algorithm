function mergeAlternately(word1, word2) {

    let mergedStr = "";
    const wordOneLength = word1.length
    const wordTwoLength = word2.length;
    let i = 0;
    for (; i < wordOneLength; i++) {
        mergedStr += word1[i];
        if (i < wordTwoLength) {
            mergedStr += word2[i]
        } else {
            break;
        }
    }

    if (i+1 < wordOneLength) {
        mergedStr += word1.slice(i+1, wordOneLength);
    } 

    if (i < wordTwoLength) {
        mergedStr += word2.slice(i, wordTwoLength)
    }

    return mergedStr;
}

const answer1 = mergeAlternately("abc", "pqr"); // apbqcr
const answer2 = mergeAlternately("ab", "pqrs"); // apbqrs
const answer3 = mergeAlternately("abcd", "pq"); // apbqcd

console.log(answer1);
console.log(answer2);
console.log(answer3);