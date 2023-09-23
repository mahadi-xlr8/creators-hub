const jwt=require("jsonwebtoken")



module.exports=(data)=>{
    const jwtKey="sexy";
    return jwt.sign(data,jwtKey);
}