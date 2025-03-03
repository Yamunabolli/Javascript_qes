function hallow(n) {
    for (i = 1; i <= n; i++) {

        let row = " ";

        for (j = 1; j <= n; j++) {
            if (i === 1 || i === n || j === 1 || j === n) {

                row += "* "
            }
            else {

                row += "  "

            }



        }

        console.log(row)
    }



}

hallow(4)