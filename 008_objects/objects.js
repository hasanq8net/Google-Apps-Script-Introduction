function arrayFunction() {
 
  const newArray = [];
 
  const countingArray2 = ['two','three','four','five','six','seven'];
  console.log("Starting array:");
  console.log(countingArray2);




  // removing items from array
 
  // remove from end
  countingArray2.pop();
  console.log(countingArray2);
 
  // remove from beginning
  countingArray2.shift();
  console.log(countingArray2);
 
  /*
  remove from the middle
  (in the splice the first number indicate
  position and second number indicate if you want replace or only
  add or remove if it is 1 means replace if it 0 means add)
  */
  countingArray2.splice(4,2);
  console.log(countingArray2);
}
