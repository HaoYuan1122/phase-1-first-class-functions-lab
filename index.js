// Code your solution in this file!
// const returnFirstTwoDrivers = a=> a.slice(0,2) 

// const returnLastTwoDrivers = b=> b.slice(-2)

// const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

// function createFareMultiplier(integer) {
//     return function (fa){
//         return fa*integer
//     }
// }

// function fareDoubler(fare){
//     return createFareMultiplier(2)(fare)
// }

// function fareTripler(fare){
//     return createFareMultiplier(3)(fare)
// }

// function selectDifferentDrivers(c,d){
//     if (d===returnFirstTwoDrivers){
//         return returnFirstTwoDrivers(c)
//     }else if (d===returnLastTwoDrivers){
//         return returnLastTwoDrivers(c)
//     }
// } 

const array1=['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function (a){
    return a.slice(0,2)
}
console.log(returnFirstTwoDrivers(array1))

const returnLastTwoDrivers=function (a){
    return a.slice(-2)
}
console.log(returnLastTwoDrivers(array1))

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

console.log(selectingDrivers[returnFirstTwoDrivers,returnLastTwoDrivers])

function createFareMultiplier(integer){
    return function (fare){
        return integer*fare
    }
}

const fareDoubler = function (fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function (fare){
    return createFareMultiplier(3)(fare)
}
const fareTripler1 = function (fare){
    return fare*3
}
console.log(fareTripler(9),fareTripler1(9))

const selectDifferentDrivers = function (a,b){
    if(b===returnFirstTwoDrivers){
        return returnFirstTwoDrivers(a)
    }else {
        return returnLastTwoDrivers(a)
    }
}