let number = prompt("Введіть число");
if (number % 2 === 0 ){
  console.log("цифра " + number + " є парною");
}else{
  console.log("цифра " + number + " не є парною")
}
console.log("Остання цифра: " + number % 10);