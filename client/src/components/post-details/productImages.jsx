import { useState } from "react";
const ProductImages = (props) => {
  const [currentImg, changeImg] = useState(0);
  console.log(props.images)
  return (
    <>
      <section className="image-galary">
        <div class="front">
          <img src={props.images[currentImg]} alt="" class="front-image" />

          <div class="np-buttons">
            <span
              class="next-button"
              onClick={() => {
                let temp = currentImg - 1;
                if (temp < 0) temp = props.images.length - 1;
                changeImg(temp);
              }}
            >
              &lt;
            </span>
            <span
              class="prev-button"
              onClick={() => {
                let temp = currentImg + 1;
                changeImg(temp % props.images.length);
              }}
            >
              &gt;
            </span>
          </div>
        </div>
        <div className="down-image">
          {props.images.map((e) => (
            <img
              src={e}
              onClick={() => {
                changeImg(props.images.indexOf(e));
              }}
              className={
                props.images.indexOf(e) === currentImg
                  ? "currentImg"
                  : "otherImg"
              }
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductImages;
