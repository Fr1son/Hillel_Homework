let kilometers = prompt("Введіть перше число");
let feet = prompt("Введіть друге число");

kilometersResult = kilometers * 1000;
feetResult = feet * 0.305;

if (kilometersResult > feetResult){
  console.log(feetResult + " менша ніж " + kilometersResult)
}else{
  console.log(kilometersResult + " менша ніж " + feetResult)
};