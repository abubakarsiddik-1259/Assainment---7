import React from "react";

const ResolvedTask = ({ order }) => {
  return (
    <div className="card rounded-xl  w-full mb-4 bg-[#E0E7FF]">
      <div className="card-body">
        <h2 className="text-[#001931]">{order.title}</h2>
      </div>
    </div>
  );
};

export default ResolvedTask;
