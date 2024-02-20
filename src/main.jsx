import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // React.StrictMode에서는 모든 컴포넌트 함수를 보이지 않게 두 번 호출
  // 특정한 문제를 잡아내는 데에 도움이 된다
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
