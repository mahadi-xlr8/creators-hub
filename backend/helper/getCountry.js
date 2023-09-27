module.exports= (data)=>{
    const country=data.split(",");
    let temp=country[country.length-1];
    let name='';
    for(let i=0;i<temp.length;i++){
        if(temp[i]!=' ')name+=temp[i];
    }
    return(name)
}