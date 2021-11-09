const carPassing = function (cars, speed) {
  let data = {
    speed: speed,
    time: Date.now()
  };
  cars.push(data);
}