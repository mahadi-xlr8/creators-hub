import Dropdown from "./dropdown";
const Deliverables = (props) => {
  const platform = [
    { name: "Youtube", img: "/images/creators/icons/youtube.png" },
    { name: "Facebook", img: "/images/creators/icons/facebook.png" },
    { name: "Instagram", img: "/images/creators/icons/instagram.svg" },
  ];
  const contentType = [
    { name: "Video" },
    { name: "Shorts" },
    { name: "Post" },
    { name: "Story" },
    { name: "Reel" },
  ];

  return (
    <>
      <h2 className="filter-title">Deliverables</h2>
      <Dropdown
        placeholder="Select Platform"
        values={platform}
        onChange={props.onDropdownChange}
        field="platform"
        selectedData={props.platform}
      />
      <Dropdown
        placeholder="Content Type"
        values={contentType}
        onChange={props.onDropdownChange}
        field="content"
        selectedData={props.content}

      />
      
    </>
  );
};

export default Deliverables;
