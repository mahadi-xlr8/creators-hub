import { Link } from "react-router-dom";
const BackButton = () => {
  return (
<Link to='/creators'>
    <div class="header">
      <button class="back-btn null" type="link">
        <span
          role="img"
          aria-label="caret-left"
          class="anticon anticon-caret-left"
        >
          <svg
            viewBox="0 0 1024 1024"
            focusable="false"
            data-icon="caret-left"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z"></path>
          </svg>
        </span>
        Back
      </button>
    </div>
    </Link>
  );
};

export default BackButton;
