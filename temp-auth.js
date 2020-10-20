var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "Name should be atleast 3character").isLength({ min: 3 }),
    check("email", "This is not a valid E-Mail id").isEmail(),
    check("password", "Password should be atleast 8 characters").isLength({
      min: 8,
    }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "Email doesn't exist, try to signup").isEmail(),
    check("password", "Your email and pssword doesn't match").isLength({
      min: 8,
    }),
  ],
  signin
);

router.get("/testroute", isSignedIn, (req, res) => {
  res.json(req.auth);
});

router.get("/signout", signout);

module.exports = router;
