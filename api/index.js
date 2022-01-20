const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const cors = require('cors');

dotenv.config();
app.use(cors());
mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("DB connect successful"))
        .catch((err) => console.log(err))

app.get('/api/test', () => console.log("test is successful"));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.get('/', (req, res) => {
  res.send("Ecommerce API");
})

app.listen(process.env.PORT || 5000, () => {
    console.log("App is running!")
})