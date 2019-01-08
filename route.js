const router=require('express').Router();
const passport=require('passport');


router.get('/login',passport.authenticate('facebook',{scope:['public_profile','user_friends','user_gender']}));

router.get('/success',passport.authenticate('facebook',{failureRedirect:'/',successRedirect:'https://evening-falls-93839.herokuapp.com/home.html'}));

module.exports={
    router
}