const express=require('express')

const router=express.Router();

// /admin/add-product
router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST" ><input placeholder="Title" type="text" name="title"><input placeholder="Size" type="number" name="size"><button type="submit">Add Product</button></form>')
   });

   
// /admin/add-product
router.post('/add-product',(req,res,next)=>{
     console.log(req.body)
     res.redirect('/') 
  })

module.exports=router;
