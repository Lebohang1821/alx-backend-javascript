const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }
  // Return 0 if operation type is not recognized.
  return 0;
};

module.exports = calculateNumber;
