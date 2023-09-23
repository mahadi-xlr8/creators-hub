const FileUpload = (props) => {
  return (
    <div className="file-container-baap">
      <p>{props.label + ":"}</p>
      <div
        className="file-container"
        onClick={() => {
          document.getElementById("file-img").click();
        }}
      >
        <input
          type="file"
          id="input"
          accept="image/*"
          id="file-img"
          onChange={(e) => {
            console.log(e.target.files[0]);
          }}
        />
      </div>
    </div>
  );
};

export default FileUpload;
