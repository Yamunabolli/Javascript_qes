

function Plaindrome(str){
let b = ""
for(i=str.length-1;i >= 0;i--){



b = b += str[i]



}

let val1 = str === b

return val1
}
console.log(Plaindrome("racecar"))