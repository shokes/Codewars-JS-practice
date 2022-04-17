//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

const speedCoverter = function (km) {
  const convert = km * 27.7778;
  console.log(convert);
  console.log(Math.floor(convert));
};
speedCoverter(1.08);
speedCoverter(2);
speedCoverter(2.5544);

speedCoverter(56.4);

speedCoverter(58.6);
