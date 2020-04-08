// Learn By Implementation
// Native JS forEach ( forEvery ) Implementation 
// Author: Devv_Li
// Twitter: @Devv_Li
// Date: Jan/2/2020

// Create an array method forEvery
Array.prototype.forEvery = function(callback) {
    for (var i = 0; i < this.length; i++)
        callback(this[i], i, this);
}

//tests
var arr = ["Mangoes", "Oranges", "Apple"];
// When ever the method forEvery gets called
// It takes in a function as an argument
// And calls the function on every value in arr (array)
arr.forEvery((fruit, i) => console.log(`${i}: ${fruit}`));