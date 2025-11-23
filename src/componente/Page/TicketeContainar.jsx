import React, { use, useState } from "react";
import Bannar from "./Bannar.Jsx";
import TiketeCart from "./TiketeCart";
import TaskStaus from "./TaskStaus";
import ResolvedTask from "./ResolvedTask";
import { toast } from "react-toastify";

const TicketeContainar = ({ promise }) => {
  const data = use(promise);

  const [tikete, setTicate] = useState(data);

  const [tiketeCategory, setTiketeCategory] = useState([]);

  const [readyTikite, setReadyTikete] = useState([]);

  // handleOrder
  const handletikete = (buy) => {
    const isExist = tiketeCategory.find((category) => category.id == buy.id);

    if (isExist) {
    toast.error("Alredy have a Tikate")
      return;
    }

    const newTiketeCategory = [...tiketeCategory, buy];

    setTiketeCategory(newTiketeCategory);
    toast.success("In Progress!")
  };

  // hendleCooking
  const handleCart = (buy) => {
    const newReadyTikete = [...readyTikite, buy];

    setReadyTikete(newReadyTikete);

    const remaing = tiketeCategory.filter((item) => item.id !== buy.id);

    setTiketeCategory(remaing);

    const remaingOrder = tikete.filter((item) => item.id !== buy.id);

    setTicate(remaingOrder);
     toast.success("Completed!")
  };

  return (
    <div className=" mx-auto">
      {/* ////////// Bannar///////      */}
      <Bannar
        tiketeTotal={tiketeCategory.length}
        readyTikite={readyTikite.length}
      ></Bannar>

      <main className=" mx-auto py-10 grid  lg:grid-cols-7 md:grid-cols-7  gap-5 ">
        {/* .... 11 Site ......  */}

        <div className="md:col-span-4 lg:col-span-5">
          <h2 className="font-semibold text-3xl mb-4 text-gray-600">
            Customer Tickets
          </h2>
          <div
            className="space-y-3
                 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 "
          >
            {tikete.map((tikateItem) => (
              <TiketeCart
                key={tikateItem.id}
                tikete={tikateItem}
                handletikete={handletikete}
              ></TiketeCart>
            ))}
          </div>
        </div>

        {/* ......222 Site .....  */}

        <div className="lg:col-span-2 md:col-span-3 m-4  w-full">
          <div className="w-full ">
            <h2 className="font-semibold text-3xl text-[#34485A] mb-2 ">
           
              Task Status
            </h2>

            <div className="w-full ">
              {tiketeCategory.length > 0 ? (
                tiketeCategory.map((tiketeorder) => (
                  <TaskStaus
                    key={tiketeorder.id}
                    tiketeorder={tiketeorder}
                    handleCart={handleCart}
                  ></TaskStaus>
                ))
              ) : (
                <p className="text-[#627382]  text-[13px]  ">
                  Select a ticket to add to Task Status
                </p>
              )}
            </div>
          </div>

          <div className="">
            <h2 className="font-semibold text-3xl  text-[#34485A] mt-5 mb-4">
              Resolved Task
            </h2>
            <div className="">
              {readyTikite.length > 0 ? (
                readyTikite.map((order) => (
                  <ResolvedTask key={order.id} order={order}></ResolvedTask>
                ))
              ) : (
                <h2 className="text-[#627382] text-[13px] mt-2 ">
                  No resolved tasks yet.
                </h2>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TicketeContainar;
