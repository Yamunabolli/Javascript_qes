function diamond(n){

for(i=1;i<=n;i++){

let row=" ".repeat(n-i);

for(j=1;j <= i;j++){

row += "* "

}
console.log(row)
}

for(i=n;i>=1;i--){

    let row=" ".repeat(n-i);
    
    for(j=1;j <= i;j++){
    
    row += "* "
    
    }
    console.log(row)

    }

}


diamond(5)