var express = require("express")
var exe = require("./../connection.js")
var router = express.Router();

router.get("/",(req,res)=>{
    res.render("admin/dashbord.ejs")
})

router.get("/doctors",(req,res)=>{
    res.render("admin/doctors.ejs");
})

router.get("/add_specility",(req,res)=>{
    res.render("admin/add_specility.ejs");
})

router.get("/doctors_list",(req,res)=>{
    res.render("admin/doctors_list.ejs")
})

router.get("/department_list",(req,res)=>{
    res.render("admin/department_list.ejs");
})

router.post("/register_doctor",async(req,res)=>{
     var d= req.body;
      res.send(req.body) 
      var sql = ` insert into doctors(specility_id,doctor_name,email,mobile_no,address,gender,profile_img,opd_charge,experience,about,qualifications)value(?,?,?,?,?,?,?,?,?,?)` 
    //   var result = await exe(sql,[d.spe_id,d.name,d.email,d.mo_number,d.address,d.gender,d.photo,d.opd_fee,d.experience,d.about,d.qualifications]) 
})
router.post("/save_specility",async(req,res)=>{
    var d=req.body
   
     var sql = `insert into specility(specility_name,specility_icon,short_description,about_specility)value(?,?,?,?)`
     var result = await exe(sql,[d.spe_name,d.icon,d.short_description,d.about_specility])
     res.send(result)
 })

module.exports = router;