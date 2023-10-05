const express=require('express')
const app = express();
const brand=require("./routes/brand/brand")
const isLogin=require("./routes/isLogin")
const creator=require("./routes/creator/creator")
if(!process.env.facebookAppSecret){
console.log("facebook app secret is not set!")
process.exit(1)
}

app.use(express.json())
app.use("/brand",brand)
app.use("/creator",creator)
app.use("/isLogin",isLogin)

const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`listening on port ${port}...`));
