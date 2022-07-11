// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('shiftAndShuffle', () => {
    const expected = ["yellow", "blue", "pink", "green"] || ["blue", "pink", "green", "yellow"] || ["pink", "green", "yellow", "blue"] || ["green", "yellow", "blue", "pink"];
    const expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"] || ["aqumarine", "periwinkle", "indigo", "ochre", "saffron"] || ["periwinkle", "indigo", "ochre", "saffron", "aquarmaine"] || ["indigo", "ochre", "saffron", "aquarmaine", "periwinkle"] || ["ochre", "saffron", "aquarmaine", "periwinkle","indigo"]
    it('removes the first item from the array and shuffles the remaining content', () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
      expect(shiftAndShuffle (colors1)).toEqual(expect.arrayContaining(expected));
      expect(shiftAndShuffle (colors2)).toEqual(expect.arrayContaining(expected2))
    });
  })


//  ReferenceError: shiftAndShuffle is not defined



// b) Create the function that makes the test pass.

//music break: I had to listen to Beyonce's Break My Soul to prepare my mind 

//-------Psuedo Code------//
  // declare a function called shiftAndShuffle 
  // set param (array)
  // declare a variable called getShifty and assign it to the array with the first value being removed. 
  // use the Fisher-Yates algorithm to shuffle the array.

  const shiftAndShuffle = (array) => {
    const getShifty = array.shift() 
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        const temp = array [i];
        array[i] = array [j]
        array[j] = temp;
    }
    return array;
  }

// Test Suites: 1 passed, 1 total


// I did research on the Fisher-Yates algorithm and I kind of understand what is happening but could you explain it to me in laymen's terms? I would really appreciate it :)



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minAndMax", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
            // Expected output: [-8, 90]
        const nums2 = [109, 5, 9, 67, 8, 24]
            // Expected output: [5, 109]
      expect(minAndMax(nums1)).toEqual([-8, 90])
      expect(minAndMax(nums2)).toEqual([5, 109])
    })
  })

//  ReferenceError: minAndMax is not defined


// b) Create the function that makes the test pass/

    // Psuedo code:
        // declare a function 
        // set param array 
        // declare a variable 
        // use array.max and array.min to find the minimum and maximum values
        // assign results to (array.min, array.max)

// const minAndMax = (array) => {
//     let min = Math.min(array).toString;
//     let max = Math.max(array).toString;
//     return min.split()
// }



// const minAndMax = (array) => {
//     let results = ((array.min, array.max));
//      let newArray = [];
//      newArray.push(results)
//      return newArrayS
// }
//

// const minAndMax = (array) => {
//     return array.filter ((value) => {
//         if ((Math.min(array)) <= value) {
//         return value
//         } else if ( (Math.max(array)) >= value) {
//         return value 
//         }
//     })
// }


//-------Psuedo Code------//
    // declare a function called minAndMax
    // set param (array)
    // declare a variable called newArray and assign it to a function that returns an array in ascending order
    // use .filter to iterate through the new array
    // use condtional statements with Math.min() and Math.max() to determine which values are the minimum and maximum
        //if Math.min(newArray) === value return value
        // else if Math.max(newArray) === value return value 
    // return results 

const minAndMax = (array) => {
    let newArray = array.sort((a,b) => {return a - b})
    return newArray.filter (value => {
        if (Math.min(...newArray) === value) {
            return value
        } else if ( Math.max(...newArray) === value) {
            return value 
        }
    })
}

// Test Suites: 1 passed, 1 total

// Its 10:40 pm, I honestly have no idea what I am doing wrong here. It works when I console.log it but not when I test it. Whyyyyyyy?!
// LOL false alarm, i figured it out. its 10:45 and been looong day. 




// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noRepeats", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
        // Expected output: [3, 7, 10, 5, 4, 8, 2, 1] 
      expect(noRepeats(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
     })
  })

//   ReferenceError: noRepeats is not defined


// b) Create the function that makes the test pass.

//----Pseudo code----//
  // declare a function called noRepeats
  // set params (array1, array2)
  // declare a variable called combinedArray and assign it to the 2 arrays combined 
  // use spread operator to combine the 2 arrays together 
  // use Set() to creat an object of unique values, getting rid of the duplicates 
  // return convert the object into an array using the Array.from() method


const noRepeats = (array1, array2) => {
    let combinedArray = [...array1, ...array2]
    let setObject = new Set(combinedArray)
    console.log
      return Array.from(new Set(combinedArray))
      
}

// Test Suites: 1 passed, 1 total

