// server.js
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const db = require('./config/db')
const admin = require("firebase-admin");
const firebase = require('./config/firebase')
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth')
const authRouter = require('./routes/Auth')

const serviceAccount = require('./pawfectmatch-serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//app.use(cors({ credentials: true, origin: "http://127.0.0.1:3000" }));
const corsOrigin = {
    origin: ['http://localhost:5173'], //or whatever port your frontend is using
    credentials: true,
}
app.use(cors(corsOrigin));


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000'); // Replace with your React app's origin
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });


app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
        sameSite: 'strict'
    }
}))


// CREATE ANOTHER  ROUTES HERE 
app.use('/api/v1/', authRouter)


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});





