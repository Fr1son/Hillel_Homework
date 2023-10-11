let num = prompt("Введіть трьохзначне число");
let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
let mult = Number(num[0]) * Number(num[1]) * Number(num[2]);
if (sum % 2 === 0){
  console.log("Сума цифр є парною")
}else{
  console.log("Сума цифр не є парною")
};

if (sum % 5 === 0){
  console.log(sum + " є кратним 5")
}else{
  console.log(sum + " не є кратним 5")
};

if (mult > 100){
  console.log(mult + " більше 100")
}else if (mult < 100){
  console.log(mult + " менше 100")
}else{
  console.log(mult + " дорівнює 100")
}