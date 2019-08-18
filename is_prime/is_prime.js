function get_ds(num){
  ds = [];
  ds[0] = 1;
  for(let a=2;a<=(num/2);a++){
    if(num%a === 0){
      ds[ds.length] = a;
    }
  }
  ds[ds.length] = num;
  return ds;
}
function show_ds_num(){
  let num = document.getElementById('num').value;
  if(num != ""){
    document.getElementById('d').innerHTML = get_ds(num);
  }
}

setInterval(show_ds_num, 1000)
