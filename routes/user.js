var express = require("express");
var router = express.Router();

router.get("/",(req,res)=>{
    res.render("user/home.ejs")
})

router.get("/aboutus",(req,res)=>{
    res.render("user/aboutus.ejs")
})

router.post("/save_appointment",(req,res)=>{
    res.send(req.body)
})
router.get("/doctors",(req,res)=>{
    res.render("user/doctors.ejs")
})

router.get("/services",(req,res)=>{
    res.render("user/services.ejs");
})

router.get("/contact",(req,res)=>{
    res.render("user/contact.ejs")
})

router.get("/blog",(req,res)=>{
    res.render("user/blogs.ejs")
})

router.get("/appointment",(req,res)=>{
    res.render("user/appointment.ejs");
})

module.exports = router ;