export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName }); // Resolves Promise with object containing user details
}
