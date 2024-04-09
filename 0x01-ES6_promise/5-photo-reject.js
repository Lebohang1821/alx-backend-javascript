export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`)); // Reject Promise with error message
}
