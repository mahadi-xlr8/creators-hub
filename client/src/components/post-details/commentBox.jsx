import { useEffect, useState } from "react";
import Comment from "./comment";
import AddComment from "./addComment";
import toast from "react-hot-toast";
import { commentSocket } from "../../socket";
import axios from "axios";
const CommentBox = ({ userData, jobId }) => {
  const [comments, setComments] = useState([]);
  const handleSend = (value) => {
    if (!userData.login) {
      return toast.error("Please login first!");
    }
    if (value.length == 0) {
      return;
    }
    commentSocket.emit("comment", {
      comment: value,
      jobId,
      senderName: userData.name,
      senderImg: userData.profileImg,
      senderId: userData.id,
      time: new Date().toLocaleString("en-US"),
    });
    // socket.emit("notification", {
    //   brand: data.brandId,
    //   time: new Date().toLocaleString("en-US"),
    //   clickLink: "/brand/post/" + data._id.toString(),
    //   jobId: data._id,
    //   profileImg: loginData.profileImg,
    //   message: "is interested on your job post."
    // });
  };
  useEffect(() => {
    axios
      .get(`/get-comment?jobId=${jobId}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err.message));

    commentSocket.on("newComment", (comment) => {
      if (comment.jobId == jobId) {
        setComments((prev) => [...prev, comment]);
      }
    });
  }, []);

  return (
    <div className="comment-container">
      <div className="comment-box">
        {comments.map((comment) => (
          <Comment
            time={comment.time}
            senderImg={comment.senderImg}
            senderProfile={comment.senderProfile}
            comment={comment.comment}
            senderName={comment.senderName}
          />
        ))}
      </div>
      <div className="add-comment">
        <AddComment onSend={handleSend} />
      </div>
    </div>
  );
};

export default CommentBox;
