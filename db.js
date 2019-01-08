const mongoose=require('mongoose');
mongoose.Promise=global.Promise;

const mongourl="mongodb://abhi980:abhi0796@ds251804.mlab.com:51804/facebookdb"
mongoose.connect(mongourl).catch(err=>console.log(err));

const fb_sc=new mongoose.Schema({name:String,fbId:String});
const model=mongoose.model("facebook",fb_sc);

module.exports={
    db:model
}