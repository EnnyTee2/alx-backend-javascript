let done = true;

const getResponseFromAPI = new Promise(
  (resolve, reject) => {
    if (done) {
    resolve(true)
    } else {
    reject(false)
    }
  })
