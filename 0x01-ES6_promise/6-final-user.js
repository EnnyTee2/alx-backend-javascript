/* eslint-disable */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const f1 = signUpUser(firstName, lastName);
  const f2 = uploadPhoto(fileName);
  const proms = [f1, f2]; 
  
  const final = Promise.allSettled(proms).
    then((results) => Array.of( results.forEach((result) => ({ status: result.status, value: result.value }) )))
  return final;
    
}
