import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

export default function Tashilat() {
  let { pathname: pass } = useLocation();
  console.log("pass:",pass);

  return (
    <div className="px-5">
      <div className=" py-6">
        <p className="text-xl font-extrabold">بارگیری و بارگذاری مدارک </p>
      </div>
      {/* <div className="w-1/2 p-2">
          <div class="relative">
            <select name="type_w" class="block appearance-none w-full bg-transparent border-b border-gray-400  my-3 p-3.5 rounded-2xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
              <option value="" disabled selected>  نوع ضمانت نامه درخواست شده را انتخاب کنید</option>
              <option value={type_w} name="hosn-anjam-kar">حسن انجام کار </option>
              <option value={type_w} name="hosn-anjam-tahod">حسن انجام تعهدات</option>
              <option value={type_w} name="kosor-vajh">کسور وجه الضمان</option>
              <option value={type_w} name="pishpardakht">پیش پرداخت</option>
              <option value={type_w} name="tahodpardakht">تعهد پرداخت</option>
              <option value={type_w} name="shrkt-monaghese">شرکت در مناقصه</option>
              <option value={type_w} name="had-etebari">حد اعتباری</option>

            </select>
          </div>
        </div> */}
      
      <Outlet />
    </div>
  );
}
