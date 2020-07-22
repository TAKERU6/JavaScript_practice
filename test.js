const bonus_drink = (amount) =>
  amount < 3 ? amount : Math.floor(amount + (amount - 1) / 2);
