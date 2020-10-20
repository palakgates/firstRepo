const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const {
  findUserById,
  getUser,
  updateUser,
  userPurchaseList,
} = require("../controllers/user");

router.param("userId", findUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

router.get(
  "/orders/user/:userId",
  isSignedIn,
  isAuthenticated,
  userPurchaseList
);

module.exports = router;
