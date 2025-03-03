function Missing(arr){
let n = arr.length + 1;

let totalsum = (n*(n+1)/2);

let sum =0;

for(i=0;i<arr.length;i++){
    sum += arr[i]


}

let result = totalsum - sum;

return result;


}


console.log(Missing([1,2,3,5,6]))