let a = [9,5,1,6,2]

function Minval(arr){

    let minvalue= arr[0]

    for(i=1;i< arr.length;i++){
        if(arr[i] < minvalue)
        {
            minvalue = arr[i]
        }
    }
    return minvalue

}

console.log(Minval(a))