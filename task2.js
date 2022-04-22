let arr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1]; 
const separateSort = (arr = []) => {
    const sorter = (a, b) => {
       if(typeof a === 'number' && typeof b === 'string'){
          return -1;
       };
       if(typeof a === 'string' && typeof b === 'number'){
          return 1;
       };
       if(typeof a === 'string' && typeof b === 'string'){
          return a.charCodeAt(0) - b.charCodeAt(0);
       };
       return a - b;
    };
    const res = arr.sort(sorter);
    return res;
 };
 console.log(separateSort(arr));