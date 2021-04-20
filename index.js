const express = require('express');
require('./models/User')
require ('./services/passport');
const bodyParser =  require('body-parser');
const mongoose =require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
const { mongoURI } = require('./config/keys');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log('connected to mongoose')
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to monogo', err)
});

const app = express();
app.use(bodyParser.json());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoute')(app);
require('./routes/billingRoutes')(app);
const PORT = process.env.PORT || 5000
console.log(PORT);
app.listen(PORT)