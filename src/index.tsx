import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./body.css";

const container = document.getElementById("app-root")!;
const root = createRoot(container);
root.render(<h1 className="text-xl text-blue-900">Hello React!</h1>);
