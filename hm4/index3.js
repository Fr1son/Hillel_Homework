let a = prompt("Введіть перше число");
let b = prompt("Введіть друге число");

if (a % b === 0){
  console.log(a + " є дільниом " + b);
}else{
  console.log(a + " не є дільниом " + b);
}

if (b % a === 0){
  console.log(b + " є дільниом " + a);
}else{
  console.log(b + " не є дільниом " + a);
}