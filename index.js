// let arr= ["Gray", "Worm", "Security", 1]
// let twoRows = [
//   ["moe", "sizlak", "barkeep", 2],
//   ["bartholomew", "simpson", "scamp", 3]
// ]
function createEmployeeRecord(arr){
  let [ firstName, familyName, title, payPerHour] = arr
  const emloyeeObj ={
    firstName: firstName,
    familyName: familyName,
   title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  }

  return emloyeeObj
}

const  createEmployeeRecords =(empArr)=>{
   return empArr.map(employee=> createEmployeeRecord(employee))
}
const recordObj= createEmployeeRecord(twoRows)

function createTimeInEvent(recordObj, date) {
  const [datee, hour] = date.split(' ')
  recordObj.timeInEvents.push({
    type: "TimeIn",
    date: datee,
    hour: parseInt(hour,10)
  });
  return recordObj;
}

function createTimeOutEvent(recordObj, date) {
  const [datee, hour] = date.split(' ')
  recordObj.timeOutEvents.push({
    type: "TimeOut",
    date: datee,
    hour: parseInt(hour)
  });
  return recordObj;
}

function hoursWorkedOnDate(recordObj, date) {
   const out = recordObj.timeOutEvents.find((d)=> d.date === date);
   const inT = recordObj.timeInEvents.find((d)=>d.date === date);
   const res = (out.hour - inT.hour)/ 100
   return res 
}

function wagesEarnedOnDate(recordObj, date){
  return hoursWorkedOnDate(recordObj, date ) * parseFloat(recordObj.payPerHour)
}

function allWagesFor(recordObj) {
  const dates = recordObj.timeInEvents.map(event => event.date);
  const totalWages = dates.reduce((total, date) => total + wagesEarnedOnDate(recordObj, date), 0);
  return totalWages;
}

function calculatePayroll(employeeRecords) {
  const totalPayroll = employeeRecords.reduce((total, employee) => {
    return total + allWagesFor(employee);
  }, 0);

  return totalPayroll;
}

