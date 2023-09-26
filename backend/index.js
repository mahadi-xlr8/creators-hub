const express=require('express')
const app = express();
const login=require("./routes/logins/login")

if(!process.env.facebookAppSecret){
console.log("facebook app secret is not set!")
process.exit(1)
}

app.use(express.json())

app.use("/login",login)

const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`listening on port ${port}...`));
