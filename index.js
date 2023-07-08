const drivers = [`Antonio`, `Nuru`, `Amari`, `Mo`]
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2,4)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function fareMultiplier(integer) {
    return function (fare) {
        return fare*integer;
    }   
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, driversCallBackFunction) =>
{
    return driversCallBackFunction(drivers);
}

     

  
