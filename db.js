const mongoose=require('mongoose');

const mongourl="mongodb://127.0.0.1/fb_db";

mongoose.connect(mongourl).catch(err=>console.log(err));

const fbSch=new mongoose.Schema({name:String,fbId:String});
const fbModel=mongoose.model("Facebook",fbSch);

module.exports={
    fbModel
}