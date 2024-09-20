export default function Modules() {
  return (
    <div>
      <div>
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
      </div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">
            Week 1, lecture 1 - Course Introduction, Syllabus, Agenda
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title"> READINGS</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Full Stack Developer- Chapter 1 - Introduction
                </li>
                <li className="wd-content-item">
                  Full Stack Developer- Chapter 1 - Creating User
                </li>
              </ul>
            </li>

            <li className="wd-lesson">
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
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">
            Week 1, Lecture 2- Formatting User Interface with HTML
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              {/* <span className="wd-title">LEARNING OBJECTIVES</span> */}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
