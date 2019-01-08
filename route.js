const router=require('express').Router();
const passport=require('passport');


router.get('/login',passport.authenticate('facebook',{scope:['public_profile']}));

router.get('/success',passport.authenticate('facebook',{failureRedirect:'/',successRedirect:'http://localhost:3002/home.html'}));

module.exports={
    router
}