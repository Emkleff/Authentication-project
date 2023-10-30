const router = require("express").Router();

const { register, login, loginBothEmailandUsername } = require("../Controllers/auth");

router.post("/signup", register);
router.post("/signin", login);
router.post('/create', loginBothEmailandUsername)
module.exports = router;
