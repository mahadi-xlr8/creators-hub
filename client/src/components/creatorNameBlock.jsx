const CreatorNameBlock = (props) => {
  return (
    <section class="profile">
      <h1 class="profileName">{props.name}</h1>

      <div class="tags">
        {props.tags?props.tags.map((e, index) => {
          return (
            <span key={index} class="tag">
              {e}
            </span>
          );
        }):null}
      </div>
      <p class="joining-date">Joined: {props.joined} </p>
    </section>
  );
};

export default CreatorNameBlock;
