// Write a function, lucasNumber(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively!
//
// Examples:
//
// lucasNumber(0)   // => 2
// lucasNumber(1)   // => 1
// lucasNumber(2)   // => 3
// lucasNumber(3)   // => 4
// lucasNumber(5)   // => 11
// lucasNumber(9)   // => 76
function lucasNumber(n) {
    if(n === 0) return 2;
    if(n === 1) return 1;
    return lucasNumber(n-1) + lucasNumber(n-2);
}
// console.log(lucasNumber(0))   // => 2
// console.log(lucasNumber(1))   // => 1
// console.log(lucasNumber(2))   // => 3
// console.log(lucasNumber(3))   // => 4
// console.log(lucasNumber(5))   // => 11
// console.log(lucasNumber(9))   // => 76


// Write a function, sumArray(array), that takes in an array of numbers.
// The function should return the total sum of the elements.
// 
// Solve this recursively!
//
// Examples:
//
// sumArray([])             // => 0
// sumArray([5])            // => 5
// sumArray([5, 2])         // => 7
// sumArray([4, 10, -1, 2]) // => 15
function sumArray(array) {
   if(array.length === 0) return 0;
   let first = array[0];
   return first + sumArray(array.slice(1));
}
// console.log(sumArray([]))             // => 0
// console.log(sumArray([5]))            // => 5
// console.log(sumArray([5, 2]) )        // => 7
// console.log(sumArray([4, 10, -1, 2])) // => 15

// Write a function, reverseString(str), that takes in a string.
// The function should return the string with it's characters in reverse order.
//
// Solve this recursively!
//
// Examples:
// 
// reverseString("")            // => ""
// reverseString("c")           // => "c"
// reverseString("internet")    // => "tenretni"
// reverseString("friends")     // => "sdneirf"

function reverseString(str) {
   if(str.length === 0) return "";
    let ans = str[str.length - 1];
   return ans + reverseString(str.slice(0, str.length -1))
}
// console.log(reverseString(""))            // => ""
// console.log(reverseString("c"))           // => "c"
// console.log(reverseString("internet"))    // => "tenretni"
// console.log(reverseString("friends"))

// Write a function, pow(base, exponent), that takes in two numbers.
// The function should calculate the base raised to the exponent power.
//
// Note: 
// A negative exponent can be calculate by taking the reciprocal of the positive exponent.
// That is, pow(2, -5) is equal to 1 / pow(2, 5)
// 
// Solve this recursively!
//
// Examples:
//
// pow(2, 0)    // => 1
// pow(2, 1)    // => 2
// pow(2, 5)    // => 32
// pow(3, 4)    // => 81
// pow(2, -5)   // => 0.03125
function pow(base, exponent) {
   if(exponent === 0) return 1;
   if(exponent < 0) return 1 / pow(base, -exponent);
   return base * pow(base, exponent - 1);
}
// console.log(pow(2, 0))    // => 1
// console.log(pow(2, 1))    // => 2
// console.log(pow(2, 5))    // => 32
// console.log(pow(3, 4))    // => 81
// console.log(pow(2, -5))   // => 0.03125


// A 1-dimensional array is also known as a flattened array.
// Write a method, flatten(data), that accepts a single argument. The
// method should take in an array of any dimension and return the flattened
// version of that array. Solve this recursively.
//   
// Hint:
//  - if the argument is not an array, then we have reached the base case
//  - look up the documentation for how to check if data is an array or not
//
// Examples:
//
// array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
// flatten(array_1)      // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]
//
// array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
// flatten(array_2)      // => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]
//
// flatten('base case')  // => [ 'base case' ]
//
// Another Hint:
//
// From the last example, you may be confused. We said that the method takes
// in an array as an arg, but we passed it a string?
// If data is not an array, then we can consider it as a 0-dimensional array.
//     0-dimensional array: 'some data'
//     1-dimensional array: ['some data']
//     2-dimensional array: [['some data']]
//     3-dimensional array: [[['some data']]]
function flatten(data) {
    if(!Array.isArray(data)) return [data];
    let ans = []
    data.forEach(ele => {
        ans.push(...flatten(ele));
    })
    return ans;
}


// array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
// console.log(flatten(array_1))      // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
// console.log(flatten(array_2))      // => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]

// console.log(flatten('base case'))  // => [ 'base case' ]


// Write a function, fileFinder(directories, targetFile), that accepts an object representing directories and a string respresenting a filename.
// The function should return true, if the file is contained anywhere in the given directories.
// Note that directory names will begin with '/', but file names will not.
// 
// Example:
//
let desktop = {
    '/images': {
        'app_academy_logo.svg': null,
        '/parks': {
            'yosemite.jpeg': null,
            'acadia.jpeg': null,
            'yellowstone.png': null
        },
        '/pets': {
            'trixie_lou.jpeg': null,
            'rolo.jpeg': null,
            'opal.jpeg': null,
            'diana.jpeg': null,
        }
    },
    '/music': {
        'hey_programmers.mp3': null,
        '/genres': {
            '/rock': {
                'everlong.flac': null,
                'livin_on_a_prayer.mp3': null
            },
            '/hip_hop': {
                'express_yourself.wav': null,
                'ny_state_of_mind.mp3': null
            }
        }
    }
};
//
// fileFinder(desktop, 'app_academy_logo.svg');     // => true
// fileFinder(desktop, 'everlong.flac');            // => true
// fileFinder(desktop, 'sequoia.jpeg');             // => false
function fileFinder(directories, targetFile) {
   for(file in directories){ // way to key into each element in object
       if (file === targetFile) return true; // base case if file is found return true
       let subdir = directories[file]; // otherwise check in subdirectory
       let result = fileFinder(subdir, targetFile); // if result is found it will be True
       if(result) return true; // so if true return true
   }
   return false // if nothing is found ie true is not returned return false
}

console.log(fileFinder(desktop, 'app_academy_logo.svg'));     // => true
console.log(fileFinder(desktop, 'everlong.flac'));            // => true
console.log(fileFinder(desktop, 'sequoia.jpeg'));             // => false


// Write another function, pathFinder(directories, targetFile), that returns the path that contains the targetFile.
// If the targetFile is not found in the directories, then return null.
// You can assume the files are unique.
//
// Example using the same desktop from previously:
//
// pathFinder(desktop, 'trixie_lou.jpeg'));     // => '/images/pets/trixie_lou.jpeg'
// pathFinder(desktop, 'everlong.flac'));       // => '/music/genres/rock/everlong.flac'
// pathFinder(desktop, 'honeybadger.png'));     // => null
function pathFinder(directories, targetFile) {
    for(let file in directories){ // we have to key into the directory
        if(file === targetFile) return '/'+ targetFile; // base case if target is found return with '/' added init
        let subdir = directories[file]; // if not check in subdirectory
        let result = pathFinder(subdir, targetFile); // if the result is found it will be name of file;
        if(result !== null) return file + result; // we have gone through each file so we need to add it before
    }
    return null;
}


// console.log(pathFinder(desktop, 'trixie_lou.jpeg'));     // => '/images/pets/trixie_lou.jpeg'
// console.log(pathFinder(desktop, 'everlong.flac'));       // => '/music/genres/rock/everlong.flac'
// console.log(pathFinder(desktop, 'honeybadger.png'));     // => null


