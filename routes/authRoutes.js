const express = require("express");

const router = express.Router();

const User = require("../models/User");

router.post("/Signup", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    res.json(user);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Signup failed",
    });

  }

});

module.exports = router;