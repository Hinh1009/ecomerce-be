const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Pls enter product name"],
  },
  description: {
    type: String,
    required: [true, "Pls enter product description"],
  },
  price: {
    type: Number,
    required: [true, "Must have price"],
    maxLength: [8, "Price cannot exceed a 8 chars"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
        default:
          "https://www.seekpng.com/png/detail/334-3341822_no-product-available-product.png",
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Pls enter category"],
  },
  stock: {
    type: Number,
    required: [true, "Stock cannot exceed 4 chars"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
