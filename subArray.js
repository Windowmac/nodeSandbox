
const subArray = (arr) => {
    const k = 3;
    for(let i = 0; i < arr.length; i += k){
        let left = i;
        //handles the case that k is not a multiple of arr.length
        let right = Math.min(i + k - 1, arr.length - 1);
        let temp;
        while(left < right) {
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return arr;
}

function newArr (arr, k) {
    if (arr.length > 0) {
      const revSubArr = arr.slice(0, k).reverse();
      console.log('revSub is: ', revSubArr);
      console.log(arr.slice(0));
      return revSubArr.concat(newArr(arr.slice(k), k));
    } else {
        return arr;
    }
  }
//console.log(newArr([1, 2, 3, 4, 5, 6], 3));
// console.log([].slice(3));
// console.log();

//321 + 456
//321 + 654 + []
//321654
console.log([3, 2, 1].concat([6, 5, 4].concat([])));

module.exports = [subArray, newArr];