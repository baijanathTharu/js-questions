/* 
From the given array and size of chunk,
divide the array into many sub-arrays where each sub-array has the specified length. 
*/

// Example: chunkOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 3)
// should return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14]]

function chunkOfArray(arr, n) {
  let ptr = 0;
  const lastIndex = arr.length - 1;
  const tempArr = [];
  let i = 0;
  count = 0;
  for (let i = 0; i <= lastIndex; i++) {
    if ((i + 1) % n === 0 || i === lastIndex) {
      let last = n + count * n;
      if (last > lastIndex) {
        last = lastIndex + 1;
      }
      tempArr.push(arr.slice(ptr + count * n, last));
      count++;
    }
  }

  // console.log(s1);
  return tempArr;
}

console.log(chunkOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 4));
