const waterArea = (arr) => {
    let largestArea = 0;
    if(arr.length) {
        
    }
    for(let i = 0; i < arr.length; i++) {
        let right = i + 1;
        while(right < arr.length) {
            const tallest = arr[right] > arr[i] ? arr[right] : arr[i];
            const area = tallest * (right - i);
            if(area > largestArea) {
                largestArea = area;
            }
            right++;
        }
    }
    return largestArea;
}

console.log(waterArea([1, 2, 1]));

module.exports = waterArea;