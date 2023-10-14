const BrandInfo = ({brand}) => {
  return (
    <div className="brand-info-container">
      <h2 className="title">Brand Info</h2>
      <div className="container">
        <div className="top">
          <a href="https://google.com">
            <img src={brand.profileImg} alt="" style={{borderRadius:'100%'}}/>
          </a>

          <div className="brand-detail">
            <a href={brand.contactLink}>
              <p className="name">{brand.name}</p>
            </a>

            <p className="joining-date">Joined: {brand.joined} </p>
          </div>
        </div>
        <p className="bottom">
          {brand.description}
        </p>
      </div>
    </div>
  );
};

export default BrandInfo;
