const Utils = require('./utils');

// Sends a payment request to the API.
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalCost}`);
};

module.exports = sendPaymentRequestToApi;
