import Slider from "react-slick";
const PartnerSlider = (props) => {
    return ( <Slider {...props.settings} arrows={false} className="my-sliders">
      {props.imgName.map(e=>{
        return <div class="item">
        <img src={props.path+e} alt="" />
      </div>
      })}
  </Slider>
   );
}
 
export default PartnerSlider;


