/* eslint-disable */
export default function handleResponseFromAPI(promise)
{
  promise
    .then(ok => {
      console.log("Got a response from the API");
      return ({status: 200, body: success});
    })
    .catch(err => new Error())
}


/* if (promise.resolve) {
    console.log("Got a response from the API");
    return ({status: 200, body: success});
  }
  return (new Error()); */
