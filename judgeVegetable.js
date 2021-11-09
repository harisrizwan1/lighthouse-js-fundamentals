const judgeVegetable = function (list, factor) {
  let winner = "";
  let num = 0;
  list.forEach(function(item) {
    if (item[factor] > num) {
      num = item[factor];
      winner = item.submitter;
    }
  })
  return winner;
}