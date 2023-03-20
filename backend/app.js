const express = require("express")
const app = express()
const errorMiddleWare = require("./middleware/error")
const cors = require("cors");
const dotenv = require("dotenv")

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
  };
   app.use(cors(corsOptions));


app.use(express.json())

dotenv.config({path:"backend/config/config.env"}) 

//Route Imports
const post = require("./routes/postRoute")
const user = require("./routes/userRoute")

app.use("/api/v1", post)
//app.use("/api/v1", user)

//Middlewarer for errors
app.use(errorMiddleWare)


module.exports = app