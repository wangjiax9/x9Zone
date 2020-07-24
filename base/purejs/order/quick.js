function quickSort(array, left, right) {
  if (left < right) {
      var [x, i, temp] = [array[right], left -1]
      for (var j = left; j <= right; j++) {
          if (array[j] <= x) {
            i++
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
          }
      }
      quickSort(array, left, i - 1);
      quickSort(array, i + 1, right);
  }
  return array;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(quickSort(arr, 0, arr.length-1))