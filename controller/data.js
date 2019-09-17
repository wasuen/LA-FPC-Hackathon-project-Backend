const express = require('express')
const router  = express.Router()
const Data    = require('../models/data')

// add data
router.post('/add-data', async (req,res) =>{
    console.log(req.body)
    try{
        console.log(req.body)
        const addData = await Data.create(req.body);
        res.json({
            status:{
                "code": 200,
                "message": true
            },
            data: addData
        })
    } catch(err){
        console.log(err)
    }
})


//update data 

// router.put('/:id/update-data', async(req,res)=>{
//     try{

//     }catch(err){
//         res.send(err)
//     }
// })


// const foundUser = await User.findById(req.params.id)
//     if(!req.body.password === foundUser.password) {
//         const password = req.body.password;
//         const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
//         req.body.password = hashedPassword;
//     }
//     try{
//         const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
//         req.session.userId = updateUser._id;
//         req.session.username = updateUser.username;
//         req.session.logged = true;
//         res.json({
//             status:{
//                 "code": 200,
//                 "message": true
//             },
//             data: updateUser
//         })
//     }catch(err){
//         res.send(err)
//     }

//get data 
router.get('/:id/get-data', async (req,res)=>{
    try{
        const foundData = await Data.findById(req.params.id)
        res.json({
            data: foundData
        })
    }catch(err){
        console.log(err)
    }
})
module.exports = router;