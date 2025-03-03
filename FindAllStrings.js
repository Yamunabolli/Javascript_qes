var a = ["vayu", "kiyan", 1, "yavi", 8, 2]

function removeNumber(arr) {
    arr.filter((item) => {
        if (typeof (item) === "string") {

            console.log(item)
        }
    })
}

removeNumber(a)


function removeStrings(arr) {
    arr.filter((item) => {
        if (typeof (item) === "number") {

            console.log(item)
        }
    })
}
removeStrings(a)