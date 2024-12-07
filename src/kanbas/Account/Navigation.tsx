import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // Define links based on whether the user is signed in
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  const { pathname } = useLocation();

  return (
    // <div id="wd-account-navigation">
    //   {links.includes("Signin") && (
    //     <Link to="/Kanbas/Account/Signin"> Signin </Link>
    //   )}
    //   <br />
    //   {links.includes("Signup") && (
    //     <Link to="/Kanbas/Account/Signup"> Signup </Link>
    //   )}
    //   <br />
    //   {links.includes("Profile") && (
    //     <Link to="/Kanbas/Account/Profile"> Profile </Link>
    //   )}
    <div id="wd-account-navigation" className="list-group">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item ${active(link)}`}
        >
          {" "}
          {link}{" "}
        </Link>
      ))}

      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item border-0 border-white ${active("Users")}`}
        >
          {" "}
          Users{" "}
        </Link>
      )}

      <br />
    </div>
  );
}
