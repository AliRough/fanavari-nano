import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";

export default function Tashilat() {
  let { pathname: pass } = useLocation();
  return (
    <div className="px-5">
      <div className=" py-6">
        <p className="text-xl font-extrabold">بارگیری و بارگذاری مدارک </p>
      </div>
      <div className=" flex  items-center w-full justify-center">
        <div className="flex items-center">
          <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 ">
            1
          </p>
        </div>
        <div className="w-10 px-2">
          <div className="border-t border-2 border-blue-800 h-full rounded"></div>
        </div>
        <div className="flex items-center">
          <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 ">
            2
          </p>
        </div>
        <div className="w-10 px-2">
          <div className="border-t border-2 border-blue-800 h-full rounded"></div>
        </div>
        <div className="flex items-center">
          <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 ">
            3
          </p>
        </div>
        <div className="w-10 px-2">
          <div className="border-t border-2 border-blue-800 h-full rounded"></div>
        </div>
        <div className="flex items-center">
          <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 ">
            4
          </p>
        </div>
        <div className="w-10 px-2">
          <div className="border-t border-2 border-blue-800 h-full rounded"></div>
        </div>
        <div className="flex items-center">
          <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 ">
            5
          </p>
        </div>
        <div className="w-10 px-2">
          <div className="border-t border-2 border-blue-800 h-full rounded"></div>
        </div>
        <div className="flex items-center">
          <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 ">
            تایید
          </p>
        </div>
      </div>
      <Outlet />
      {pass == !"/panel/Tashilat/confirm" && (
        <div className=" text-left mt-2">
          <button className="bg-blue-700  text-white rounded-xl p-4 font-bold text-sm">
            مرحله بعد
          </button>
        </div>
      )}
    </div>
  );
}
