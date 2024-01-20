// Max breadth of nested parenthesis 
// Return the "breadth" of a balanced parentheses string, meaning return the max number of parentheses together along the same depth. 
// For example: with input, "( () () () ) ()", your function should return 3 due to the number of closed parentheses at a depth level of 1.


function Node() {
  this.child = [];
  this.level = 0;
}

Node.prototype.addChild = function (node) {
  this.child.push(node);
}

const printTree = (node) => {

  if (node !== null) {
    console.log(node.level);
    node.child.forEach(c => printTree(c));
  }
}

const maxBreadth = (input) => {

  let nestedDepth = 0;
  let root = new Node();

  const stack = [];
  stack.push(root);

  let answers = [root];

  for (let i = 0; i < input.length; i++) {
     
    if (input[i] === '(') {
      nestedDepth++;
      let t = new Node();
      t.level = nestedDepth;
      stack.push(t);
    }

    if (input[i] === ')') {
      let pop = stack.pop();
      nestedDepth--;
      if (stack.length > 0) {
        let top = stack[stack.length - 1];
        top.addChild(pop);
      }
      answers.push(pop);
    }
  }

  console.log(answers)


  const lengthArr = answers.map(a => a.child).map(c => c.length)

  return Math.max(...lengthArr)
}

// console.log(maxBreadth("( ()()() ) ( (()()) (()) (()()) (()()()) )")); // 4
// console.log(maxBreadth("( (()()) (()) )")); // 2

// const t = maxBreadth("( () () () ) ()");
// const t1 = maxBreadth("( () () () ) () () () ()");
// console.log(t);
// console.log(t1);

// console.log(maxBreadth("(())")); // 1
// console.log(maxBreadth("((), ())")); // 2
// console.log(maxBreadth("((), (()))")); // 2
// console.log(maxBreadth("((()), ())")); // 2
// console.log(maxBreadth("()()(()())")); // 3
console.log(maxBreadth("( (()()) (()) )"));// 2
