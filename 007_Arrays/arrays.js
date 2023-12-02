//Code1 
function arrayFunction() {
  
  const newArray = [];
  
  const fruitsArray = ['Apple','Banana','Pear','Strawberry'];
  
  console.log(fruitsArray); }

//code2 
function arrayFunction2() {
  
  const newArray2 = [];
  
  const fruitsArray2 = ['Apple','Banana','Pear','Strawberry'];
  
  //array index starts at 0
  // access items in array with this notation:
  console.log(fruitsArray2[0]); // Apple 
  console.log(fruitsArray2[1]); // Banana
  console.log(fruitsArray2[2]); // Pear
  console.log(fruitsArray2[3]); // Strawberry
  console.log(fruitsArray2[4]); // undefined, nothing at position 4
}

//Code3 
// can also write arrays like this:
  const anotherArray = ["code3","first",
                      "second",
                      "third",
                      "fourth"];
  
  console.log(anotherArray);

  //code4
   
  const countingArray = ['two','three','four'];
  console.log("Starting array:");
  console.log(countingArray);
  
  // add item to array
  
  // add to end
  countingArray.push('one hundred');
  console.log(countingArray);
  
  // add to start
  countingArray.unshift('one');
  console.log(countingArray);
  
  // add to middle
  countingArray.splice(2,0,'add first item');
  console.log(countingArray);
  
  countingArray.splice(3,0,'add second item');
  console.log(countingArray);

  /*
  add to middle and replace the exsiting item 
  (in the splice the first number indicate 
  position and second number indicate if you want replace or only 
  add or remove if it is 1 means replace if it 0 means add only 
  and if it is 2 means remove)
  */
  countingArray.splice(2,1,'the item been replaced');
  console.log(countingArray);

  //code5

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
  add or remove if it is 1 means replace if it 0 means add only 
  and if it is 2 means remove)
  */
  countingArray2.splice(4,2);
  console.log(countingArray2);


