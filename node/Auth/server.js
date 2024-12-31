const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(session({
  secret: 'your-secret-key',  // Session secret
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }   // Set `secure: true` for HTTPS
}));

// Mock database with hashed password
let usersDB = [
  { username: "tej07", password: bcrypt.hashSync("theTej07", 10) },
  { username: "neha07", password: bcrypt.hashSync("nehaV07", 10) },
  // Hash password here
];

// Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = usersDB.find(u => u.username === username);

  if (user && bcrypt.compareSync(password, user.password)) {
    req.session.user = { username: user.username }; // Save user in session
    return res.status(200).send('Login successful');
  } else {
    return res.status(401).send('Invalid credentials');
  }
});

// Protected Route (Authorization)
app.get('/protected', (req, res) => {
  if (req.session.user) {
    res.status(200).send('Welcome to the protected route');
  } else {
    res.status(401).send('Unauthorized');
  }
});

// Logout Route
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Error in logging out');
    }
    res.status(200).send('Logged out successfully');
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
