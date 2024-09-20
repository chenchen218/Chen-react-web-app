import { Route, Routes } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./lab2";
import TOC from "./TOC";
export default function Labs() {
  return (
    <div>
      <h1>Chenyang Li</h1>
      <h2>Section02</h2>
      <h2>
        <a
          href="https://github.com/chenchen218/Chen-react-web-app/tree/a1"
          target="_blank"
        >
          code
        </a>
      </h2>
      <TOC />
      <h1>labs</h1>
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<h2>Lab 3</h2>} />
      </Routes>
    </div>
  );
}
