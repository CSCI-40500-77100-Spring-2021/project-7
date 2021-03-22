const router = require("express").Router();
const User = require("../models/user.model.js");

router.route("/").get((req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: ", err));
});

router.post("/register", (req, res) => {
  const { username, usdBalance } = req.body;

  User.findOne({ username: username }).then((user) => {
    if (user) {
      return res.status(400).json("Error: User exists!");
    } else {
      const newUser = new User({ username, usdBalance });

      newUser
        .save()
        .then(() => res.json(`${username} registered!`))
        .catch((err) => res.status(400).json("Error: " + err));
    }
  });
});

module.exports = router;
