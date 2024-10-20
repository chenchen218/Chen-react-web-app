import React from "react";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database"; // Import the assignments data

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>(); // Get the course and assignment IDs from the URL
  const assignment = db.assignments.find(
    (assignment) => assignment._id === aid
  ); // Find the specific assignment by ID

  if (!assignment) {
    return <div>Assignment not found</div>; // Handle case when assignment is not found
  }

  return (
    <div id="wd-assignments-editor" className="p-4">
      <div className="card">
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="wd-name" className="form-label">
              Assignment Name
            </label>
            <input
              id="wd-name"
              value={assignment.title}
              className="form-control"
              readOnly
            />
          </div>

          <div className="mb-3">
            <label htmlFor="wd-description" className="form-label">
              Assignment Description
            </label>
            <textarea
              id="wd-description"
              cols={45}
              rows={10}
              className="form-control"
              defaultValue={assignment.description}
            />
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="wd-points" className="form-label">
                Points
              </label>
              <input
                id="wd-points"
                value={assignment.points}
                className="form-control"
                readOnly
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="wd-group" className="form-label">
                Assignment Group
              </label>
              <select id="wd-select-group" className="form-select">
                <option selected value="ASSIGNMENTS">
                  ASSIGNMENTS
                </option>
                <option value="TESTS">TESTS</option>
                <option value="PROJECTS">PROJECTS</option>
                <option value="LABS">LABS</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="wd-grade-display" className="form-label">
                Display Grade as
              </label>
              <select id="wd-select-grade" className="form-select">
                <option selected value="PERCENTAGE">
                  Percentage
                </option>
                <option value="LETTER">Letter</option>
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="wd-submission-type" className="form-label">
                Submission Type
              </label>
              <select id="wd-select-submission" className="form-select">
                <option selected value="Online">
                  ONLINE
                </option>
                <option value="INPERSON">IN-PERSON</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Online Entry Options</label>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-text-entry"
              />
              <label htmlFor="wd-text-entry" className="form-check-label">
                Text Entry
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-website-url"
              />
              <label htmlFor="wd-website-url" className="form-check-label">
                Website URL
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-media-recording"
              />
              <label htmlFor="wd-media-recording" className="form-check-label">
                Media Recordings
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-student-annotation"
              />
              <label
                htmlFor="wd-student-annotation"
                className="form-check-label"
              >
                Student Annotation
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-file-uploads"
              />
              <label htmlFor="wd-file-uploads" className="form-check-label">
                File Uploads
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Assign to</label>
            <input
              id="wd-assign"
              value="Everyone"
              className="form-control"
              readOnly
            />
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="wd-due" className="form-label">
                Due
              </label>
              <input
                type="date"
                id="wd-due"
                value={assignment.dueDate}
                className="form-control"
                readOnly
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="wd-available" className="form-label">
                Available from
              </label>
              <input
                type="date"
                id="wd-available"
                value={assignment.availableFrom}
                className="form-control"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="wd-until" className="form-label">
                Until
              </label>
              <input
                type="date"
                id="wd-until"
                value={assignment.untilDate}
                className="form-control"
              />
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <Link
              to={`/Kanbas/Courses/${cid}/Assignments`}
              className="btn btn-secondary me-2"
            >
              Cancel
            </Link>
            <button className="btn btn-danger">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
