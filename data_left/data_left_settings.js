function saveInp() {
  localStorage.setItem("planLength", document.getElementById("planLengthInp").value)
  localStorage.setItem("planData", document.getElementById("planDataInp").value)
  localStorage.setItem("lastRecharge", document.getElementById("lastRechargeInp").value)
}
