// src/Kanbas/Courses/Enrollments/client.ts
import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const USERS_API = `${REMOTE_SERVER}/api/users`;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const findAllEnrollments = async () => {
  const response = await axios.get(ENROLLMENTS_API);
  return response.data;
};

export const enrollInCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(
    `${USERS_API}/${userId}/enrollments/${courseId}`
  );
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axios.delete(
    `${USERS_API}/${userId}/enrollments/${courseId}`
  );
  return response.data;
};

export const findUserEnrollments = async (userId: string) => {
  const response = await axios.get(`${USERS_API}/${userId}/enrollments`);
  return response.data;
};
