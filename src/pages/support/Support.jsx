import React from "react";

export default function Support() {
  return (
    <div>
    <div class="p-6">
      <p class="text-xl font-extrabold">پشتیبانی</p>
    </div>
    <div class="bg-white rounded-t-2xl p-6 shadow-xl z-10">
      <p class="font-bold">مشاهده تیکت #165496</p>
    </div>
    <div class="relative bg-white h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-y-auto rounded-b-2xl">
      <div class="sticky top-0 flex justify-center ">
        <p class="border border-green-600 text-sm text-green-600 p-1 px-6 rounded-xl">امروز</p>
      </div>
      <div class="bg-c w-full sm:w-2/5 m-4 p-4 rounded-2xl">
        <p class="text-sm">سلام وقت بخیر <br /> بکاپ خودکار گرفته میشه یا خودم باید بگیرم</p>
        <div class="flex justify-between mt-4 ">
          <p class="text-sm">9:32</p>
          <p class="text-sm">IP: 164.213549.789</p>
        </div>
      </div>
      <div class="absolute bottom-0 flex w-full p-5">
        <div class="relative w-full sm:w-4/5 pt-8 pb-3 rounded-2xl border bg-white px-2 ">
          <p class="absolute top-0 p-3">پیام خود را بنویسید...</p>
          <input type="text" class="w-full placeholder:text-xs placeholder:p-3 outline-none border-0" placeholder="برای تسریع در بارگذاری سعی کنید در یک قاب پیام خود را بنویسید"/>
        </div>
        <button class="w-1/6 rounded-2xl mx-1 border border-green-600 text-green-600">پیوست </button>
        <button class="w-1/6 rounded-2xl mx-1 bg-blue-800 text-white">ارسال</button>
      </div>
    </div>
  </div>
  );
}
