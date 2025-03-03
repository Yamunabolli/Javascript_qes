function number(n){

for(i=1;i <=n;i++){
    let row = " ".repeat(n-i)

for(j=1;j <= i;j++){
row += i + " "
}

console.log(row);

}
}

number(5)