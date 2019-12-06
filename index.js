const express= require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({extended: false}));

require('./routes/orders.routes')(app);
require('./routes/products.routes')(app);



async function init() {
    await app.listen(process.env.PORT || 3000);
    console.log('server on port 3000');

    app.get('/', (req, res) => {
        res.json({"message": "Welcome to Tlacuali application. Take orders quickly. Organize and keep track of all your orders."});
    });

    
}

init()

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});