//This function is copied from user AnthonyWJones on stackoverflow
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
//

// function differenceDays(date1, date2, limit){
//   let dates = [];
//   cntrd = new Date(date1.valueOf());
//   dates[dates.length] = cntrd;
//   cntr = 0;
//   while(true){
//     cntr +=1 ;
//     cntrd.setDate(cntrd.getDate() + 1)
//     dates[dates.length] = cntrd;
//     if((dates.length == limit) || (cntrd == date2)){
//       break
//     }
//   }
//   return dates.length - 1
// }

let planLength = localStorage.getItem("planLength");
let lastRecharge = localStorage.getItem("lastRecharge");
let planData = localStorage.getItem("planData");

let lastRechargeDate = new Date(lastRecharge);
lastRechargeDate.setDate(lastRechargeDate.getDate()+1);

let today = new Date();

if((planData === null) || (lastRecharge === null) || (planLength === null)){
  document.getElementById("max_data").innerHTML = "";
  document.getElementById("days_left").innerHTML = "Please enter the information of your plan.";
} else {
  console.log(planLength);

  console.log(lastRecharge);
  console.log(lastRechargeDate);
  console.log(differenceDays(lastRechargeDate, today));
  console.log(planData);

  // console.log(lastRechargeDate.addDays(parseInt(planLength)))
}
