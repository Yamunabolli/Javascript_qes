function duplicate(arr){

  let duplicates=[];
  for(i=0;i< arr.length;i++){
  let isduplicate = false;

  for(j=0;j < duplicates.length;j++){

   if(arr[i] === duplicates[j]){
    isduplicate = true;
    break;
   }

  }

  if(!isduplicate){

    duplicates[duplicates.length] = arr[i]
  }
  }

  return  duplicates
}

console.log(duplicate([8,5,9,7,8,9,5,7,4]))