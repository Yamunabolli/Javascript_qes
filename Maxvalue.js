let a = [5,6,8,9,2,7]

function Maxval(arr){
    let maxval = arr[0]
    for(let i = 0;i < arr.length;i++){
        if(arr[i] > maxval){
            maxval = arr[i]
        }
    }
    return maxval
}

console.log(Maxval(a))