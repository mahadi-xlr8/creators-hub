const CollaborationCard = (props) => {
  return (
    <div class="collaboration-container" onClick={props.onClick}>
      <section class="previoius-work-images">
        <div class="collaboration-images">
          <img
            src={props.collaborationInfo.brandImg}
            alt=""
            class="collaboration--brand-image"
          />
          <img
            src={props.collaborationInfo.creatorImg}
            alt=""
            class="collaboration--creator-image"
          />
        </div>
        <h2 class="collaboration--title">
          {props.collaborationInfo.brandName} &{" "}
          {props.collaborationInfo.creatorName}
        </h2>
      </section>
      <section class="previous-work-review">
        <p class="collaboration-rating">
          {props.collaborationInfo.star}
          <span> Rating</span>
        </p>
        <p class="brand-message">"{props.collaborationInfo.description}"</p>
        <p class="brand-name">{props.collaborationInfo.brandName}</p>
      </section>
    </div>
  );
};

export default CollaborationCard;
