import LessonControlButtons from "../../LessonControlButton";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      {/* Lab1 dropdown horizontal buttons */}
      {/* <div>
        <br />
        <button>Collapse All</button>
        <button>View Progress</button>
        <select id="wd-select-one-option">
          <option selected value="PUBLISH_ALL">
            Publish All
          </option>
          <option value="ASSIGNMENTS">Assignments</option>
          <option value="PROJECTS">Projects</option>
          <option value="QUIZZES">Quizzes</option>
          <option value="EXAMS">Exams</option>
        </select>
        <button>+ Module</button>
        <br />
      </div> */}
      {/* Implement Collapse All button, View Progress button, etc. */}
      <br />
      <br />

      <div>
        <ul className="mt-2 list-group rounded-0">
          <li
            className="wd-module list-group-item p-0
                   mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              Week 1
              <LessonControlButtons />
            </div>

            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                LESSON 1 <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                LESSON 2 <LessonControlButtons />
              </li>
            </ul>
          </li>
          <li
            className="wd-module list-group-item p-0
                 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              Week 2 <LessonControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                LEARNING OBJECTIVES
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                LESSON 1 <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                LESSON 2 <LessonControlButtons />
              </li>
            </ul>
          </li>

          <li
            className="wd-module list-group-item p-0
                 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              Week 3 <LessonControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                LEARNING OBJECTIVES
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                LESSON 1 <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                LESSON 2 <LessonControlButtons />
              </li>
            </ul>
          </li>

          <li
            className="wd-module list-group-item p-0
                 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              Week <LessonControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                LEARNING OBJECTIVES
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                LESSON 1 <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                LESSON 2 <LessonControlButtons />
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">
            Week 1, lecture 1 - Course Introduction, Syllabus, Agenda
          </div>
          <ul className="wd-lessons">
            {/* <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li> */}

            {/* <li className="wd-lesson">
              <span className="wd-title"> READINGS</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Full Stack Developer- Chapter 1 - Introduction
                </li>
                <li className="wd-content-item">
                  Full Stack Developer- Chapter 1 - Creating User
                </li>
              </ul>
            </li> */}

            {/* <li className="wd-lesson">
              <span className="wd-title"> SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to Web Development
                </li>
                <li className="wd-content-item">
                  Creating a HTTP server with Node.JS
                </li>
                <li className="wd-content-item">
                  Creating a react application
                </li>
              </ul>
            </li> */}
          </ul>
        </li>

        {/* <li className="wd-module">
          <div className="wd-title">
            Week 1, Lecture 2- Formatting User Interface with HTML
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
            </li>
          </ul>
        </li> */}
      </ul>
    </div>
  );
}
