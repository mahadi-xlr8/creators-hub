module.exports=()=>{
    const currentDate = new Date();

const options = { year: 'numeric', month: 'short', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

return formattedDate;

}