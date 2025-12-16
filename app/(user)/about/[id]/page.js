"use client";
import React, { use } from "react";

const StudentDetail = (props) => {
  const data = use(props.params);
  return (
    <div>
      <h1>Student Detail : {data.id}</h1>
    </div>
  );
};

export default StudentDetail;
