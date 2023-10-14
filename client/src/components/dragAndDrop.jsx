import { UploadDropzone } from "@bytescale/upload-widget-react";
const DragAndDropUpload = (props) => {
  const options = {
    apiKey: "public_12a1ydQBmVaKzboa7Ur4wbgosE8d",
    maxFileCount: props.maxFile?props.maxFile:1,
    styles: {
      colors: {
        primary: "#377dff",
      },
    },
    editor: {
      images: {
        crop: false,
        preview: true,
      },
    },
    path: {
      folderPath: `/uploads${props.path}`,
    },
  };
  return (
    <div className="drag-n-drop">
      <UploadDropzone
        options={options}
        onUpdate={({ uploadedFiles }) => {
          uploadedFiles.map(e=>{
            props.onUpload(e.fileUrl)
          })
        }}
        width="100%"
        height="375px"
      />
    </div>
  );
};

export default DragAndDropUpload;
