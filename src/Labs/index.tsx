import { Route, Routes } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
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
          code for a1
        </a>
      </h2>
      <h2>
        <a
          href="https://github.com/chenchen218/Chen-react-web-app/tree/a2"
          target="_blank"
        >
          code for a2
        </a>
      </h2>
      <h2>
        <a
          href="https://github.com/chenchen218/Chen-react-web-app/tree/a3"
          target="_blank"
        >
          code for a3
        </a>
      </h2>
      <h2>
        <a
          href="https://a2--kanbas-react-web-app-cs5610-chen.netlify.app/#/Kanbas/Dashboard"
          target="_blank"
        >
          Link to Kanbas
        </a>
      </h2>

      <TOC />
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
