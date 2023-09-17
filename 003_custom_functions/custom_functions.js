//this function to add one in traditional way 

function addOne(x){
  const answer = x+1;
  return answer;
}

//we shortcut the function in one line and also we can use it to create a custom funtion 

const addonearrow = x => x+1; 

// this function to multiply by 2 in the traditional way 

function multiplyByTwo(x){
  const answer = x*2;
  return answer;
}

//this same function but in easier way 

function double(x) {
  return x * 2;
}

//this function doing same multiply by two but in one line 

const doubleArrow = x => x*2; 

//function to multiply variable by other variable 

function multiplyByX(x,c) {
  return x * c;
}

/**
 * Function to calculate percentage change
 * 
 * @param {number} oldVal Original value
 * @param {number} newVal New value
 * @return The percent change from old value to the new value
 * @customfunction
 */

function percentChange(oldVal,newVal) {

  return (newVal - oldVal) / oldVal;

}

/**
 * convert kilometer to miles 
 * @param (number) input value to convert 
 * @return the input converted to miles 
 * @customfunction
 */

function convertToMiles(input){
  return input * 0.62137;
}

/**
 * convert kilometers or miles 
 * @param {number} distance the value to convert 
 * @param {String} unit km for converting to kilometers or mi for converting miles
 * @customfunction
 */

function convertToUnit(distance, unit){
  if(unit === 'km'){
    return distance * 1.06934;
  } else if(unit === 'mi'){
    return distance * 0.62137;
  } else {
    return null; 
  }
}

