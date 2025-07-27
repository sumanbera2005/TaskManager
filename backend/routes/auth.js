const router = require("express").Router();
const authController = require('../controllers/authController');
const { ValidateRegister, ValidateLogin } = require("../middleware/validation");
const { authenticate } = require("../middleware/authMiddleware");

//Public API
router.post('/register',ValidateRegister,authController.register)
router.post("/login",ValidateLogin,authController.login)

//Private API
router.get("/verify",authenticate,(req,res)=>{
  res.json({
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
    },
  });
})
router.post("/logout",authenticate,(req,res)=>{
    res.json({message:"Logout Successful"});
})
module.exports = router;