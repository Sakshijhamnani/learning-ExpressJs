const express=require('express')

const rootDir=require('../util/path')

const path=require('path')

const router=express.Router();
const productController=require('../controllers/product')

// /admin/add-product
router.get('/add-product',productController.getAddProducts);

   
// /admin/add-product
router.post('/add-product',productController.postAddProducts)

module.exports=router;
