import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAssignment } from "./reducer";
import FacultyOnly from "../../Account/FacultyRounte";

export default function AssignmentbuttoEditor() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    points: "100",
    dueDate: "",
    availableFrom: "",
    untilDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newAssignment = {
      ...formData,
      course: cid || "",
      points: parseInt(formData.points),
    };

    console.log("Dispatching new assignment:", newAssignment);
    dispatch(addAssignment(newAssignment));

    // Reset form
    setFormData({
      title: "",
      description: "",
      points: "100",
      dueDate: "",
      availableFrom: "",
      untilDate: "",
    });

    // Navigate back to assignments list
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div
      className="modal fade"
      id="assignmentEditorModal"
      tabIndex={-1}
      aria-labelledby="assignmentEditorModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="assignmentEditorModalLabel">
              Add Assignment
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Assignment Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="points" className="form-label">
                  Points
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="points"
                  name="points"
                  value={formData.points}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="dueDate" className="form-label">
                  Due Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dueDate"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="availableFrom" className="form-label">
                  Available From
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="availableFrom"
                  name="availableFrom"
                  value={formData.availableFrom}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="untilDate" className="form-label">
                  Until Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="untilDate"
                  name="untilDate"
                  value={formData.untilDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Add Assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
