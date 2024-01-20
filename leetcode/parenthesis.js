// - Balanced Parenthesis (Valid parenthesis)
// 1. Test if a string containing parentheses and other characters is balanced with its parentheses

// - Depth of nested parenthesis (max depth)
// Return the "depth" of a balanced parentheses string, meaning the maximum number of nested parentheses

const isValidParantheses = (input) => {

    let isValid = false;

    const roundBracketStack = [];
    const squareBracketStack = [];
    const curlyBracketStack = [];


    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(') {
            roundBracketStack.push(input[i]);
        }
        if (input[i] === ')') {
            roundBracketStack.pop();
        }

        if (input[i] === '[') {
            squareBracketStack.push(input[i]);
        }
        if (input[i] === ']') {
            squareBracketStack.pop();
        }

        if (input[i] === '{') {
            curlyBracketStack.push(input[i]);
        }
        if (input[i] === '}') {
            curlyBracketStack.pop();
        }

    }

    isValid = roundBracketStack.length === 0 && squareBracketStack.length === 0 && curlyBracketStack.length === 0;

    return isValid ;
}

// const example1 = isValidParantheses("()");
// const example2 = isValidParantheses("()[]{}");
// const example3 = isValidParantheses("(]");

// console.log(example1);
// console.log(example2);
// console.log(example3);

const maxDepth = (input) => {

    let nestedDepth = 0;
    // const stack = [];
    let maxDepth = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(') {
            // stack.push(input[i]);
            nestedDepth++;
        }
        if (input[i] === ')') {
            // stack.pop();
            nestedDepth--;
        }
        maxDepth = Math.max(maxDepth, nestedDepth);
    }

    return maxDepth;
}

// const maxDepthExample1 = maxDepth("(1+(2*3)+((8)/4))+1");
// console.log(maxDepthExample1);

// const maxDepthExample2 = maxDepth("(1)+((2))+(((3)))");
// console.log(maxDepthExample2);
