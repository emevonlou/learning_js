// Array Basic
// The array is heterogeneous (accepts multiple values) and dynamic.

const values = [7.7, 8.9, 6.3, 9.2];

// Getting the first and last element of an array
console.log(values[0], values[3]);

// Value undefined
console.log(values[4]);

// Adding new values in array
values[4] = 10;
console.log(values);

// accessing the number of elements in an array from length
console.log(values.length);

// Adding new elements of an array with push ()
// Values passed: object, boolean, null, test (string))
values.push({id: 3}, false, null, 'test');
console.log(values);


// Pop function that removes the last element from the array
console.log(values.pop());
// Delete function that deletes array elements
delete values [0];
delete values[0];
console.log(values);

// The array is of type object
// In javaScript an array is an object
console.log(typeof values);





