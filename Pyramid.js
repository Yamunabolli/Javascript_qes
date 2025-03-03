function pyramid(n){

    for(i=1;i<=n;i++){

        let row = " ".repeat(n-i);

    for(j=1;j<=i;j++){

        row += "* "


    }
        console.log(row)


    }



}

pyramid(6)