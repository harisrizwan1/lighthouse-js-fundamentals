const range = function (start, end, step) {
  let nums = [];

  if (start === undefined || end === undefined || step === undefined) {
    return [];
  } else if (start > end) {
    return [];
  } else if (step <= 0) {
    return [];
  } else {
    for(let i = start; i <= end; i += step) {
      nums.push(i);
    }
    return nums;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));