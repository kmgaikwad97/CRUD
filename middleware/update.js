const dbConnect = require('../mongodb')

const updatedata = async(req,res)=>{
    let data = await dbConnect();
    let result = data.updateOne(
        {name:req.body.name},
        {$set:req.body}
    )

    res.send("Result Updated Successfully")
};

module.exports = { updatedata }