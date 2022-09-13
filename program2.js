let str = "aba";
let e_str=""

for (let i = str.length-1; i>=0; i--) {
      e_str=e_str+str[i]
}
if(str==e_str){
  console.log("Palindrome")
}else{
  console.log("Not Palindrome")
}
