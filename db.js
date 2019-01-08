const mongoose=require('mongoose');

const mongourl="mongodb://abhi:Suar@123@ds159782.mlab.com:59782/fb_db";

mongoose.connect(mongourl).catch(err=>console.log(err));

const fbSch=new mongoose.Schema({name:String,fbId:String});
const fbModel=mongoose.model("Facebook",fbSch);

module.exports={
    fbModel
}