const Star = (props) => {
  let component = [];
  for (let i = 0; i < props.number; i++) {
    component.push(
      <img class="icon" src="./images/all/icons/star.svg" alt="" />
    );
  }
  return component;
};

export default Star;
