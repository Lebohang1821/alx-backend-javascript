export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else { // If success is false, reject with error indicating fake API is not working
      reject(new Error('The fake API is not working currently'));
    }
  });
}
