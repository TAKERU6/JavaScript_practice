//最初の1kmまでを610円で走り、その後は280m毎に60円ずつ料金が上がっていく。
//目的地までの距離を入れたら料金を出してくれるプログラムを作成する。

const distance = 4530;

const taxiPrice = (distance) => {
  const FIRST_FARE = 610;
  const FIRST_FARE_DISTANCE = 1000;
  const ADD_FEE = 60;
  const ADD_1METER_DISTANCE = 280;
  if (distance < 1280) return FIRST_FARE;
  const addDistance = distance - FIRST_FARE_DISTANCE;
  const addPrice = Math.floor(addDistance / 280) * 60;
  const totalPrice = addPrice + FIRST_FARE;
  return totalPrice;
};

console.log(taxiPrice(distance));
