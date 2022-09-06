const noMondays = new Promise((resolve, reject) => {
    if (new Date().getDay() !== 1) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});

// noMondays // run the promise
//     .then(res => console.log(".then response:  " +res))
//     .catch(err => console.log(".catch err :" +err));


const apiCall = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("finish api call")
        }, 2000)
    })
}

// option 1: .then
const thenFunc =() =>{
    console.log("start")
    apiCall()
        .then((response) => {
            console.log(" .then --> " + response)
            console.log("end")
        })
        .catch((error) =>console.log(" .catch --> " + error) )
}
// sign up using google sign-in
// sign up for our webapp ( wait for the response of google sign-in)
// thenFunc()

// option 2: async()
const asyncFunc = async() =>{
    console.log("start")
    const response = await apiCall()
    console.log(" await --> " + response)
    console.log("end")
}

asyncFunc()

