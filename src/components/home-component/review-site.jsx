const ReviewSite = (props) => {
  return (
    <div class="review-sites-wrapper">
        {props.img.map(e=>{
            return <div class="review-site">
            <img class="icon" src={props.path+e.img} alt={e.name} />
            <div class="text">
              <p class="number">{e.ratting}</p>
            </div>
          </div>
        })}
    </div>
  );
};

export default ReviewSite;
