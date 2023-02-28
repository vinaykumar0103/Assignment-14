"use strict"

// 1) write a javascript program
// a) filter employees according to department = IT
// b) filter employees who earn a salary < 65000
// Sample Input:
// let employees = [
// {
// "id": 1,
// "name":"Abhinav",
// "department":"IT",
// "Salary":75000
// },
// {
// "id": 2,
// "name":"Gaurav",
// "department":"Sales",
// "Salary":52000
// },
// {
// "id": 3,
// "name":"Raj",
// "department":"IT",
// "Salary":64000
// }]
// Output:
// [
// {
// "id": 1,
// "name":"Abhinav",
// "department":"IT",
// "Salary":75000
// },
// {

// "id": 3,
// "name":"Raj",
// "department":"IT",
// "Salary":64000
// }
// ]
// [
// {
// "id": 2,
// "name":"Gaurav",
// "department":"Sales",
// "Salary":52000
// },
// {
// "id": 3,
// "name":"Raj",
// "department":"IT",
// "Salary":64000
// }
// ]

let employees = [
  {
    "id": 1,
    "name": "Abhinav",
    "department": "IT",
    "Salary": 75000
  },
  {
    "id": 2,
    "name": "Gaurav",
    "department": "Sales",
    "Salary": 52000
  },
  {
    "id": 3,
    "name": "Raj",
    "department": "IT",
    "Salary": 64000
  }
];

let itEmployees = employees.filter(employee => employee.department === 'IT');
console.log(itEmployees);

let lowSalaryEmployees = employees.filter(employee => employee.Salary < 65000);
console.log(lowSalaryEmployees);





// 2. Write a JavaScript program to filter the hospitals according to:
// a) Number of Beds > 200
// b) Availability of Beds = Yes
// c) Location = Pune

// Sample Input:
// let hospitals = [
// {
// "id": 1,
// "name":"Hospital A",
// "location":"Delhi",
// "noOfBeds":450,
// “availability”:”Yes”
// },
// {
// "id": 2,
// "name":"Hospital B",

// "location":"Pune",
// "noOfBeds":150,
// “availability”:”No”
// },
// {
// "id": 3,
// "name":"Hospital
// C",
// "location":"Pune",
// "noOfBeds":350.
// “availability”:”Yes”
// }]
// Output:
// [
// {
// "id": 1,
// "name":"Hospital
// A",
// "location":"Delhi",
// "noOfBeds":450,
// “availability”:”Yes”
// },
// {
// "id": 3,
// "name":"Hospital
// C",
// "location":"Pune",
// "noOfBeds":350,
// “availability”:”Yes”
// }
// ]
// [
// {
// "id": 1,
// "name":"Hospital
// A",
// "location":"Delhi",

// "noOfBeds":450,
// “availability”:”Yes”
// },
// {
// "id": 3,
// "name":"Hospital
// C",
// "location":"Pune",
// "noOfBeds":350,
// “availability”:”Yes”
// }
// ]
// [
// {
// "id": 2,
// "name":"Hospital B",
// "location":"Pune",
// "noOfBeds":150,
// “availability”:”No”
// },
// {
// "id": 3,
// "name":"Hospital
// C",
// "location":"Pune",
// "noOfBeds":350,
// “availability”:”Yes”
// }
// ]

let hospitals = [
    {
        "id": 1,
        "name": "Hospital A",
        "location": "Delhi",
        "noOfBeds": 450,
        "availability": "Yes"
    },
    {
        "id": 2,
        "name": "Hospital B",
        "location": "Pune",
        "noOfBeds": 150,
        "availability": "No"
    },
    {
        "id": 3,
        "name": "Hospital C",
        "location": "Pune",
        "noOfBeds": 350,
        "availability": "Yes"
    }
];


let bedsGreaterThan200 = hospitals.filter(hospital => hospital.noOfBeds > 200);
console.log(bedsGreaterThan200);


let bedsAvailable = hospitals.filter(hospital => hospital.availability === "Yes");
console.log(bedsAvailable);


let hospitalsInPune = hospitals.filter(hospital => hospital.location === "Pune");
console.log(hospitalsInPune);
