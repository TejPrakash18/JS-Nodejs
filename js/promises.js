const promise = new Promise((resolve, reject)=>{
    console.log("asynchronous task is executed...!");
    throw "error ";
    if(false){
        const person = {name : "Tej Upadhyay!"}
        resolve(person);
    }
    else{
        const err = {errorcode: "1001"}
        reject(err);
    }
});

promise.then(
    (p)=>{
    console.log("Passed",p);
}
// (e)=>{
//     console.log("Failed",e);
// }
).catch((err)=>{
    console.log("field", err)
}).finally(()=>{
    console.log("always execute!")
})