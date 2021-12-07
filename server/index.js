const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hello World');
});

const userRoute = require("./routes/User");
app.use("/user", userRoute);

const userdetailsRoutes = require("./routes/userdetails.route");
app.use("/userdetails", userdetailsRoutes);


app.listen(3001, (req, res) =>{
    console.log("Server Running...");

});