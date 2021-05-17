require('dotenv').config();
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();

const mongoose  = require('mongoose');

const port = process.env.PORT || 4000;


app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection established successfully");
})
connection.on('err', console.error.bind(console, "Connection Error: "))


const userRoute = require('./routes/user-routes');
const rentalRoute = require('./routes/rental-routes');

const PORT = 4000;

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
  }));
app.use(bodyParser.json())
app.set('trust proxy', 1)

app.use(session({
    store: MongoStore.create({ mongoUrl: process.env.ATLAS_URI}),
    secret: process.env.SESSION_SECRET,
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { 
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
        expires: new Date(Date.now() + (1000 * 60 * 60 * 24)),
        genid: (req) => genuuid(),
    }
}));

 
app.use('/api', userRoute);
app.use('/api', rentalRoute);
 
app.listen(PORT, () => {
    console.log("Server running on port 4000")
})