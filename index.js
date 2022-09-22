// Code your solution in this file!
const returnFirstTwoDrivers = a=> a.slice(0,2) 

const returnLastTwoDrivers = b=> b.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function (fa){
        return fa*integer
    }
}

function fareDoubler(fare){
    return createFareMultiplier(2)(fare)
}

function fareTripler(fare){
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(c,d){
    if (d===returnFirstTwoDrivers){
        return returnFirstTwoDrivers(c)
    }else if (d===returnLastTwoDrivers){
        return returnLastTwoDrivers(c)
    }
} 