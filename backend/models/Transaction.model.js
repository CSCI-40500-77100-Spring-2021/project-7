const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    usdAmount: { type: Number, required: true },
    orderType: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Tx = mongoose.model("Transaction", TransactionSchema);

module.exports = Tx;
