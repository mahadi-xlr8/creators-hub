const CreatorNameBlock = (props) => {
  return (
    <section class="profile">
      <h1 class="profileName">{props.name}</h1>

      <div class="tags">
        {props.tags.map((e, index) => {
          return (
            <span key={index} class="tag">
              {e}
            </span>
          );
        })}
      </div>
      <p class="joining-date">Joined: Apr 9, 2023</p>
    </section>
  );
};

export default CreatorNameBlock;
