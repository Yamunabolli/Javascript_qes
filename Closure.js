function outer() {

    let count = 0;

    return function inner() {

        count++;
        return count
    }

}

let a = outer()

// setInterval(function () {


//     console.log(a())

// }, 1000);
