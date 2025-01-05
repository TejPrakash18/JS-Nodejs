## Top 60 Most Asked Fundamental Questions and Answers for Fresher or Entry-Level Job (JavaScript, Node.js, Backend)

### This document contains the top 60 frequently asked questions with answers and code samples for freshers or entry-level candidates in the fields of JavaScript, Node.js, and Backend Development.

<p> Table of Contents</p>

|Name |Quantity|
|----------|---|
|JAvaScript|20 |
|Node.js   |20 |
|Backend   |20 |

## JavaScript Questions and Answers (20)

1. **What is JavaScript?**

    **Answer:**
    JavaScript is a lightweight, interpreted programming language used to create dynamic and interactive web content. It is primarily used for client-side scripting to enhance user interaction with web pages.
    
2. **What are variables in JavaScript?**

    **Answer:**
    Variables are used to store data values in JavaScript. You can declare variables using var, let, and const.
    
    ```js
    let name = 'John';
    const age = 30;
    var city = 'New York';
    ```

3. **What is the difference between let, const, and var?**

    **Answer:**
    
    - `var`: Declares variables with function scope.
    - `let`: Declares block-scoped variables, can be reassigned.
    - `const`: Declares block-scoped variables that cannot be reassigned.

4. **What are data types in JavaScript?**

    **Answer:**
    JavaScript has primitive types and reference types:
    
    - Primitive: string, number, boolean, null, undefined, symbol, bigint
    - Reference: object, array, function

5. **What is a closure in JavaScript?**

    **Answer:**
    A closure is a function that retains access to variables from its lexical scope, even after the outer function has executed.

    ```js
    function outer() {
      let count = 0;
      return function inner() {
        count++;
        console.log(count);
      };
    }
    const counter = outer();
    counter(); // 1
    counter(); // 2
    ```

6. **What is the difference between == and === in JavaScript?**

    **Answer:**
    
    - `==`: Compares values, performing type coercion.
    - `===`: Compares both value and type, no type coercion.

7. **What is a callback function in JavaScript?**

    **Answer:**
    A callback function is a function passed into another function as an argument and executed later.

    ```js
    function greet(name, callback) {
      console.log('Hello, ' + name);
      callback();
    }
    
    greet('John', function() {
      console.log('Callback function executed!');
    });
    ```

8. **What are promises in JavaScript?**

    **Answer:**
    A Promise represents the completion (or failure) of an asynchronous operation and its resulting value.

    ```js
    let promise = new Promise((resolve, reject) => {
      let success = true;
      if(success) {
        resolve("Task Completed!");
      } else {
        reject("Task Failed!");
      }
    });
    
    promise.then((message) => console.log(message)).catch((error) => console.log(error));
    ```

9. **What is async/await in JavaScript?**

    **Answer:**
    async/await is syntactic sugar for working with promises. It allows asynchronous code to be written in a synchronous manner.

    ```js
    async function fetchData() {
      let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      let data = await response.json();
      console.log(data);
    }
    fetchData();
    ```

10. **What is the event loop in JavaScript?**

    **Answer:**
    The event loop is the mechanism that allows JavaScript to perform non-blocking operations, by executing code, collecting and processing events, and executing sub-tasks.

11. **What is hoisting in JavaScript?**

    **Answer:**
    Hoisting is JavaScript's default behavior of moving all declarations to the top of their containing scope during compile time.

    ```js
    console.log(a); // undefined
    var a = 10;
    ```

12. **What are arrow functions in JavaScript?**

    **Answer:**
    Arrow functions provide a shorter syntax for writing functions and do not have their own `this` context.

    ```js
    const add = (a, b) => a + b;
    console.log(add(2, 3)); // 5
    ```

13. **What is `this` keyword in JavaScript?**

    **Answer:**
    `this` refers to the current context of the function it is used in. Its value depends on how the function is called.

14. **What are JavaScript arrays?**

    **Answer:**
    An array is a data structure that can hold multiple values of any type.

    ```js
    let arr = [1, 2, 3, 4];
    console.log(arr[0]); // 1
    ```

15. **What is the difference between null and undefined?**

    **Answer:**
    
    - `null`: A value representing the intentional absence of any object value.
    - `undefined`: A variable that has been declared but has not yet been assigned a value.

