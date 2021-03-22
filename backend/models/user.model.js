const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AssetSchema = new Schema({
  name: String,
  quantity: Number,
});

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    usdBalance: { type: Number, required: true },

    assets: [AssetSchema],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
