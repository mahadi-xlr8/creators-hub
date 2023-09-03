import Star from "../stars";
const InnerTestimonial = (props) => {
  const e = props.data;
  let names = e.name.split(" ");
  let initials = "";
  names.map((name) => (initials += name[0]));

  return (
    <div class={props.desktop ? e.desktop : e.class}>
      <div class="testimonial-inner">
        <div class="upper">
          <div class="reviewer-info">
            <div class="avatar">
              <span class="initials">{initials}</span>
            </div>
            <div class="text">
              <p class="reviewer-name">{e.name}</p>
              <p class="date">{e.joined}</p>
            </div>
          </div>
          <div class="stars">
            <Star number={e.stars} />
          </div>
        </div>
        <p class="message">{e.message}</p>
        <img class="review-site-logo" src={e.platformImg} alt="" />
      </div>
    </div>
  );
};

export default InnerTestimonial;
