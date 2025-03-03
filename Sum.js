function Sum(arr){
    let num = 0 

    for(i=0;i < arr.length;i++){

        num += arr[i]

    }

    return num
}


console.log(Sum([11,2,5,88]))