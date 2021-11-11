const concat = function (first, second) {
  for (let i of second) {
    first.push(i);
  }
  return first;
}

//console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
//console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
//console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
//console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

//merge stretch VVV

const merge = function (first, second) {
  for (let i of second) {
    first.push(i);
  }
  first.sort(function(a, b){ return a - b });
  return first;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);