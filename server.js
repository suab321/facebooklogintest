const express=require('express');
const app=express();
require('./config');
const passport=require('passport');
const {router}=require('./route');



app.use(passport.initialize());
app.use(passport.session());
app.use('/facebook',router);
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.render('index.html');
})
app.get('/home',(req,res)=>{
    res.render('home.html')
})

app.listen(3002);