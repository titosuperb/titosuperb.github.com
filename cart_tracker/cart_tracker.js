var Item_line_objects = [];
var isFirefox = typeof InstallTrigger !== 'undefined';
var numotex = isFirefox ? "text" : "number";

if(isFirefox){
  document.getElementById("Cb").type = "text";
}

class Item_line {
  constructor(name, posistion){
    this.name = name;
    this.posistion = posistion;
    Item_line_objects[Item_line_objects.length] = this;
  }
  create_line(){
    let line = `
    <div class="item_line" id='` + this.name + `'>
      <input type="text" name="Item-name" value="" id='`+ this.name + "-Item-name" +`'>
      <div class="middle-text"></div>
      <input type="`+numotex+`" name="Cuantity" value="1" id='`+ this.name + "-Cuantity" +`'>
      <div class="middle-text"></div>
      <input type="`+numotex+`" name="Price" value="" id='`+this.name + "-Price" +`'>
      <div class="middle-text"></div>
      <div class="output_box" id='`+ this.name + "-pricexcuantity" + `'></div>
      <button type="button" name="button" onclick="`+ this.name + `.clear()"><i class="material-icons">sync</i></button>
      <button type="button" name="button" onclick="`+ this.name +  `.delete()"><i class="material-icons">delete</i></button>
    </div>
    `
    return document.createRange().createContextualFragment(line);
  }
  add_line() {
    document.getElementById("item_lines").appendChild(this.create_line())
    let br = document.createRange().createContextualFragment("<br id='" + this.name + "-br'>");
    document.getElementById("item_lines").appendChild(br);
  }
  is_empty() {
    let item_name = document.getElementById(this.name + "-Item-name").value == "";
    let cuantity = document.getElementById(this.name + "-Cuantity").value == 1;
    let price = document.getElementById(this.name + "-Price").value == "";
    return [item_name, cuantity, price].every(function (x){return x == true});
  }
  show_pxc() {
    let cuan_val = document.getElementById(this.name + "-Cuantity").value;
    let price_val = document.getElementById(this.name + "-Price").value;
    document.getElementById(this.name + "-pricexcuantity").innerHTML = cuan_val * price_val;
    return cuan_val * price_val;
  }
  clear() {
    document.getElementById(this.name + "-Item-name").value = "";
    document.getElementById(this.name + "-Cuantity").value = "1";
    document.getElementById(this.name + "-Price").value = "";
  }
  delete() {
    if (Item_line_objects.length != 1){
    document.getElementById("item_lines").removeChild(document.getElementById(this.name))
    document.getElementById("item_lines").removeChild(document.getElementById(this.name + "-br"))
    let hname = this.name;
    window.Item_line_objects = Item_line_objects.filter(function(value){return value.name != hname;});
    }else{
      Item_line_objects[0].clear();
  }
  }
}

function create_item_line() {
  if (Item_line_objects.length == 0){
    var pos = 0;
  } else {
    var pos = Math.max(...Item_line_objects.map(n => n.posistion)) + 1;
  }
  let name = "hol" + pos;
  eval("window." + name + " = new Item_line('" + name + "'," + pos + ");");
  return name;
}

function sum(list){
  let total = 0;
  for(let a = 0;a<list.length;a++){
    total += list[a];
  }
  return total;
}

function calculate() {
  let prices = Item_line_objects.map(x => x.show_pxc());
  document.getElementById("total").innerHTML = sum(prices);
  let cb = document.getElementById("Cb").value;
  document.getElementById("Change").innerHTML = cb-sum(prices);
}

function refresh_page() {
  if(document.getElementById("item_lines").childNodes.length == 0){
    create_item_line();
    Item_line_objects[0].add_line();
  }
  if (!(Item_line_objects[Item_line_objects.length - 1].is_empty())) {
    create_item_line();
    Item_line_objects[Item_line_objects.length - 1].add_line();
  }
  calculate();
}

refresh_page()
setInterval(refresh_page, 1000);
