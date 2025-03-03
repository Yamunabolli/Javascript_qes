function RevTriangle(n){

for(i=n;i >= 1;i--){

let row = "";

for(j = 1;j <= i;j++){

row += "*"


}

console.log(row)
}
}

RevTriangle(6)