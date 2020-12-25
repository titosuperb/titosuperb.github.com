function display_percent(){
  let amount_done = document.getElementsByTagName('input')[0].value;
  let total = document.getElementsByTagName('input')[1].value;
  if((amount_done/total == Infinity)||(amount_done=="")||(total=="")||((amount_done==0)&(total==0))){
    document.getElementById("output").innerHTML="0%";
  }else{
    document.getElementById("output").innerHTML=(Math.round(amount_done*10000/total)/100) + "%"
  }
}



setInterval(display_percent, 1000);
