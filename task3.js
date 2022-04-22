let m = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
];

m.reverse()
for (let i=0; i<m.length; i++){
    for (let z=0; z<i; z++){
        let rvr = m[i][z];
        m[i][z]=m[z][i];
        m[z][i]=rvr;
    };
}
console.log(m)