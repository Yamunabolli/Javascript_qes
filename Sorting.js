let numbers = [5, 12, 8, 130, 44];

var a = numbers.sort((a, b) => a - b)

// console.log(a)

var b = numbers.sort((a, b) => b - a)

// console.log(b)

function sorting(arr) {

    let n = arr.length;

    for ( let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }

    }
    return arr
}

console.log(sorting([5, 12, 8, 130, 44]))