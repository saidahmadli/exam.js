let str = "abbbcabcdefef"

let getLength = function (str) {
    let finalLength = 0;

    for (let i = 0; i < str.length; i++) {
        let currentString = new Set();

        for (let j = i; j < str.length; j++) {
            if (currentString.has(str[j])) {
                break;
            } else {
                currentString.add(str[j]);
            }
        }

        finalLength = Math.max(finalLength, currentString.size);
    }

    return finalLength;
};


console.log(getLength(str));