16. **What is destructuring in JavaScript?**

    **Answer:**
    Destructuring allows unpacking values from arrays or objects into distinct variables.

    ```js
    const person = { name: 'John', age: 30 };
    const { name, age } = person;
    console.log(name, age); // John 30
    ```

17. **What is the spread operator in JavaScript?**

    **Answer:**
    The spread operator `...` is used to unpack elements of an array or object.

    ```js
    let arr = [1, 2, 3];
    let newArr = [...arr, 4, 5];
    console.log(newArr); // [1, 2, 3, 4, 5]
    ```

18. **What is the map() function in JavaScript?**

    **Answer:**
    `map()` creates a new array with the results of calling a provided function on every element in the array.

    ```js
    let arr = [1, 2, 3];
    let newArr = arr.map(x => x * 2);
    console.log(newArr); // [2, 4, 6]
    ```

19. **What is the filter() function in JavaScript?**

    **Answer:**
    `filter()` creates a new array with all elements that pass the test implemented by the provided function.

    ```js
    let arr = [1, 2, 3, 4];
    let newArr = arr.filter(x => x % 2 === 0);
    console.log(newArr); // [2, 4]
    ```

20. **What is the reduce() function in JavaScript?**

    **Answer:**
    `reduce()` executes a reducer function (callback) on each element in the array, resulting in a single output value.

    ```js
    let arr = [1, 2, 3, 4];
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum); // 10
    ```

## Node.js Questions and Answers (20)

1. **What is Node.js?**

    **Answer:**
    Node.js is an open-source, event-driven JavaScript runtime built on Chrome's V8 engine. It allows the development of server-side applications using JavaScript.

2. **What is the event-driven architecture in Node.js?**

    **Answer:**
    Node.js uses an event-driven architecture, where the program executes asynchronously, and events trigger callback functions.

3. **What are callbacks in Node.js?**

    **Answer:**
    Callbacks in Node.js are functions that are passed as arguments to other functions and are invoked when the operation is complete.

4. **What is npm?**

    **Answer:**
    npm (Node Package Manager) is a package manager for JavaScript, allowing you to install, share, and manage dependencies for your Node.js projects.

5. **What is the role of the package.json file?**

    **Answer:**
    The package.json file contains metadata about the project, including its dependencies, scripts, and version.

6. **How do you handle errors in Node.js?**

    **Answer:**
    Errors in Node.js are typically handled using try-catch blocks for synchronous code or by passing errors in callback functions for asynchronous code.

    ```js
    fs.readFile('file.txt', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    ```

7. **What is the purpose of require() in Node.js?**

    **Answer:**
    `require()` is used to import modules in Node.js, enabling you to include external code into your application.

    ```js
    const fs = require('fs');
    ```

8. **What are modules in Node.js?**

    **Answer:**
    Modules are separate files or packages that contain code. You can create your own modules or use built-in or third-party modules.

9. **What is the difference between fs.readFile() and fs.readFileSync()?**

    **Answer:**
    
    - `fs.readFile()`: Asynchronous method to read files.
    - `fs.readFileSync()`: Synchronous method to read files, blocks execution until the file is read.

10. **How does the setTimeout() function work in Node.js?**

    **Answer:**
    `setTimeout()` is used to execute a function after a specified number of milliseconds.

    ```js
    setTimeout(() => {
      console.log('Hello after 2 seconds');
    }, 2000);
    ```

11. **What is Express.js?**

    **Answer:**
    Express.js is a web application framework for Node.js that simplifies routing and middleware management.

12. **What are middleware in Express.js?**

    **Answer:**
    Middleware functions are functions that have access to the request object, response object, and the next middleware function in the application’s request-response cycle.

13. **What is the purpose of the next() function in Express.js?**

    **Answer:**
    The `next()` function is used to pass control to the next middleware function in the stack.

14. **What is the difference between app.use() and app.all() in Express.js?**

    **Answer:**
    
    - `app.use()`: Adds middleware that is executed for all requests regardless of the HTTP method.
    - `app.all()`: Executes middleware for all HTTP methods (GET, POST, etc.) for a specific route.

15. **How do you create a simple HTTP server in Node.js?**

    **Answer:**
    You can create a simple HTTP server using the built-in http module:

    ```js
    const http = require('http');
    const server = http.createServer((req, res) => {
      res.write('Hello World');
      res.end();
    });
    server.listen(3000, () => console.log('Server is running on port 3000'));
    ```

