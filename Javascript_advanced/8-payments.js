function processPayment(amount) {
  console.log("Processing payment of " + amount);
}

function processOrder(orderId, amout) {
  console.log(orderId + " is being processed");
  processPayment(amout); // appel de la fonction processPayment
  console.log(orderId + " has been fully processed");
}

console.log("Processing orders");
processOrder(12321, 10.99); // appel de la fonction processOrder
processOrder(12322, 12.99);
processOrder(12323, 15.0);
console.log("All the orders have been processed");
