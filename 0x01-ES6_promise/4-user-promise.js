export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName }); // Resolves Promise containing user details
}
