const chooseStations = function (stations) {
  let goodStations = [];
  for (let amount of stations) {
    if (amount[1] >= 20 && (amount[2] === "school" || amount[2] === "community centre")) {
      goodStations.push(amount[0]);
    }
  }
  return goodStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));