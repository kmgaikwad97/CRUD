const dbConnect = require('../mongodb')

const readdata = async(req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data)
};

module.exports = { readdata }