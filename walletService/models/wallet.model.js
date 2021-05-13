const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WalletSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true, //trims whitespace
      minlength: 3,
    },
    usdBalance: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Wallet = mongoose.model("Wallet", WalletSchema);

module.exports = Wallet;