16. **What is the cluster module in Node.js?**

    **Answer:**
    The cluster module allows you to create child processes (workers) to handle the load in a multi-core system, improving performance.

17. **What is a stream in Node.js?**

    **Answer:**
    Streams are used to read and write data in chunks, allowing efficient handling of large amounts of data without consuming excessive memory.

18. **What is the difference between readable and writable streams?**

    **Answer:**
    
    - `Readable`: Used to read data.
    - `Writable`: Used to write data.

19. **How do you handle JSON data in Node.js?**

    **Answer:**
    You can use the `JSON.parse()` method to convert JSON strings into JavaScript objects and `JSON.stringify()` to convert objects to JSON strings.

    ```js
    let obj = JSON.parse('{"name": "John"}');
    console.log(obj.name); // John
    ```

20. **What is the purpose of the process object in Node.js?**

    **Answer:**
    The `process` object provides information about the current Node.js process and allows you to interact with the runtime environment (e.g., accessing environment variables, command-line arguments).

## Back-End Questions and Answers (20)

1. **What is a back-end developer?**

    **Answer:**
    A back-end developer is responsible for server-side development, handling the logic, database interactions, and APIs of a web application.

2. **What is the difference between SQL and NoSQL databases?**

    **Answer:**
    
    - `SQL`: Relational databases that use structured query language for managing and querying data.
    - `NoSQL`: Non-relational databases designed to handle unstructured data with flexibility in schema.

3. **What are RESTful APIs?**

    **Answer:**
    RESTful APIs follow the principles of REST (Representational State Transfer) to provide a way for clients and servers to communicate using HTTP methods like GET, POST, PUT, and DELETE.

4. **What is authentication?**

    **Answer:**
    Authentication is the process of verifying the identity of a user, often through login credentials like a username and password.

5. **What is authorization?**

    **Answer:**
    Authorization is the process of granting or denying access to resources based on the authenticated user's permissions.

6. **What is middleware in backend development?**

    **Answer:**
    Middleware functions handle requests before reaching the main route handler. They can be used for logging, authentication, error handling, etc.

7. **What is an ORM?**

    **Answer:**
    An ORM (Object-Relational Mapping) is a library that allows developers to interact with a database using object-oriented code rather than SQL queries.

8. **What is SQL injection?**

    **Answer:**
    SQL injection is a type of attack where malicious SQL statements are inserted into an entry field to exploit a vulnerability in the system and manipulate the database.

9. **What is MVC architecture?**

    **Answer:**
    MVC (Model-View-Controller) is an architectural pattern used in software development that separates the application into three interconnected components:
    
    - Model: Data and business logic
    - View: UI
    - Controller: Handles user input

10. **What is CORS (Cross-Origin Resource Sharing)?**

    **Answer:**
    CORS is a mechanism that allows web applications running at one origin to access resources from a different origin.

11. **What are CRUD operations?**

    **Answer:**
    CRUD stands for Create, Read, Update, and Delete, the four basic operations for managing data in databases.

12. **What is a server-side language?**

    **Answer:**
    A server-side language is used to write the back-end logic of web applications. Examples include Node.js, Python, Java, Ruby, and PHP.

13. **What is JSON Web Token (JWT)?**

    **Answer:**
    JWT is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and authorization in web applications.

14. **What is load balancing?**

    **Answer:**
    Load balancing distributes incoming network traffic across multiple servers to ensure no single server is overwhelmed, improving the performance and availability of the application.

15. **What is caching?**

    **Answer:**
    Caching stores frequently accessed data in memory or storage to reduce access time and improve the performance of a system.

16. **What is version control, and why is it important?**

    **Answer:**
    Version control is a system that records changes to files over time, allowing multiple developers to collaborate and track the history of changes.

17. **What is a microservice architecture?**

    **Answer:**
    Microservices are a way of developing software where the application is broken down into small, independently deployable services.

18. **What are web sockets?**

    **Answer:**
    Web sockets provide a way for real-time communication between the client and server using a persistent, bi-directional connection.

19. **What is the difference between a GET and a POST request?**

    **Answer:**
    
    - `GET`: Retrieves data from the server.
    - `POST`: Sends data to the server for processing.

20. **What is a database index?**

    **Answer:**
    A database index improves the speed of data retrieval operations on a table by creating a data structure that allows for faster searches.
