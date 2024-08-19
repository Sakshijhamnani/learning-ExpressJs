const path=require('path')

const rootDirectory=require('../util/path')

contactDetails=[];

exports.getConatct=(req,res,next)=>{
    res.sendFile(path.join(rootDirectory,'views','contact.html'))
}

exports.postContact=(req,res,next)=>{
    contactDetails.push({
        name:req.body.name, email:req.body.email
    })
    console.log(contactDetails)
    res.sendFile(path.join(rootDirectory,'views','success.html'))
}