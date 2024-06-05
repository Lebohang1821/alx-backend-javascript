const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
    // If success is true, resolve promise with successful response
  if (success) {
    resolve({data: 'Successful response from the API'});
  }
});

module.exports = getPaymentTokenFromAPI;
