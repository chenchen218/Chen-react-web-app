import { FaPlus } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";

export default function AssignmentsControlButton() {
  const navigate = useNavigate();
  const { cid } = useParams();

  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <button
        id="wd-add-assignments-btn"
        className="btn btn-lg btn-danger me-1 float-end"
        onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>

      <button
        id="wd-add-assignments-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
    </div>
  );
}
