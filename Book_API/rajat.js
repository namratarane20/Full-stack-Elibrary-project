
// Given below is an array of objects stored in variable library. Your work is to create a function with one object as argument
// You have to create a new object with 2 properties. 1st property named prop1 has value i.e., an array containing objects
// with readingStatus value true and 2nd property named prop2 has value i.e., an array containing objects with readingStatus value false.
// Return the resulting object in an output variable

// Use var to create 2 new variable and assign them an empty array

// Given below is an array of objects stored in variable library. Your work is to create a function with one object as argument
// You have to create a new object with 2 properties. 1st property named prop1 has value i.e., an array containing objects
// with readingStatus value true and 2nd property named prop2 has value i.e., an array containing objects with readingStatus value false.
// Return the resulting object in an output variable

// Use var to create 2 new variable and assign them an empty array



var library1 = [
    {
        title: "Love",
        author: "Silver",
        rStatus: false
    },
    {
        title: "Rich Dad",
        author: "Robert",
        rStatus: true
    },
    {
        title: "Yourself",
        author: "Raju",
        rStatus: true
    },
    {
        title: "Poor Dad",
        author: "Kiyosaki",
        rStatus: false
    },
    {
        title: "Work beyond limit",
        author: "SilverStar",
        rStatus: true
    }
];

var library2 = [
    {
        title: "Love ---",
        author: "Silver----",
        rStatus: false
    },
    {
        title: "Rich Dad ---",
        author: "Robert",
        rStatus: true
    },
    {
        title: "Yourself ----",
        author: "Raju",
        rStatus: true
    },
    {
        title: "Poor Dad ---",
        author: "Kiyosaki",
        rStatus: false
    },
    {
        title: "Work beyond limit ---",
        author: "SilverStar",
        rStatus: true
    }
];

var prop1 = []
var prop2 = []

function lib(myObject) {
    for (var data in myObject) {
        if (myObject[data].rStatus == true) {
            prop1.push(myObject[data])
        }
        else if (myObject[data].rStatus == false) {
            prop2.push(myObject[data])
        }
    }
    var finalResult = {
        prop1, prop2
    }
    // console.log('My final data', finalResult);
    return finalResult

}

// lib(library2);
lib(library2)

var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" }
  ];