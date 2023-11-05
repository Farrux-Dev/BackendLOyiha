const {Router} = require("express")
const router = Router()
const user = require("../model/user")
const {v4} = require("uuid")

    
router.post("/", (req, res)=>{
     const {name, lastname, username , email , password} = req.body
    const db = new user({
      id:v4(),
      name,
      lastname,
      username,
      email,
      password,

    })

    db.save()
    .then((data)=>{
        res.redirect("http://localhost:5173/admin")
    })
    .catch((err)=>{
        console.log("xatolik" ,err);

    })
})

router.get("/alldata", (req, res)=>{
    user.find({})
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports = router