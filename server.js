import {readdirSync} from "fs";
import express from "express";
import cors from "cors";
const morgan = require("morgan");
require("dotenv").config();
import  mongoose  from "mongoose";


// create express path
const app = express();
// connect dB Mongodb
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
   }).then(()=>{
    console.log("db connected successfully")
})
.catch(()=>{
    console.log("db connected error")
    process.exit(1);
    console.log("db connection error: " )
})

// apply middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// route we have map all the routes via fs system
readdirSync("./routes").map((r) =>
  app.use("./api", require(`./routes/${r}`))
);

// port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
