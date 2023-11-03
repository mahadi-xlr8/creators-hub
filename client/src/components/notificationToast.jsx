import toast from "react-hot-toast";
const NotificationToast = ( img, name,action ) => {
  let message;
  if (action == "intarest") {
    message = "shows intarest on your job.";
  } else if (action == "comment") {
    message = "commented on your post.";
  }

  return toast((t) => (
    <div className="toast-container">
      <b>{name}</b> {message}
      <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
    </div>
  ));
};

export default NotificationToast;
