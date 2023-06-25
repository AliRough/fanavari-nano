import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../../../axiosinstancs";
import { useContext } from "react";
import { TashilatContext } from "../../../contexts/Tashilat.Provider";

export default function One() {
  const nextPage = useNavigate();
  // const [reqDatas , setReqDatas] = useState({
  //     user_id:"",
  //     type:"facilities",
  //     title:"",
  //     type_f:"",
  //     places:[
  //         {
  //             "scope":"test",
  //             address":"test",
  //             "meterage":"10000",
  //             "ownership":"owner",
  //             "count":"3"
  //         },
  //         {
  //           "scope":"test1",
  //           address":"test",
  //           "meterage":"10000",
  //           "ownership":"owner",
  //           "count":"3"
  //       },
  //       {
  //         "scope":"test2",
  //         address":"test",
  //         "meterage":"10000",
  //         "ownership":"owner",
  //         "count":"3"
  //     }
  //     ],
  //   history:test,
  //   activity:"",
  //   is_knowledge:"", //true or false
  //   confirmation:"", //2022-10-10
  //   expiration:"",//2022-10-10
  //   area:""
  // }

  // const changeHandler = (ev) => {
  //   if (ev.target.type === "radio") {
  //     setReqDatas({
  //       ...reqDatas, [ev.target.name]: ev.target.value
  //     })
  //   } else if (ev.target.type === "text") {
  //     setReqDatas({
  //       ...reqDatas, [ev.target.name]: ev.target.value
  //     })
  //   }
  //   console.log(reqDatas);
  // }

  // const addHandler = (event) => {
  //   event.preventDefault()
  //   Axios.post("/api/v1/request", reqDatas).then(async (res) => {
  //     console.log(res);
  //   })
  // }
  // useEffect(() => {
  //   sendReport()
  // },[])
  const { stepOne, setStepOne } = useContext(TashilatContext);
  return (
    <>
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
          <p className="bg-slate-200 p-0.5 pt-1 px-3 rounded-xl text-slate-800 ">
            2
          </p>
        </div>
        <div className="w-10 px-2">
          <div className="border-t border-2 border-slate-800 h-full rounded"></div>
        </div>
        <div className="flex items-center">
          <p className="bg-slate-200 p-0.5 pt-1 px-3 rounded-xl text-slate-800 ">
            3
          </p>
        </div>
        <div className="w-10 px-2">
          <div className="border-t border-2 border-slate-800 h-full rounded"></div>
        </div>
        <div className="flex items-center">
          <p className="bg-slate-200 p-0.5 pt-1 px-3 rounded-xl text-slate-800 ">
            4
          </p>
        </div>
        <div className="w-10 px-2">
          <div className="border-t border-2 border-slate-800 h-full rounded"></div>
        </div>
        <div className="flex items-center">
          <p className="bg-slate-200 p-0.5 pt-1 px-3 rounded-xl text-slate-800 ">
            5
          </p>
        </div>
        <div className="w-10 px-2">
          <div className="border-t border-2 border-slate-800 h-full rounded"></div>
        </div>
        <div className="flex items-center">
          <p className="bg-slate-200 p-0.5 pt-1 px-3 rounded-xl text-slate-800 ">
            تایید
          </p>
        </div>
      </div>

      <div className=" py-6 mt-4">
        <p className="text-lg font-extrabold">مکان فعالیت شرکت </p>
      </div>

      <div className=" ">
        <table className="w-full rounded-xl overflow-hidden">
          <thead>
            <tr className=" sticky top-0   ">
              <th className="bg-white p-3  ">کاربری </th>
              <th className="bg-white p-3 ">نشانی </th>
              <th className="bg-white p-3 "> متراژ (مترمربع)</th>
              <th className="bg-white p-3 ">مالک/ استیجاری </th>
              <th className="bg-white p-3 ">تعداد کارکنان </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="p-4 text-xs text-gray-800 font-bold">
                دفتر مرکزی
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <textarea
                  className=" text-xs h-12 border border-gray-300 rounded-xl"
                  value={stepOne.places[0].address}
                  onChange={(e) => {

                    setStepOne((item) => ({
                      ...item,
                      one: { ...item.one, address: e.target.value },
                    }));
                    console.log(stepOne);
                  }}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <input
                  type="number"
                  value={stepOne.places[0].meterage}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      one: { ...item.one, meterage: e.target.value },
                    }));
                    console.log(stepOne);
                  }}
                  className="border border-gray-300 rounded-xl w-20"
                />
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <select
                  value={stepOne.places[0].ownership}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      one: { ...item.one, ownership: e.target.value },
                    }));
                    console.log(stepOne);
                  }}
                  name=""
                  id=""
                  className="border-gray-300 rounded-xl w-24 text-xs"
                >
                  <option value="مالک">مالک</option>
                  <option value="استجاری">استیجاری</option>
                </select>
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <div className="flex">
                  <input
                    value={stepOne.places[0].count}
                    onChange={(e) => {
                      setStepOne((item) => ({
                        ...item,
                        one: { ...item.one, count: e.target.value },
                      }));
                      console.log(stepOne);
                    }}
                    type="number"
                    className="border border-gray-300 rounded-xl w-20"
                  />
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="p-4 text-xs text-gray-800 font-bold">
                کارگاه یا کارخانه
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <textarea
                  value={stepOne.places[0].address}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      one: { ...item.one, address: e.target.value },
                    }));
                    console.log(stepOne);
                  }}
                  className=" text-xs h-12 border border-gray-300 rounded-xl"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <input
                  value={stepOne.places[0].meterage}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      one: { ...item.one, meterage: e.target.value },
                    }));
                    console.log(stepOne);
                  }}
                  type="number"
                  className="border border-gray-300 rounded-xl w-20"
                />
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <select
                  value={stepOne.places[0].ownership}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      one: { ...item.one, ownership: e.target.value },
                    }));
                    console.log(stepOne);
                  }}
                  name=""
                  id=""
                  className="border-gray-300 rounded-xl w-24 text-xs"
                >
                  <option value="مالک">مالک</option>
                  <option value="استجاری">استجاری</option>
                </select>
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <div className="flex">
                  <input
                    value={stepOne.places[0].count}
                    onChange={(e) => {
                      setStepOne((item) => ({
                        ...item,
                        one: { ...item.one, count: e.target.value },
                      }));
                      console.log(stepOne);
                    }}
                    type="number"
                    className="border border-gray-300 rounded-xl w-20"
                  />
                </div>
              </td>
            </tr>
            <tr className="bg-white ">
              <td className="p-4 text-xs text-gray-800 font-bold">انبار</td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <textarea
                  value={stepOne.places[0].address}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      one: { ...item.one, address: e.target.value },
                    }));
                    console.log(stepOne);
                  }}
                  className=" text-xs h-12 border border-gray-300 rounded-xl"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <input
                  value={stepOne.places[0].meterage}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      one: { ...item.one, meterage: e.target.value },
                    }));
                    console.log(stepOne);
                  }}
                  type="number"
                  className="border border-gray-300 rounded-xl w-20"
                />
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <select
                  value={stepOne.places[0].ownership}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      one: { ...item.one, ownership: e.target.value },
                    }));
                    console.log(stepOne);
                  }}
                  name=""
                  id=""
                  className="border-gray-300 rounded-xl w-24 text-xs"
                >
                  <option value="مالک">مالک</option>
                  <option value="استجاری">استجاری</option>
                </select>
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <div className="flex">
                  <input
                    value={stepOne.places[0].count}
                    onChange={(e) => {
                      setStepOne((item) => ({
                        ...item,
                        one: { ...item.one, count: e.target.value },
                      }));
                      console.log(stepOne);
                    }}
                    type="number"
                    className="border border-gray-300 rounded-xl w-20"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4 ">
        <table className="w-full rounded-xl overflow-hidden">
          <thead>
            <tr className=" sticky top-0   ">
              <th className="bg-white p-3  ">تاریخچه و معرفی اجمالی شرکت </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white ">
              <td className="p-4 text-xs text-gray-600 font-bold">
                <textarea
                  value={stepOne.places[0].traikhche}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      one: { ...item.one, traikhche: e.target.value },
                    }));
                    console.log(stepOne);
                  }}
                  className=" text-xs h-20 w-full border border-gray-300 rounded-xl"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr className=" sticky top-0   ">
              <th className="bg-white p-3  ">
                شرح مختصر فعالیتها و فرآیند تولید/خدمات اصلی شرکت و همچنین نحوه
                تأمین مواد اولیه/ قطعات مصرفی{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white ">
              <td className="p-4 text-xs text-gray-600 font-bold">
                <textarea
                  value={stepOne.places[0].sharhFaalit}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      one: { ...item.one, sharhFaalit: e.target.value },
                    }));
                    console.log(stepOne);
                  }}
                  className=" text-xs h-20 w-full border border-gray-300 rounded-xl"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr className=" sticky top-0   ">
              <th className="bg-white p-3  ">وضعیت و حوزه دانش بنیان</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white ">
              <td className=" text-xs text-gray-600 font-bold">
                <div className="flex  items-center m-3">
                  <p className="font-bold text-sm">
                    آیا شرکت در فهرست شرکتهای دانش بنیان معاونت علمی ریاست
                    جمهوری قرار دارد؟
                  </p>
                  <input
                    value={stepOne.places[0].isDaneshBonyan}
                    onChange={(e) => {
                      setStepOne((item) => ({
                        ...item,
                        one: { ...item.one, isDaneshBonyan: true },
                      }));
                      console.log(stepOne);
                    }}
                    type="radio"
                    name="isDanesh"
                    id=""
                    className="relative overflow-hidden mx-2 w-5 border rounded-full h-full"
                  />
                  <p className="font-bold text-sm">بله</p>
                  <input
                    value={stepOne.places[0].isDaneshBonyan}
                    onChange={(e) => {
                      setStepOne((item) => ({
                        ...item,
                        one: { ...item.one, isDaneshBonyan: false },
                      }));
                      console.log(stepOne);
                    }}
                    type="radio"
                    name="isDanesh"
                    id=""
                    className="relative overflow-hidden mx-2 w-5 rounded h-full"
                  />
                  <p className="font-bold text-sm">خیر</p>
                </div>
              </td>
            </tr>
            <tr className="bg-white ">
              <td className="p-4 text-xs text-gray-600 font-bold flex">
                <div className="flex  items-center m-3 w-1/2">
                  <p className="font-bold text-sm">
                    تاریخ تأییدیه دانش بنیان توسط معاونت علمی ریاست جمهور:{" "}
                  </p>

                  {/* <select
                    value={stepOne.places[0].daneshBonyanDate.day}
                    onChange={(e) => {
                      setStepOne((item) => ({
                        ...item,
                        one: {
                          ...item.one,
                          daneshBonyanDate: {
                            ...item.one.daneshBonyanDate,
                            day: e.target.value,
                          },
                        },
                      }));
                      console.log(stepOne);
                    }}
                    name=""
                    id=""
                    className="border-gray-300 rounded-xl  text-xs mx-1 "
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                  <select
                    value={stepOne.places[0].daneshBonyanDate.month}
                    onChange={(e) => {
                      setStepOne((item) => ({
                        ...item,
                        one: {
                          ...item.one,
                          daneshBonyanDate: {
                            ...item.one.daneshBonyanDate,
                            month: e.target.value,
                          },
                        },
                      }));
                      console.log(stepOne);
                    }}
                    name=""
                    id=""
                    className="border-gray-300 rounded-xl  text-xs mx-1"
                  >
                    <option value="1">فروردین</option>
                    <option value="2">اردیبهشت</option>
                    <option value="3">خرداد</option>
                    <option value="4">تیر</option>
                    <option value="5">مرداد</option>
                    <option value="6">شهریور</option>
                    <option value="7">مهر</option>
                    <option value="8">آبان</option>
                    <option value="9">آذر</option>
                    <option value="10">دی</option>
                    <option value="11">بهمن</option>
                    <option value="12">اسفند</option>
                  </select>
                  <input
                    value={stepOne.places[0].daneshBonyanDate.year}
                    onChange={(e) => {
                      setStepOne((item) => ({
                        ...item,
                        one: {
                          ...item.one,
                          daneshBonyanDate: {
                            ...item.one.daneshBonyanDate,
                            year: e.target.value,
                          },
                        },
                      }));
                      console.log(stepOne);
                    }}
                    type="number"
                    className="text-sm border rounded-xl border-gray-400 m-1 h-8"
                    id=""
                    min="1300"
                    max="1402"
                    placeholder="1400"
                  /> */}
                </div>
                {/* <div className="flex  items-center m-3 w-1/2">
                  <p className="font-bold text-sm">
                    تاریخ انقضاء تأییدیه دانشبنیان:{" "}
                  </p>

                  <select
                    value={stepOne.places[0].daneshBonyanDateEnd.day}
                    onChange={(e) => {
                      setStepOne((item) => ({
                        ...item,
                        one: {
                          ...item.one,
                          daneshBonyanDateEnd: {
                            ...item.one.daneshBonyanDateEnd,
                            day: e.target.value,
                          },
                        },
                      }));
                      console.log(stepOne);
                    }}
                    name=""
                    id=""
                    className="border-gray-300 rounded-xl  text-xs mx-1 "
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                  <select
                    value={stepOne.places[0].daneshBonyanDateEnd.month}
                    onChange={(e) => {
                      setStepOne((item) => ({
                        ...item,
                        one: {
                          ...item.one,
                          daneshBonyanDateEnd: {
                            ...item.one.daneshBonyanDateEnd,
                            month: e.target.value,
                          },
                        },
                      }));
                      console.log(stepOne);
                    }}
                    name=""
                    id=""
                    className="border-gray-300 rounded-xl  text-xs mx-1"
                  >
                    <option value="1">فروردین</option>
                    <option value="2">اردیبهشت</option>
                    <option value="3">خرداد</option>
                    <option value="4">تیر</option>
                    <option value="5">مرداد</option>
                    <option value="6">شهریور</option>
                    <option value="7">مهر</option>
                    <option value="8">آبان</option>
                    <option value="9">آذر</option>
                    <option value="10">دی</option>
                    <option value="11">بهمن</option>
                    <option value="12">اسفند</option>
                  </select>
                  <input
                    value={stepOne.places[0].daneshBonyanDateEnd.year}
                    onChange={(e) => {
                      setStepOne((item) => ({
                        ...item,
                        one: {
                          ...item.one,
                          daneshBonyanDateEnd: {
                            ...item.one.daneshBonyanDateEnd,
                            year: e.target.value,
                          },
                        },
                      }));
                      console.log(stepOne);
                    }}
                    type="number"
                    className="text-sm border rounded-xl border-gray-400 m-1 h-8"
                    id=""
                    min="1300"
                    max="1402"
                    placeholder="1400"
                  />
                </div> */}
              </td>
            </tr>
            {/* <tr className="bg-white ">
              <td className="p-4 text-xs text-gray-600 font-bold">
                <select
                  name=""
                  id=""
                  className="border-gray-300 rounded-xl  text-xs"
                >
                  <option value="88">
                    فناوری زیستی (پزشكی، کشاورزی، صنعتی و محیط زیست)
                  </option>
                  <option value="88"> فناوری نانو (محصوالت و مواد )</option>
                  <option value="88">
                    {" "}
                    اپتیک و فوتونیک (مواد، قطعات و سامانه ها)
                  </option>
                  <option value="88">
                    {" "}
                    مواد پیشرفته شیمیایی و غیر شیمیایی (فلزات، کامپوزیتها،)
                  </option>
                  <option value="88">
                    مواد پیشرفته شیمیایی و غیر شیمیایی (فلزات، کامپوزیتها،
                    سرامیکها، پلیمرها){" "}
                  </option>
                  <option value="88">
                    الكترونیک و کنترل (میكروالكترونیک، قطعات، مدارها، سختافزار
                    کامپیوتر و سامانه ها){" "}
                  </option>
                  <option value="88">
                    {" "}
                    تجهیزات پیشرفته ساخت، تولید و آزمایشگاهی
                  </option>
                  <option value="88"> داروهای پیشرفته و مهندسی پزشكی</option>
                  <option value="88">
                    {" "}
                    هوافضا (پرنده ها، ماهواره ها، موشکها)
                  </option>
                  <option value="88">
                    {" "}
                    انرژی (هسته ای، نفت و گاز و تجدید پذیر)
                  </option>
                  <option value="88">
                    {" "}
                    محصوالت پیشرفته سایر بخش ها (رباتیک و ...)
                  </option>
                  <option value="88"> صنایع دریایی</option>
                </select>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>

      <div className=" text-left mt-2">
        <button
          className="bg-blue-700  text-white rounded-xl p-4 font-bold text-sm"
          onClick={() => {
            console.log(stepOne);
            nextPage("/panel/Tashilat/2");
          }}
        >
          مرحله بعد
        </button>
      </div>
    </>
  );
}
