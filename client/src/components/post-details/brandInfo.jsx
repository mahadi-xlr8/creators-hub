const BrandInfo = (props) => {
  return (
    <div className="brand-info-container">
      <h2 className="title">Brand Info</h2>
      <div className="container">
        <div className="top">
          <a href="https://google.com">
            <img src="/images/icons/google.svg" alt="" />
          </a>

          <div className="brand-detail">
            <a href="https://google.com">
              <p className="name">Google</p>
            </a>

            <p className="joining-date">Joined: 26 sep, 2003 </p>
          </div>
        </div>
        <p className="bottom">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
          eaque.
        </p>
      </div>
    </div>
  );
};

export default BrandInfo;
