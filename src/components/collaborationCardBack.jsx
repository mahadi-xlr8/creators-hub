import Slider from "react-slick";

const CollaborationCardBack = (props) => {

  return (
    <div onClick={props.onClick} >
      <div className="collaboration-card-back-container">
        <div className="productImg">
          <img src={props.collaborationInfo.productImg} alt="" />
        </div>
        <div className="productDetails">
            <div className="product-info">
                <div>
                    <p>Product Name</p>
                    <p>{props.collaborationInfo.productName}</p>
                </div>
                <div>
                    <p>Total Reach</p>
                    <p>{props.collaborationInfo.reach}</p>
                </div>
                <div>
                    <p>Paid</p>
                    <p>{props.collaborationInfo.paid}</p>
                </div>
                <div>
                    <p>Platforms</p>
                    <p>{props.collaborationInfo.platforms.map((data)=><p className='platforms--name'>{data}</p>)}</p>
                </div>
            </div>
            <div className="product-link">
              <h3>Post Links</h3>
              <div className='platform-logos'>
                
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationCardBack;
