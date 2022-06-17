// Inefficient!! Bubble sorting it takes all the time as any of the arrays grow.
function mergeSortedArrays(arr1, arr2) {
    if (arr1.concat(arr2)) {
        let newArr = [];
        let smallestEl = 0;
        let largestArr;
        if(arr1.length > arr2.length) {
            largestArr = arr1;
        } else {
            largestArr = arr2;
        }

        // for (let Lcount=0; Lcount < largestArr.length; Lcount++) {
        //     for (let Scount=Lcount+1; Scount < largestArr.length; Scount++) {
        //         if(arr1[Lcount] < arr2[Scount]) {
        //             smallestEl = arr1[Lcount];
        //             newArr.push(arr1[i]);
        //         } else {
        //             smallestEl = arr2[count];
        //             newArr.push(arr2[i])
        //         }
        //     }
        // }
        
    }
    
}
mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// check the smallest start element.
// write to a new array from there and keep a record of a largest.
// If write data >= largest start, write from next arr and keep a record of the next from prev array.
// If write data in largest start >= next from smallest, write from small array and keep a record of the next in largest arr.
// All under the length of the arrs.

// make the code better!