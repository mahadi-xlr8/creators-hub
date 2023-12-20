import { useState, useEffect } from "react";

const Tags = (props) => {
  const [active, setActive] = useState(false);
  const [tagValue, setTagValue] = useState([
    "Blogger",
    "Fashion",
    "Model",
    "Food",
    "Travel",
    "Beauty",
    "Nature",
    "Singer",
    "Actor",
    "Actress",
    "Comedian", 
  ]);

  useEffect(() => {
    for (let i = 0; i < props.tags.length; i++) {
      for (let j = 0; j < tagValue.length; j++) {
        if (props.tags[i] === tagValue[j]) {
          tagValue.splice(j, 1);
          break;
        }
      }
    }
  }, []);

  function handleActive(event, img) {
    if (event.target.tagName === "DIV" || img) {
      setActive(!active);
    }
  }

  function handleTagSelect(value) {
    props.updateTag([...props.tags, value]);

    const index = tagValue.indexOf(value);
    tagValue.splice(index, 1);
  }
  function handleRemoveSelect(index, value) {
    let tag = props.tags;
    tag.splice(index, 1);
    props.updateTag(tag);
    setTagValue([...tagValue, value]);
  }
  return (
    <div className="tag-container">
      <div className="tag-box" onClick={handleActive}>
        <p className="text">
          {props.tags.length == 0
            ? "Select some tags"
            : props.tags?.map((e, index) => {
                return (
                  <span key={index}>
                    {e}
                    <sup>
                      <img
                        src="/images/icons/cancel.svg"
                        alt=""
                        onClick={() => {
                          handleRemoveSelect(index, e);
                        }}
                      />
                    </sup>
                  </span>
                );
              })}
        </p>
        <img
          src="/images/creators/icons/arrow-gray.svg"
          alt=""
          onClick={(e) => handleActive(e, true)}
        />
      </div>
      {tagValue.length > 0 && (
        <div className={"tags " + (active ? "active" : "")}>
          {tagValue.map((e) => (
            <p className="tag-value" onClick={() => handleTagSelect(e)}>
              {e}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tags;
