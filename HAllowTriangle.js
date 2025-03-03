function hallowtriangle(str){



for(i=1;i <= str;i++){
    let row = "".repeat(str-1)


for(j=1;j <= i;j++){
if( i === str|| j===i|| j === 1)
{
    row += "* "
}
    else{
        row += "  "
    }

}
console.log(row);
}


}

hallowtriangle(5)