/* multiple promises */
import signUpUser from './4-user-promise.js'
import uploadPhoto from './5-photo-reject.js'

export default function handleProfileSignup(firstname, lastname, filename) {
  return Promise.all([
    signUpUser(firstname, lastname),
    uploadPhoto(filename),
  ])
  .then(values => values)
  .catch(err => err);
}
