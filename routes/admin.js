const router = require('express').Router();
const User = require('../models/User');
const Request = require('../models/Request');
const authenticateToken = require('../middleware/auth')
const nodemailer = require('nodemailer')

function sendEmail(){

    return new Promise((resolve, reject)=>{

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user:'nimthara.liyanage@gmail.com',
                pass:'sashini1003gmail'
            }
        })

        const mail_config = {
            from:'nimthara.liyanage@gmail.com',
            to:'e17190@eng.pdn.ac.lk',
            subject: 'OCRP Account is Ready to Use',
            text:'Your OCRP account is created. Please login to the application using your credentials'
        }

        transporter.sendMail(mail_config, function(error, info){
            if(error){
                return reject({message: 'error sending emails'})
            }

            return resolve({message: 'email sent successfuly'})
        })
    })

}
// get all requests
router.get('/requests', authenticateToken, async(req, res)=>{
    try{
        const requests = await Request.find()

        requests.forEach(value=>{
            value.password = undefined
        })

        return res.status(200).json(requests)


    }catch(err){
        return res.status(500).json({message: err})
    }
})


// delete requests
router.delete("/requests/:id", authenticateToken,async(req,res)=>{
    try{
        const request = await Request.findById(req.params.id)
        
        if(request){
            try{
                await Request.findByIdAndDelete(req.params.id)
                res.status(200).json({message: "Request has been deleted"});
                
            }catch(error){
                return res.status(500).json({message:"Request deletion failed"});
            }
            
        }else{
            return res.status(404).json({message:"Request not found"})
        } 
    }catch(error){
        return res.status(500).json({message: error})
    } 
})

// accept requests
router.post("/accept/:id", authenticateToken,async(req,res)=>{
    try{
        const request = await Request.findById(req.params.id)

        if(request){

            const regno = await User.findOne({reg_no: request.reg_no})
            if(regno){return res.status(401).json({message:'Reg No already in use'})}

            const user = await User.findOne({email: request.email})
            if(user){return res.status(401).json({message:'Email address already in use'})}

            const newUser = new User({
                username: request.username,
                email: request.email,
                password: request.password,
                admin: request.admin,
                reg_no: request.reg_no
            })

            try{
                const adduser = await newUser.save();
                const {password,...others} = adduser._doc;
                await Request.findByIdAndDelete(req.params.id)

                sendEmail().then(response=>{
                    others["message"] = "User registration successful!";
                    return res.status(200).json(others);
                }).catch(error =>{
                    others["message"] = "Error: Email notification Failed. User registration successful!";
                    return res.status(200).json(others);
                })
                
                
            }catch (error) {
                return res.status(500).json({message:"User registration failed"});
            }
            
        }else{
            return res.status(404).json({message:"Request not found"})
        } 
    }catch(error){
        return res.status(500).json({message: error})
    } 
})


module.exports = router;