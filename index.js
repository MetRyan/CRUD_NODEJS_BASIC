const express = require("express");
const app = express();
const Product = require("./models/product.model.js");
const mongoose = require("mongoose");
app.use(express.urlencoded({extended: false}));
const ProductRoutes = require("./routes/product.route.js")

app.use(express.json());

//routes
app.use("/api/products", ProductRoutes)

app.get("/", (req, res) => {
  res.send("Hello from node API");
});
app.post("/api/products", async (req, res) => {

});

mongoose
  .connect(
    "mongodb+srv://nhatquangforcv:NPbodXRKf0vXyLYy@backendb.xrsjv.mongodb.net/?retryWrites=true&w=majority&appName=BackenDB"
  )
  .then(() => {
    console.log("Connect successful");
    app.listen(3000, () => {
      console.log(" Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connect fail");
  });
