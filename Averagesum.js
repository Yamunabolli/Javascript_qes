function AverageSum(arr){

    let num = 0;

    for(i=0;i < arr.length;i++){
        num += arr[i]
    }

    return num/arr.length
}


console.log(AverageSum([2,8,5,6,9]))