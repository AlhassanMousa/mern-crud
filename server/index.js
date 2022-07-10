import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 5000;




//Http request logger
app.use(bodyParser.json());
app.use(cors());
app.use("/",userRoutes);


if ( PORT === 'production') {
   app.use(express.static('client/build'));
}


app.get("/",(req,res) => res.send("Hello from express"));
app.all("*",(req,res) => res.send("that route doesnt exist"))

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))