const finalPosition = function (moves) {
  let start = [0, 0]
  for (let move of moves) {
    switch (move) {
    case "north":
      start[1] += 1;
      break;
    case "south":
      start[1] -= 1;
      break;
    case "east":
      start[0] += 1;
      break;
    case "west":
      start[0] -= 1;
      break;
    }
  }
  return start;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));