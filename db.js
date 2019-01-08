const mongoose=require('mongoose');


const mongourl="mongodb://abhi980:abhi0796@ds251804.mlab.com:51804/facebookdb";

mongoose.connect(mongourl).catch(err=>console.log(err));

const fbSch=new mongoose.Schema({name:String,fbId:String});
const fbModel=mongoose.model("Facebook",fbSch);

module.exports={
    fbModel
}