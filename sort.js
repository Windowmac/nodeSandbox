
const sort = (arr) => {
    let temp;
    for(let i = 0; i + 1 < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[j]);
            if(arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

module.exports = sort;