import { useEffect, useState, useRef } from "react";
import Comment from "./comment";
import AddComment from "./addComment";
import toast from "react-hot-toast";
import { commentSocket, socket } from "../../socket";
import axios from "axios";
const CommentBox = ({ userData, jobId, brandId }) => {
  const commentBoxRef = useRef(null);
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
      isBrand: userData.role === "brand",
    });
    socket.emit("notification", {
      brand: brandId,
      time: new Date().toLocaleString("en-US"),
      clickLink: "/brand/post/" + jobId,
      jobId: jobId,
      profileImg: userData.profileImg,
      message: "is commented on your job post.",
    });
  };

  const scrollBottom = () => {
    commentBoxRef.current.scrollTop = commentBoxRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollBottom();
  }, [comments]);

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
      <div className="comment-box" ref={commentBoxRef}>
        {comments.map((comment) => (
          <Comment
            time={comment.time}
            senderImg={comment.senderImg}
            senderProfile={comment.senderProfile}
            comment={comment.comment}
            senderName={comment.senderName}
            isBrand={comment.isBrand}
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
