
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

exports.avg = function avg(array) {
    return 0;
}
