import Slider from "react-slick";
const PartnerSlider = (props) => {
    return ( <Slider {...props.settings} arrows={false} className="my-sliders">
    <div class="item">
      <img src="./images/logos/partners/blanka.png" alt="" />
    </div>
    <div class="item">
      <img src="./images/logos/partners/colgate.png" alt="" />
    </div>
    <div class="item">
      <img src="./images/logos/partners/veritree.png" alt="" />
    </div>
    <div class="item">
      <img src="./images/logos/partners/walmart.png" alt="" />
    </div>
    <div class="item">
      <img src="./images/logos/partners/later.png" alt="" />
    </div>
    <div class="item">
      <img src="./images/logos/partners/think.png" alt="" />
    </div>
    <div class="item">
      <img src="./images/logos/partners/hootsuite.png" alt="" />
    </div>
    <div class="item">
      <img src="./images/logos/partners/hex.png" alt="" />
    </div>
    <div class="item">
      <img src="./images/logos/partners/vista.png" alt="" />
    </div>
    <div class="item">
      <img src="./images/logos/partners/scentuals.png" alt="" />
    </div>
  </Slider>
   );
}
 
export default PartnerSlider;


