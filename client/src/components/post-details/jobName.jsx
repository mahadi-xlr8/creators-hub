const JobName = (props) => {
    return ( <section class="profile job-profile">
    <h1 class="profileName">{props.name}</h1>

    <p id="job-description">
      {props.description}
    </p>
    <p class="joining-date">Posted: {props.joined} </p>
  </section> );
}
 
export default JobName;