let dataStore = [
    { id: 1, userName: "Tej", email: "tej@gmail.com" }
];

// Fetch all data
const getAllData = () => {
    return dataStore;
};

// Add new data
const addData = (userName, email) => {
    const newData = { id: dataStore.length + 1, userName, email };
    dataStore.push(newData);
    return newData;
};

// Get data by id
const getById = (id) => {
    const item = dataStore.find(item => item.id === id); // Fix: added a callback function
    return item;
};

// Update data by id
const updateData = (id, userName, email) => {
    const item = dataStore.find(item => item.id === id); // Fix: added a callback function
    if (item) {
        item.userName = userName || item.userName; // Fix: changed 'name' to 'userName'
        item.email = email || item.email;
        return item;
    } else {
        return null; // If item not found
    }
};

// Delete data by id
const deleteData = (id) => {
    const index = dataStore.findIndex(item => item.id === id); // Fix: added a callback function
    if (index !== -1) {
        return dataStore.splice(index, 1);
    } else {
        return null; // If item not found
    }
};

module.exports = { getAllData, addData, getById, updateData, deleteData };
