const dbConnect = require('../mongodb')

const createdata = async(req,res)=>{
    let data = await dbConnect();
    let result = await data.insert(req.body)

    res.json({
        message:result
    })

};

module.exports = { createdata }