





import React from 'react';

const TiketeCart = ({tikete, handletikete}) => {


    return <div className=" mx-2">

   <div onClick={()=> handletikete(tikete)} className="card card-btikete bg-[#FFFFFF] h-auto w-auto btikete-0 ">

  <div className="card-body">
    <div className="flex  font-semibold justify-between items-center">
       <h2 className="card-title text-[15px] font-medium text-[#001931]">{tikete.title}</h2>

       <span className={`text-[#627382] px-5 py-1  rounded-full  ${tikete.status == "Open" ? "bg-[#02A53B]" : "bg-yellow-200" }`}>
        
        <i class={`fa-solid fa-circle mr-1  ${tikete.status == "Open" ? "text-[#0B5E06]" : "text-[#FEBB0C]" } `}></i>{tikete.status}</span>

    </div>
   
    <p className="text-[13px] text-[#627382]">{tikete. description}</p>     

    <div className=" flex justify-between text-[#627382]
    items-center">

      <div className="flex text-[13px] gap-4">
        <p>#1003 </p>
        <p className={`${tikete.priority == "HIGH PRIORITY" ? "text-[#F83044]" : tikete.priority == "LOW PRIORITY" ? "text-[#02A53B]" : "text-[#FEBB0C] "}`}>{tikete.priority}</p>
      </div>
      <div className="flex text-[13px] gap-4">
        <p>{tikete.agent
} </p>
        <p>{tikete.date}</p>
      </div>
     
    </div>
  </div>
</div>
 
  </div>;
};

export default TiketeCart;