const catchAsyncError = require("../middleware/catchAsyncError");

const stripe = require("stripe")(
  "sk_test_51Kw8flKbVcPnJGgMfEUgZ4s2euw6Kkfz22uW4sC39dTd2NIcQ6yVQVJgAMslF8v3k2HsnOEeqAVEcHDh4dDLh1OO00uPLJDivQ"
);

exports.processPayment = catchAsyncError(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncError(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
