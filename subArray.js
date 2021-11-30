
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

module.exports = subArray;