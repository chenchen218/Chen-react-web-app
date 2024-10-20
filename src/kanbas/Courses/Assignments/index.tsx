import React from "react";
import { useParams, Link } from "react-router-dom";
import AssignmentCheck from "./AssignmentCheckButton";
import AssignmentSearchBar from "./AssignmentSearch";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import * as db from "../../Database"; // Import the assignments data

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>(); // Get the course ID from the URL
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === cid
  ); // Filter assignments for the current course

  return (
    <div id="wd-assignments">
      <AssignmentSearchBar />f
      <button className="btn btn-lg btn-danger float-end">
        <FaPlus className="me-2" />
        Add Assignment
      </button>
      <br />
      <br />
      <br />
      <ul id="wd-assignments-titles" className="list-group rounded-0">
        <li className="wd-assignments-title list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <span className="float-end badge rounded-pill text-bg-primary">
              40% of Total
            </span>
            <BsGripVertical className="me-2 fs-3 float-end" />
          </div>

          <ul className="wd-assignment list-group rounded-0">
            {/* Dynamically render the assignments for the current course */}
            {assignments.length > 0 ? (
              assignments.map((assignment) => (
                <li
                  key={assignment._id}
                  className="wd-assignment list-group-item p-3 ps-1"
                >
                  <BsGripVertical className="me-2 fs-3" />
                  <Link
                    className="wd-assignment-link"
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                    {assignment.title} <AssignmentCheck />
                  </Link>
                  <span className="float-end">
                    <br />
                    {assignment.description || "No description available"}{" "}
                    <br />
                    <strong>Due:</strong> {assignment.dueDate || "TBD"} <br />
                    <strong>Points:</strong> {assignment.points || "N/A"} pts
                  </span>
                </li>
              ))
            ) : (
              <li>No assignments available for this course</li>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
}
