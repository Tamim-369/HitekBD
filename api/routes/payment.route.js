import Stripe from "stripe";
import express from "express";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/createCheckOutSession", async (req, res) => {
  const { products } = req.body;

  // Ensure products is an array and properly structured
  if (!Array.isArray(products) || products.length === 0) {
    return res.status(400).send({ error: "No products found" });
  }

  // Prepare line items for checkout
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.name,
      },
      unit_amount: product.price * 100, // Amount in cents
    },
    quantity: product.quantity || 1, // Default to 1 if quantity is not provided
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

export default router;
