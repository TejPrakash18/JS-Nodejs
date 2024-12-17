const express = require('express');
const app = express();


// synchronous error 

function divide(a,b){
    if(b === 0) throw new Error("a can not divide by zero");
    return a/b;
}

try{
    const result = divide(20,0);
    console.log(`result is ${result}`);
}
catch(err){
    console.log('error is', err.message);
}

// Synchronous route handler with try-catch block
app.get('/sync', (req, res) => {
  try {
    // Simulate a synchronous operation that might throw an error
    throw new Error('Synchronous Error');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Asynchronous route handler using async/await
app.get('/async', async (req, res) => {
  try {
    // Simulate an asynchronous operation that might throw an error
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Asynchronous Error'));
      }, 1000);
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Error handling middleware to catch all errors
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

