
bigConcat = (arr1, arr2, arr3) =>{
    const bigArr = [];
    let pointer1 = 0;
    let pointer2 = 0;
    let pointer3 = 0;
    let bigPointer = 0;

    while(pointer1 < arr1.length && pointer2 < arr2.length) {
        if(arr1[pointer1] < arr2[pointer2]) {
            bigArr.push(arr1[pointer1++]);
        } else {
            bigArr.push(arr2[pointer2++]);
        }
    }
    while(pointer1 < arr1.length) {
        bigArr.push(arr1[pointer1++]);
    }
    while(pointer2 < arr2.length) {
        bigArr.push(arr2[pointer2++]);
    }

    while(pointer3 < arr3.length && bigPointer < bigArr.length) {
        if(arr3[pointer3] < bigArr[bigPointer]) {
            bigArr.splice(bigPointer++, 0, arr3[pointer3++]);
        } else {
            bigPointer++;
        }
    }
    while(pointer3 < arr3.length) {
        bigArr[bigPointer++] = arr3[pointer3++];
    }
    return bigArr;
}

module.exports = bigConcat;