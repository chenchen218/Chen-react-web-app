import AssignmentsControlButton from "./AssignmentControlButton";
import AssignmentCheck from "./AssignmentCheckButton";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <AssignmentsControlButton />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-assignments-titles" className="list-group rounded-0">
        <li className="wd-assignments-title list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            {" "}
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <span className="float-end badge rounded-pill text-bg-primary">
              40% of Total
            </span>
            {/* <div
              className="float-end wd-rounded-corners-all-around 
           wd-border-light wd-border-solid wd-padding-skinny
            "
            >
              40% of Total
            </div> */}
            <BsGripVertical className="me-2 fs-3 float-end" />
          </div>

          <ul className="wd-assignment list-group rounded-0">
            <li className="wd-assignment list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123 "
              >
                A1 <AssignmentCheck />
              </a>
              <span className="float-end">
                <br />
                Multiple Modules | <strong>Not available until</strong> May 6 at
                12:00am |<br />
                <strong>Due</strong> May 3 at 11:59pm | 100 pts
                <br />
              </span>
            </li>
            <li className="wd-assignment list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3 float-start" />
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                A2 <AssignmentCheck />
              </a>
              <span className="float-end">
                <br />
                Multiple Modules | <strong>Not available until</strong> May 13
                at 12:00am |<br />
                <strong>Due</strong> May 20 at 11:59pm | 100 pts
                <br />
              </span>
            </li>

            <li className="wd-assignment list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                A3 <AssignmentCheck />
              </a>
              <span className="float-end">
                <br />
                Multiple Modules | <strong>Not available until</strong> May 20
                at 12:00am |<br />
                <strong>Due</strong> May 27 at 11:59pm | 100 pts
                <br />
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
