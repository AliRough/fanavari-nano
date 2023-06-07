import React from "react";

export default function Confirm() {
  return (
    <span className=" text-justify">
      اینجانب{" "}
      <input
        type="text"
        placeholder="نام شما ... "
        className="p-1 m-1 rounded-lg bg-transparent"
      />{" "}
      مدیرعامل شرکت ضمن اعالم موافقت و قبول شرایط آن صندوق، درخواست مبلغ{" "}
      <input type="number" className="p-1 m-1 rounded-lg bg-transparent" /> ریال
      به عنوان تسهیالت{" "}
      <input
        type="text"
        placeholder=""
        className="p-1 m-1 rounded-lg bg-transparent"
      />{" "}
      به منظور تأمین{" "}
      <input
        type="text"
        placeholder=""
        className="p-1 m-1 rounded-lg bg-transparent"
      />
      را دارم و کلیه برگه های تكمیل شده و اسناد تعهدآور ارائه شده را مورد تائید
      قرار داده و اعالم میدارم که اطالعات تكمیلی بر اساس آخرین تغییرات ثبتی
      مندرج در روزنامه رسمی ارائه شده و با تایید این برگه مسئولیت هرگونه مغایرت
      یا خطا و یا کشف سوءاستفاده احتمالی را به عهده میگیرم. همچنین صندوق توسعه
      فناوری نانو اختیار دارد نسبت به پرداخت یا عدم پرداخت تسهیالت مذکور تصمیم
      گیری نماید.
    </span>
  );
}
