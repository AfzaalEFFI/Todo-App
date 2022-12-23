import express from "express";
import addUser from "../controls/Adduser.js";
import loginUser from "../controls/loginUser.js";
// import list from "../model/list.js";
import listdata from "../controls/addList.js";
import getdata from "../controls/getdata.js";
import userdata from "../controls/userdata.js";
import Useremail from "../controls/useremail.js";
import removeitem from "../controls/removeitem.js";

const router = express.Router();

router.post("/adduser", addUser);
router.post("/login", loginUser);
router.post("/adddata", listdata);
router.get("/list", getdata);
router.post("/userdata", userdata);
router.get("/useremail", Useremail);
router.post("/removelist", removeitem);
export default router;
