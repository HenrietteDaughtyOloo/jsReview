let unsorted = [123, 12, 4, 32, 20, 680, 11, 10, 1, 2]
function merge(unsorted){
    if (unsorted <= 1){
        return unsorted;
    }
    const mid = Math.floor(unsorted.length/2);
    let left = unsorted.slice(0,mid);
    let right = unsorted.slice(mid);

    return (sortedArray(left), sortedArray(right));
}
function sortedArray(left, right){
    let array = []
    while(left.length && right.length){
        if (left[0]<right[0]){
            array.push(left.shift());
        }
        else{
            array.push(right.shift());
        }
    }
}

let arrayUnsorted = [123, 12, 145, 23, 567, 867,41, 4,3]
function mergeSort(arrayUnsorted){
    if(arrayUnsorted.length<=1){
        return(arrayUnsorted)
    }
    const middle = Math.floor(arrayUnsorted/2)
    const
}

