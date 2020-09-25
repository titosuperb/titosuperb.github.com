//This function is copied from user AnthonyWJones on stackoverflow
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function sum(nums){
  cntr = 0;
  for (var i = 0; i < nums.length; i++) {
    cntr += nums[i];
  }
  return cntr
}

function mrd(d1, d2) {
  ld1 = [d1.getFullYear() > d2.getFullYear(), d1.getMonth() > d2.getMonth(), d1.getDate() > d2.getDate()];
  ld2 = [d2.getFullYear() > d1.getFullYear(), d2.getMonth() > d1.getMonth(), d2.getDate() > d1.getDate()];
  for (var i = 0; i <= 2; i++) {
    if (!(ld1[i]) && (ld2[i])){
      return 1
    } else if ((ld1[i]) && !(ld2[i])) {
      return 0
    } else {
      if(i === 2){
        return NaN
      }
    }
  }
}

function gdn(d){
  //Get date number
  months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  days = sum(months.slice(0, d.getMonth())) + d.getDate();
  if((d.getMonth() > 1) && ((d.getFullYear() % 4) == 0)){
    return days + 1
  } else {
    return days
  }
}

function differenceDays(date1, date2){
  if((date1.getDay() == date2.getDay()) && (date1.getMonth() == date2.getMonth()) && (date1.getYear() == date2.getYear())){
    return 0
  } else {
    d1 = [date1, date2][mrd(date1, date2)];//More recent date
    d2 = [date1, date2][(!mrd(date1, date2)) ? 1:0];

    //Scenario 1: Two years apart or more
    //Scenario 2: One year apart
    //Scenario 1: Same years apart

    dd1 = gdn(d1);
    dd2 = gdn(d2);

    yd = d1.getFullYear() - d2.getFullYear();
    if(yd >= 2){
      
    }else if (yd == 1) {

    }else{
      return dd1 - dd2
    }
  }
}

let planLength = localStorage.getItem("planLength");
let lastRecharge = localStorage.getItem("lastRecharge");
let planData = localStorage.getItem("planData");

let lastRechargeDate = new Date(lastRecharge);
lastRechargeDate.setDate(lastRechargeDate.getDate()+1);

let today = new Date();

if((planData === null) || (lastRecharge === null) || (planLength === null)){
  document.getElementById("max_data").innerHTML = "";
  document.getElementById("days_left").innerHTML = "Please enter the information of your plan.";
}else if(differenceDays(lastRechargeDate, today) >= planLength){
  document.getElementById("max_data").innerHTML = "";
  document.getElementById("days_left").innerHTML = "Please recharge your phone plan ("+differenceDays(lastRechargeDate, today)+" since last recharge).";
}else{
  document.getElementById("max_data").innerHTML = Math.floor((planData/planLength)*(differenceDays(lastRechargeDate, today)+1))+"Mb";
  document.getElementById("days_left").innerHTML = planLength - differenceDays(lastRechargeDate, today) + " day(s) left";
}
