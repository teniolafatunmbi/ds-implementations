function FRC(arr) {
    const obj = {};
    if (arr.length > 1) {
        for (let i=0; i<arr.length; i++) {
            console.log(obj)
            if (obj[arr[i]]) return arr[i];
            obj[arr[i]] = true;
        }
        return undefined;
    }
} 
// O(n)

console.log(FRC([2, 5, 1, 2, 3, 5, 1, 2, 4]));