import { useEffect, useState } from "react";
import axios from "axios";

const CollaborationCardBack = (props) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`/brand/job/info?id=${props.collaborationInfo.jobId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <div onClick={props.onClick}>
      <div className="collaboration-card-back-container">
        <div className="productImg">
          <img
            src={props.collaborationInfo.productImg}
            alt=""
            style={{
              aspectRatio: "1/.9",
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.assign(
                `/brand/post/${props.collaborationInfo.jobId}`
              );
            }}
          />
        </div>
        <div className="productDetails">
          {product.title ? (
            <div className="product-info">
              <div>
                <p>Product Name</p>
                <p>{product.title}</p>
              </div>
              {product.paid && (
                <div>
                  <p>Paid</p>
                  <p>{product.benefit}</p>
                </div>
              )}
              <div>
                <p>Platforms</p>
                <p>{product.platform}</p>
              </div>
              <div>
                <p>Content</p>
                <p>{product.content}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CollaborationCardBack;
