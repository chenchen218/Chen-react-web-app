import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoSpeedometerOutline, IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";

export default function KanbasNavigation() {
  return (
    <div
      className="  border-0 bottom-0 top-0 position-fixed d-none d-md-block list-group rounded-0 bg-black"
      id="wd-kanbas-navigation"
      style={{ width: 120 }}
    >
      <div className="d-flex justify-content-center align-items-center my-3">
        <img
          src="images/neulogo.jpg"
          width="60"
          height="50"
          className="text-center"
        />
      </div>
      <a
        className="border-0  text-center bg-black text-white list-group-item"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
      >
        Northeastern
      </a>

      <Link
        className="border-0 text-center bg-white text-danger list-group-item"
        to="/Kanbas/Account"
        id="wd-account-link"
      >
        <MdOutlineAccountCircle className="fs-1" />
        <br />
        Account
      </Link>

      <Link
        className=" border-0 text-center bg-black text-white list-group-item"
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
      >
        <IoSpeedometerOutline className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>

      <Link
        className="border-0 text-center bg-black text-white list-group-item"
        to="/Kanbas/Courses"
        id="wd-course-link"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>

      <Link
        className="border-0 text-center bg-black text-white list-group-item"
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
      >
        <FaCalendar className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>

      <Link
        className="border-0 text-center bg-black text-white list-group-item"
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>

      <Link
        className="border-0 text-center  bg-black text-white list-group-item"
        to="/Labs"
        id="wd-labs-link"
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </Link>
    </div>
  );
}
