let num = prompt("Введіть трьохзначне число");
if(num[0] === num[1] && num[2] === num[0]){
  console.log("всі цифри однакові")
}else{
  console.log("цифри неоднакові");
}

if(num[0] === num[1] || num[1] === num[2] || num[0] === num[2]){
  console.log("серед цифр є однакові")
}else{
  console.log("немає")
};