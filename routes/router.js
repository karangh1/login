const express=require('express')
const router=express.Router()
const user=require('../models/User')
const { body, validationResult } = require('express-validator');


router.get('/',(req,res)=>{
    res.render('index.ejs')
})

//get-login
router.get('/login',(req,res)=>{
    res.render('login.ejs')
})

//post-login
router.post('/login',body('email','Enter valid email').isEmail(),
body('password','minimn 5 caharcter required').isLength({min:5}),
(req,res)=>{
    res.render('login.ejs')
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    user.create({
        email: req.body.email,
        password: req.body.password,
      });
    
})

//get-register
router.get('/register',(req,res)=>{
    res.render('register.ejs')
})

//post-register
router.post('/register',body('email','Enter valid email').isEmail(),
body('password','minimn 5 caharcter required').isLength({min:5}),
async (req,res)=>{
    res.render('register.ejs')
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    user.create({
        email: req.body.email,
        password: req.body.password,
      });
})

module.exports=router