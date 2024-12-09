import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "./Table";
import * as client from "./client";

function People() {
  console.log("People component mounted"); // Debug log
  const [users, setUsers] = useState([]);
  const { cid } = useParams();

  useEffect(() => {
    console.log("useEffect triggered with cid:", cid); // Debug log
    const fetchUsers = async () => {
      if (!cid) {
        console.log("No course ID available");
        return;
      }
      try {
        console.log("Fetching users for course:", cid);
        const enrolledUsers = await client.findUsersForCourse(cid);
        console.log("Enrolled users:", enrolledUsers);
        setUsers(enrolledUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [cid]);

  return (
    <div>
      <h2>Course Users</h2>
      <Table users={users} />
    </div>
  );
}

export default People;
