const kadane = (a) => {
  let best_sum = 0;
  let current_sum = 0;
  for (num of a) {
    current_sum = Math.max(num, current_sum + num);
    best_sum = Math.max(best_sum, current_sum);
    console.log("current_sum", current_sum, "best_sum", best_sum);
  }
  return best_sum;
}


const answer1 = kadane([-2,1,-3,4,-1,2,1,-5,4])
console.log(answer1);
