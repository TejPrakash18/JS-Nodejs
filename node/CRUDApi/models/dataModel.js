let dataStore = [
    {id:1, name:"Tej", email:"tej@gmail.com"}
]

const getAllData = () =>{
    return dataStore
};

const addData = (name, email)=>{
    const newData = {id: dataStore.length+1, name, email};
    dataStore.push(newData);
    return newData;
}

module.exports = {getAllData, addData}