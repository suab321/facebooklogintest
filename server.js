const express=require('express')
const app=express();
const {router}=require("./route.js");
const passport=require('passport');
require('./config.js')

app.use(passport.initialize());
app.use('/facebook',router);
app.use(express.static('public'));
app.get('/',(req,res)=>res.render('index.html'));
app.listen(process.env.PORT||3002);
