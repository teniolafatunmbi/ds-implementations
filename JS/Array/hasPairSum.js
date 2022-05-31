function hasPairSum(arr, sum) {
    // start a loop from the left
    for (let i=0; i<arr.length-1; i++) {
      for(let j=i+1; i<arr.length; j++) {
        if (arr[i] + arr[j] === sum) {
          return true
        }
      }
      return false
    }
    // start a nested loop from the second element on the left, checking if the sum of the first and any element in the second loop equates to sum
    // if true, return sum and true
    // else return false.
  }

function hasPairWithSum2(arr, sum){
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++){
        console.log(mySet)
        if (mySet.has(arr[i])) {
            return true;
        }
        mySet.add(sum - arr[i]);
    }
    return false;
}

console.log(hasPairWithSum2([6,4,3,2,1,7], 9))
  
// hasPairSum([2, 4, 5, 6], 9);