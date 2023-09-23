const date=new Date()

module.exports=(data)=>{
    let age=data.split("/");
    let totalDay=Number(age[0])*30+Number(age[1])+Number(age[2])*365;
    let nowDay=date.getDate()+(date.getMonth()+1)*30+date.getFullYear()*365;

    let ans=(nowDay-totalDay)/365
    return Math.floor(ans)

}