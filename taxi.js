//最初の1kmまでを610円で走り、その後は280m毎に60円ずつ料金が上がっていく。
//目的地までの距離を入れたら料金を出してくれるプログラムを作成する。

const distance = 4530;

const taxiPrice = (distance) => {
  if (distance < 1000) return 610;
  const addDistance = distance - 1000;
  const addPrice = Math.floor(addDistance / 280) * 60;
  const totalPrice = addPrice + 610;
  return totalPrice;
};

console.log(taxiPrice(distance));
