
/*
Using build - in function Math.min() in conjunction
with Spread syntax(...) described in
Mozilla Development Network *
*/
exports.min = function min(array) {
    //first check if it's undefined or null
    if (typeof array === 'undefined' || array.length === 0) {
        return 0;
        //applying Math.min and Spread syntax
    } else {
        return Math.min(...array)
    }
}

/*
Using build-in function Math.max() in conjunction
with Spread syntax (...) described in
Mozilla Development Network
*/
exports.max = function max(array) {
    //first check if it's undefined or null
    if (typeof array === 'undefined' || array.length === 0) {
        return 0;
        //applying Math.max and Spread syntax
    } else {
        return Math.max(...array)
    }
}

/*
Found no build-in method in MDN.
Implementing through looping.
*/
exports.avg = function avg(array) {
        //first check if it's undefined or null
        if (typeof array === 'undefined' || array.length === 0) {
            return 0;
        } else {
          // creating variable with 0 integer parameter
          // that will be updated during each cycle
          let total = 0;
          // creating cycle equal to array length
          // setting counter to 0 and step equal to one
          for (let i=0; i<array.length;i++) {
            //updating sum of total on each loop
            total += array[i];
          }
          // returning average of array
          //by dividing sum of total by array.length
           return total / array.length;
        }
