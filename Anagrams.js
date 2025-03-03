function anagrams(str1,str2){

if(str1.length !== str2.length) return false


let charcount={}
for(i=0;i< str1.length;i++){

let char=str1[i];
charcount[char] = (charcount[char] || 0)+1;

}

for(i=0;i< str2.length;i++){

    let char=str2[i];
    if(!charcount[char]) return false
   charcount[char]--
}
return true

}

console.log(anagrams("listen", "silent")); // Output: true
console.log(anagrams("hello", "world"));  