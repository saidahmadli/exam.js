if (a.length !== b.length) {
    console.log("False 1");
} else {
    let str1 = a.toLocaleLowerCase().split('').sort().join('');
    let str2 = a.toLocaleLowerCase().split('').sort().join('');
    if (str1 === str2) {
        console.log("True");
    } else {
        console.log("False 2")
    }
}