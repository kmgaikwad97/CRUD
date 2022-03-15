const dbConnect = require('../mongodb')
const mongodb = require('mongodb');

const deletedata = async(req,res)=>{

    let data = await dbConnect();
    result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send("Deleted Successfully")
};

module.exports = { deletedata }