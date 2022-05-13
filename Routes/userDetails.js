const express = require("express");

const { createUser,
    updateUserByID,
    getUserById,
    getAllUser,
    deleteUserById } = require("../controller/userController");



const router = express.Router();

router.post("/createUser", createUser);
router.post("/updateUserByID", updateUserByID);
router.post("/getUserById", getUserById);
router.post("/getAllUser", getAllUser);
router.post("/deleteUserById", deleteUserById);



module.exports = router;