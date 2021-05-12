const router = require("express").Router(); //needed because we're creating a route
let Wallet = require("../models/wallet.model"); //mongoose model

// Returns all wallets
// http://localhost:5001/api/wallet/
router.route("/admin").get((req, res) => {
  Wallet.find() //mongoose method that gets all users from MongoDB Atlas DB; returns a promise
    .then((wallet) => res.status(200).json(wallet))
    .catch((err) => res.status(400).json("Error: " + err));
});

// 'http://localhost:5001/api/wallet/' - MongoDB ID
router.route("/").get((req, res) => {
  const walletID = req.body.id;
  Wallet.findById(walletID)
    .then((wallet) => {
      if (!wallet) {
        return res.status(400).json({ errorMsg: "Wallet not found!" });
      }
      res.status(200).json({ walletID, usdBalance: wallet.usdBalance });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// create wallet
// http://localhost:5001/api/wallet/create
router.route("/create").post((req, res) => {
  const { username } = req.body;

  //check if username already exists
  Wallet.findOne({ username: username })
    .then((wallet) => {
      if (wallet) {
        return res.status(400).json({ errorMsg: "Username already exists!" });
      } else {
        const newWallet = new Wallet({ username, usdBalance: 0 });

        newWallet
          .save()
          .then((wallet) =>
            res.status(200).json({ walletID, usdBalance: wallet.usdBalance })
          )
          .catch((err) => res.status(400).json("Error: " + err));
      }
    })
    .catch((err) => res.status(400).json(err));
});

// deposit money
// http://localhost:5001/api/wallet/deposit/
router.route("/deposit/").put((req, res) => {
  const walletID = req.body.id;
  const depositAmt = req.body.usdAmount;
  Wallet.findById(walletID)
    .then((wallet) => {
      if (!wallet) {
        return res.status(400).json({ errorMsg: "Wallet not found!" });
      }
      wallet.usdBalance += Number(depositAmt);
      wallet
        .save()
        .then((wallet) =>
          res.status(200).json({ id: wallet.id, usdBalance: wallet.usdBalance })
        )
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
});

// withdraw money
// http://localhost:5001/api/wallet/withdraw/
router.route("/withdraw/").put((req, res) => {
  const walletID = req.body.id;
  const depositAmt = req.body.usdAmount;
  Wallet.findById(walletID)
    .then((wallet) => {
      if (!wallet) {
        return res.status(400).json({ errorMsg: "Wallet not found!" });
      }
      wallet.usdBalance -= Number(depositAmt);
      wallet
        .save()
        .then((wallet) =>
          res.status(200).json({ walletID, usdBalance: wallet.usdBalance })
        )
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
});

// delete wallet
// http://localhost:5001/api/wallet/delete/
router.route("/delete/").delete((req, res) => {
  const walletID = req.body.id;

  Wallet.findById(walletID)
    .then((wallet) => {
      if (!wallet) {
        return res.status(400).json({ errorMsg: "Wallet not found!" });
      } else if (wallet.usdBalance != 0) {
        return res.status(400).json({ errorMsg: "Wallet not empty!" });
      }
      wallet.delete();
      res
        .status(200)
        .json({ message: `${walletid} successfully deleted`, wallet });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
