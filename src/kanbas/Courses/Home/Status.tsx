export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      {/* <div>
        <br />
        <button>Collapse All</button>
        <button>View Progress</button>
        <select id="wd-select-one-option">
          <option value="PUBLISH_ALL">Publish All</option>
          <option value="ASSIGNMENTS">Assignments</option>
          <option selected value="PROJECTS">
            Projects
          </option>
          <option value="QUIZZES">Quizzes</option>
          <option value="EXAMS">Exams</option>
        </select>
        <button>+ Module</button>
        <br />
      </div> */}
      <div className="Status buttons">
        <button>Unpublish</button>
        <button>Publish</button>
        <br />
        <br />
        <button>Import Exsiting Content</button>
        <br />
        <button>Import from Commons</button>
        <br />
        <button>Choose home page</button>
        <br />
        <button>View course stream</button>
        <br />
        <button>New Announcement</button>
        <br />
        <button>New Analytics</button>
        <br />
        <button>View Course Notifications</button>
        <br />
      </div>
    </div>
  );
}
