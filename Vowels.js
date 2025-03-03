function vow(str){
let vowels = str.match(/[aeiouAEIOU]/g)

return vowels ? vowels.length : 0

}

// console.log(vow("yamuna"))


function vowels(str){

let vowels = "aeiouAEIOU";
let data = ""

for(let char of str){
    if(vowels.includes(char)){


        data++
    }


}
return data

}

console.log(vowels("yamuna"))