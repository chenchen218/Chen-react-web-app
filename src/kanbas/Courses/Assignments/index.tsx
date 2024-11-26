import { useParams, Link, useNavigate } from "react-router-dom";
import AssignmentCheck from "./AssignmentCheckButton";
import AssignmentSearchBar from "./AssignmentSearch";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaBook, FaTrash } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment } from "./reducer";
import FacultyOnly from "../../Account/FacultyRounte";

import AssignmentsControlButton from "./AssignmentControlButton";

// Define Assignment type
interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  dueDate: string;
  points: number;
  availableFrom: string;
  untilDate: string;
}

// Define RootState type
interface RootState {
  assignmentsReducer: {
    assignments: Assignment[];
  };
}

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState<
    string | null
  >(null);

  // Use typed selector with debug logs
  const assignments = useSelector((state: RootState) => {
    console.log("Redux State:", state.assignmentsReducer); // Debug log
    return state.assignmentsReducer.assignments.filter(
      (assignment) => assignment.course === cid
    );
  });

  console.log("Filtered Assignments:", assignments); // Debug log

  // Add this debug log
  useEffect(() => {
    console.log("Current Redux State:", assignments);
  }, [assignments]);

  const handleDelete = (assignmentId: string) => {
    setSelectedAssignmentId(assignmentId);
    setShowConfirmDelete(true);
  };

  const confirmDelete = () => {
    if (selectedAssignmentId) {
      dispatch(deleteAssignment(selectedAssignmentId));
      setShowConfirmDelete(false);
      setSelectedAssignmentId(null);
    }
  };

  // Handler for adding new assignment (just for testing)
  const handleAddTest = () => {
    const newAssignment: Omit<Assignment, "_id"> = {
      title: "Test Assignment",
      course: cid!,
      description: "Test Description",
      dueDate: "2024-05-20",
      points: 100,
      availableFrom: "2024-05-01",
      untilDate: "2024-05-30",
    };

    console.log("Adding assignment with course ID:", cid);
    console.log("New assignment data:", newAssignment);
    dispatch(addAssignment(newAssignment));
  };

  return (
    <div id="wd-assignments" className="px-4">
      <AssignmentSearchBar />
      <FacultyOnly>
        <AssignmentsControlButton />
      </FacultyOnly>
      <br />
      <br />
      <br />
      <ul id="wd-assignments-titles" className="list-group rounded-0">
        <li className="wd-assignments-title list-group-item p-0 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-3 fs-3" />
              ASSIGNMENTS
            </div>
            <span className="float-end badge rounded-pill text-bg-primary">
              40% of Total
            </span>
          </div>

          <ul className="wd-assignment list-group rounded-0">
            {assignments && assignments.length > 0 ? (
              assignments.map((assignment) => (
                <li
                  key={assignment._id}
                  className="wd-assignment list-group-item p-4"
                  style={{
                    paddingLeft: "20px",
                    border: "1px solid #ddd",
                    borderLeft: "4px solid green",
                    marginBottom: "0",
                    borderTop: "none",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-3 fs-3" />
                      <FaBook className="me-3 text-success" />
                      <Link
                        className="wd-assignment-link fs-5"
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      >
                        {assignment.title}
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <AssignmentCheck />
                      <FacultyOnly>
                        <button
                          className="btn btn-link text-danger ms-2"
                          onClick={() => handleDelete(assignment._id)}
                        >
                          <FaTrash />
                        </button>
                      </FacultyOnly>
                    </div>
                  </div>
                  <div className="text-muted ms-5">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <strong>Not available until</strong>{" "}
                    {assignment.availableFrom} |
                    <br />
                    <strong>Due:</strong> {assignment.dueDate} at 11:59pm |{" "}
                    <strong>Points:</strong> {assignment.points} pts
                  </div>
                </li>
              ))
            ) : (
              <li className="list-group-item">
                No assignments available for this course
              </li>
            )}
          </ul>
        </li>
      </ul>

      {/* Delete Confirmation Modal */}
      {showConfirmDelete && (
        <div
          className="modal show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex={-1}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowConfirmDelete(false)}
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this assignment?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowConfirmDelete(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
