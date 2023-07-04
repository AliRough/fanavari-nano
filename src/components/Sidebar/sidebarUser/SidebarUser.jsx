import React from "react";
import DropdownUser from "./DropdownUser";
import imm from "../../../assets/imges/image 2.png";
import imm2 from "../../../assets/imges/Line 1.png";

const SidebarUser = ({ objects, showSideBar, showSideBarHandler }) => {
  return (
    <section
      className={`flex w-full lg:sticky  absolute top-6 left-0 z-[99] lg:!block lg:w-max ${
        showSideBar ? "block " : "hidden "
      }`}
    >
      <section
        className={`bg-c-2 h-c-5 top-6 p-6 rounded-3xl h-max min-h-screen lg:  w-1/2 lg:w-full z-20`}
      >
        <div className="mb-6">
          <img width={120} className="mx-auto" src={imm} alt="" />
        </div>
        <div className="mb-6">
          <img className="mx-auto" src={imm2} alt="" />
        </div>
        <div className="mb-6">
          <h1 className="font-bold text-center">داشبورد</h1>
        </div>
        {objects &&
          objects.map((item, index) => (
            <DropdownUser
              route={item.links}
              key={index}
              title={item.title}
              itemsList={item.drop}
            />
          ))}
      </section>
      <button
        className="w-full h-full absolute  bg-gray-300 opacity-20 z-10 lg:hidden"
        onClick={showSideBarHandler}
      >
        خروج
      </button>
    </section>
  );
};

export default SidebarUser;   
