const express = require('express');
const path = require('path');
const app = express();
const {sequelize} = require('./models');
const restroRoute = require('./routes/restroRoute');

//body parser
app.use(express.json({extended: false}));
//restaurants route
app.use('/restaurants',restroRoute);


const PORT = process.env.PORT || 3000;

app.listen(PORT,async()=>{
    console.log(`Server up and running on PORT ${PORT}`)
    try{
        await sequelize.authenticate();
        console.log("DB connected")
    }
    catch(err){
        console.log(err);
    }

    
})