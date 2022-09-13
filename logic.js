let number = 34;
let count=0
for (let i = 2; i < number; i++) {
  if (34 % i == 0) {
    count++;
  }
}
if(count==2){
  console.log("Prime number")
}else{
  console.log("Not prime number")
}
