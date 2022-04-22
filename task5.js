let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 28;
let newArr = [];
let test = false
function findNum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === num) {
                newArr.push(arr[i]);
                newArr.push(arr[j]);
                test = true;
                return newArr;
            }
        }
    }
    if (test === false) {
        return newArr
    }

}

console.log(findNum(arr, num));