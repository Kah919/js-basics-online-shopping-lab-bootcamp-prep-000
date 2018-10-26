var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * (100) + 1);
 var newItem = {itemName: item, itemPrice: price};
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var inCart = []
  if(!cart.length) {
    return "Your shopping cart is empty."
  } else {
    for(var i = 0; i < cart.length; i++) {
      inCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      if(i < cart.length) {
        incart.push(", ");
      } else {
        incart.push(".")
      }
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
