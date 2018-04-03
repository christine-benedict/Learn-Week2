

var product = { name: "OledMonitor", price: 300.00 }
var budget = 275.00
var inBudget;

function message(product, inB){
  if(inB){
    return "Product is within the budget"
  } else {
    return "Product is beyond budget"
  }
}

function checkBudget( prod, b ){
  if ( prod.price < b ){
    inBudget == true
    return message(prod.name, inBudget)
  } else {
    inBudget == false
    return message(prod.name, inBudget)
  }
}
