// const functions = require("firebase-functions");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(proces.env.SECRET_KEY);
//App config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello Wold")),
  app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    try {
      console.log("Payment Request Recieved for this amount >>>", total);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: parseInt(total),
        currency: "usd",
      });

      // ok - Created
      response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      console.log("Something went to wrong", error.message);
    }
  });
//listen connect
// (express.api = functions.https.onRequest(app));

app.listen(3003, () => {
  if (!error) console.log("web server listening on port 3003");
});
