const CollaborationCard = (props) => {
  return (
    <div class="collaboration-container" onClick={props.onClick}>
      <section class="previoius-work-images">
        <div class="collaboration-images">
          <img
            src={props.brandInfo.logo}
            alt=""
            class="collaboration--brand-image"
          />
          <img
            src={"/" + props.creatorInfo.profileImg}
            alt=""
            class="collaboration--creator-image"
          />
        </div>
        <h2 class="collaboration--title">
          {props.brandInfo.name} & {props.creatorInfo.name}
        </h2>
      </section>
      <section class="previous-work-review">
        <p class="collaboration-rating">
          {props.collaborationInfo.rating}
          <span> Rating</span>
        </p>
        <p class="brand-message">"{props.collaborationInfo.brandMessage}"</p>
        <p class="brand-name">{props.brandInfo.name}</p>
      </section>
    </div>
  );
};

export default CollaborationCard;
