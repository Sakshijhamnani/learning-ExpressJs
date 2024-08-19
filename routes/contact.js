const express=require('express')

const router=express.Router();
const rootDir=require('../util/path')

const contactController=require('../controllers/contact')

router.get('/contactus',contactController.getConatct)



module.exports=router;