const passport=require('passport')
const facebook=require('passport-facebook');
const {db}=require('./db.js');


passport.serializeUser((user,done)=>{
    db.findById({_id:user._id}).then(user=>{done(null,user)}).catch(err=>console.log("serialization"+err));    
})

passport.deserializeUser((user,done)=>{
    db.findById({_id:user._id}).then(user=>{done(null,user.id)}).catch(err=>console.log("deserialize"+err))
})

passport.use(new facebook({
    clientID:"277730989578443",
    clientSecret:"4b4ec9455f008c11aa8927578de50256",
    callbackURL:"https://evening-falls-93839.herokuapp.com/facebook/success"
},(accessToken,refreshToken,profile,done)=>{
    db.findOne({fbId:profile.id}).then(user=>{
        console.log(profile);
        if(user){
            done(null,user)
            console.log("database"+user);
        }
        else{
            const newuser=new db;
            newuser.fbId=profile.id
            newuser.name=profile.displayName
            newuser.save().then(user=>{
                done(null,user);
                console.log("new"+user)
            }).catch(err=>console.log(err));
        }
    })
}))