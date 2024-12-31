async function fetchData(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}`)
    const data = await response.json();
    const follower = data.followers;
    const publicrepo = data.public_repos;

    console.log("followers", follower)
    console.log("repos", publicrepo)
    console.log(data)   
}


const getData = async ()=>{
    let data = "Hello Tej...!";
    return data;
}

getData().then(data=>{
    console.log(data);
});


const getData1 = async () => {
    let y = await "Hello World";
    console.log(y);
}

console.log(1);
getData1();
console.log(2);

fetchData("Tejprakash18");
