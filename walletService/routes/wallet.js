const router = require("express").Router(); //needed because we're creating a route
let Wallet = require("../models/wallet.model"); //mongoose model

// Returns all wallets
// http://localhost:5001/api/wallet/
router.route("/").get((req, res) => {
  Wallet.find() //mongoose method that gets all users from MongoDB Atlas DB; returns a promise
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// 'http://localhost:5001/api/wallet/:id' - MongoDB ID
router.route("/:id").get((req, res) => {
  Wallet.findById(req.params.id)
    .then((wallet) => res.status(200).json(wallet))
    .catch((err) => res.status(400).json("Error: " + err));
});

// create wallet
// http://localhost:5001/api/wallet/create
router.route("/create").post((req, res) => {
  const { username } = req.body;

  //check if username already exists
  Wallet.findOne({ username: username })
    .then((user) => {
      if (user) {
        return res.status(400).json("Error: Username already exists!");
      } else {
        const newWallet = new Wallet({ username, usdBalance: 0 });

        newWallet
          .save()
          .then(() => res.status(200).json(`${username} wallet created!`))
          .catch((err) => res.status(400).json("Error: " + err));
      }
    })
    .catch((err) => console.log(err));
});

// deposit money
// http://localhost:5001/api/wallet/deposit/:id
router.route("/deposit/:id").put((req, res) => {
  const walletID = req.body.id;
  const depositAmt = req.body.usdAmount;
  Wallet.findById(walletID, (err, wallet) => {
    if (!wallet) {
      return res.status(400).json("Wallet not found!");
    }
    wallet.usdBalance += Number(depositAmt);
    wallet
      .save()
      .then((user) => res.json({ walletID, usdBalance: wallet.usdBalance }))
      .catch((err) => console.log(err));
  });
});

// withdraw money
// http://localhost:5001/api/wallet/withdraw/:id
router.route("/withdraw/:id").put((req, res) => {
  const walletID = req.body.id;
  const withdrawAmt = req.body.usdAmount;
  Wallet.findById(walletID, (err, wallet) => {
    wallet.usdBalance -= Number(withdrawAmt);
    wallet
      .save()
      .then((user) => res.json({ usdBalance: wallet.usdBalance }))
      .catch((err) => console.log(err));
  });
});

// delete wallet
// http://localhost:5001/api/wallet/delete/:id
router.route("/delete/:id").delete((req, res) => {
  const walletID = req.body.id;

  Wallet.findByIdAndDelete(walletID)
    .then((wallet) => {
      if (!wallet) {
        return res.status(400).json("Wallet not found!");
      } else if (wallet.usdBalance != 0) {
        return res.status(400).json("Wallet not empty!");
      }
      return res.status(200).json(`${wallet.username} wallet deleted!`);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
