function Icons({ type }) {
  return (
    // <div className="icons">
    <i className={type}></i>
    // </div>
  );
}

export default Icons;

import React from "react";

export function Input({ type }) {
  return (
    <div>
      <input type={type} />
    </div>
  );
}
