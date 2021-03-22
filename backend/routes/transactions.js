const router = require("express").Router();
const Tx = require("../models/transaction.model");

router.route("/").get((req, res) => {
  Tx.find()
    .then((tx) => res.json(tx))
    .catch((err) => res.status(400).json("Error: ", err));
});

router.post("/newTx", (req, res) => {
  const tx = req.body;

  const newTx = new Tx({
    username: tx.username,
    price: tx.price,
    quantity: tx.quantity,
    usdAmount: tx.usdAmount,
    orderType: tx.orderType,
  });

  console.log("new tx:", tx);

  newTx
    .save()
    .then((newTx) => res.json(newTx))
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error: " + err);
    });
});

module.exports = router;
