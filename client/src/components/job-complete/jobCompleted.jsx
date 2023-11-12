import { useAtom } from "jotai";
import { completeModal } from "../../globalState";
const JobCompleted = () => {
  const [modal, setModal] = useAtom(completeModal);
  return (
    <div
      className="navBar-btn login"
      onClick={() => {
        console.log("clicked!", modal);
        setModal(true);
      }}
      style={{ cursor: "pointer" }}
    >
      Job Completed
    </div>
  );
};

export default JobCompleted;
