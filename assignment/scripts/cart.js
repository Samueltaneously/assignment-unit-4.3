console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

//Add Items
function addItem(item) {
basket.unshift(item);
for (let i = 0; i < basket.length; i++) {
    if (basket[i]==item){
      return true;
    }
    else if(basket[i] != item) {
      return false;
    }
  }
}
console.log(addItem('icecream'));
console.log(addItem('pizza'));
console.log(basket);

//List Items
function listItems(){
    for (each of basket) {
        console.log(each);
    }
}
console.log(listItems());

//Empty Basket
function empty() {
    basket = [];
}
empty();
console.log(basket);

//Max Items
const maxItems = 5;
function isFull(){
    if (maxItems > basket.length){
        return false;
    }
    else if (maxItems <= basket.length){
        return true;
    }
}










// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
