planLength = localStorage.getItem("planLength");
lastRecharge = localStorage.getItem("lastRecharge");
planData = localStorage.getItem("planData");

// planLength = "Hello";
// lastRecharge = "Hello";
// planData = "Hello";

if((planData === null) || (lastRecharge === null) || (planLength === null)){
  document.getElementById("max_data").innerHTML = "";
  document.getElementById("days_left").innerHTML = "Please enter the information of your plan.";
} else {

}
