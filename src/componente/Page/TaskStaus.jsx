



import React from 'react';

const TaskStaus = ({tiketeorder,handleCart}) => {
    return (
       
       <div className="card bg-[#FFFFFF]  
        w-auto mb-4 mt-2">
  <div className="card-body">
    <h2 className="text-[#001931]">{tiketeorder.title}</h2>
    
    <div className="card-actions ju">
      <button onClick={() => handleCart (tiketeorder)} className="btn btn-primary w-full bg-[#02A53B] border-0 grow-0 font-medium">Complete</button>
    </div>
  </div>
</div>
    );
};

export default TaskStaus;