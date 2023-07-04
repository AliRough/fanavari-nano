import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../../../axiosinstancs";
import { useContext } from "react";
import { TashilatContext } from "../../../contexts/Tashilat.Provider";
// import {DatePicker} from "react-persian-datepicker/lib/index";

export default function One() {
  const nextPage = useNavigate();
  const [confirmation, setConfirmation] = useState({
    day: 1,
    mount: 1,
    year: "",
  });
  const [expiration, setExpiration] = useState({
    day: 1,
    mount: 1,
    year: "",
  });

  useEffect(() => {
    setStepOne((item) => ({
      ...item,
      confirmation: `${confirmation.year ? confirmation.year : "1400"}-${
        confirmation.mount < 10 ? "0" : ""
      }${confirmation.mount}-${confirmation.day}`,
    }));
  }, [confirmation]);

  useEffect(() => {
    setStepOne((item) => ({
      ...item,
      expiration: `${expiration.year ? expiration.year : "1400"}-${
        expiration.mount < 10 ? "0" : ""
      }${expiration.mount}-${expiration.day}`,
    }));
  }, [expiration]);

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
                      places: {
                        ...item.places,
                        0: { ...item.places[0], address: e.target.value },
                      },
                    }));
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
                      places: {
                        ...item.places,
                        0: { ...item.places[0], meterage: e.target.value },
                      },
                    }));
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
                      places: {
                        ...item.places,
                        0: { ...item.places[0], ownership: e.target.value },
                      },
                    }));
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
                        places: {
                          ...item.places,
                          0: { ...item.places[0], count: e.target.value },
                        },
                      }));
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
                  value={stepOne.places[1].address}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      places: {
                        ...item.places,
                        1: { ...item.places[1], address: e.target.value },
                      },
                    }));
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
                  value={stepOne.places[1].meterage}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      places: {
                        ...item.places,
                        1: { ...item.places[1], meterage: e.target.value },
                      },
                    }));
                  }}
                  type="number"
                  className="border border-gray-300 rounded-xl w-20"
                />
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <select
                  value={stepOne.places[1].ownership}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      places: {
                        ...item.places,
                        1: { ...item.places[1], ownership: e.target.value },
                      },
                    }));
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
                    value={stepOne.places[1].count}
                    onChange={(e) => {
                      setStepOne((item) => ({
                        ...item,
                        places: {
                          ...item.places,
                          1: { ...item.places[1], count: e.target.value },
                        },
                      }));
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
                  value={stepOne.places[2].address}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      places: {
                        ...item.places,
                        2: { ...item.places[2], address: e.target.value },
                      },
                    }));
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
                  value={stepOne.places[2].meterage}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      places: {
                        ...item.places,
                        2: { ...item.places[2], meterage: e.target.value },
                      },
                    }));
                  }}
                  type="number"
                  className="border border-gray-300 rounded-xl w-20"
                />
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <select
                  value={stepOne.places[2].ownership}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      places: {
                        ...item.places,
                        2: { ...item.places[2], ownership: e.target.value },
                      },
                    }));
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
                    value={stepOne.places[2].count}
                    onChange={(e) => {
                      setStepOne((item) => ({
                        ...item,
                        places: {
                          ...item.places,
                          2: { ...item.places[2], count: e.target.value },
                        },
                      }));
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
                  value={stepOne.history}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      history: e.target.value,
                    }));
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
                  value={stepOne.activity}
                  onChange={(e) => {
                    setStepOne((item) => ({
                      ...item,
                      activity: e.target.value,
                    }));
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
                    value={stepOne.is_knowledge}
                    onChange={(e) => {
                      setStepOne((item) => ({
                        ...item,
                        is_knowledge: true,
                      }));
                    }}
                    type="radio"
                    name="isDanesh"
                    id=""
                    className="relative overflow-hidden mx-2 w-5 border rounded-full h-full"
                  />
                  <p className="font-bold text-sm">بله</p>
                  <input
                    value={stepOne.is_knowledge}
                    onChange={(e) => {
                      setStepOne((item) => ({
                        ...item,
                        is_knowledge: false,
                      }));
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
                  <select
                    value={confirmation.day}
                    onChange={(e) => {
                      setConfirmation((date) => ({
                        ...date,
                        day: e.target.value,
                      }));
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
                    value={confirmation.mount}
                    onChange={(e) => {
                      setConfirmation((date) => ({
                        ...date,
                        mount: e.target.value,
                      }));
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
                    value={confirmation.year}
                    onChange={(e) => {
                      if (e.target.value < 1410) {
                        setConfirmation((date) => ({
                          ...date,
                          year: e.target.value,
                        }));
                      }
                    }}
                    type="text"
                    className="text-sm border rounded-xl border-gray-400 m-1 h-8"
                    id=""
                    placeholder="1400"
                  />
                </div>
                <div className="flex  items-center m-3 w-1/2">
                  <p className="font-bold text-sm">
                    تاریخ انقضاء تأییدیه دانشبنیان:{" "}
                  </p>

                  <select
                    value={expiration.day}
                    onChange={(e) => {
                      setExpiration((date) => ({
                        ...date,
                        day: e.target.value,
                      }));
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
                    value={expiration.mount}
                    onChange={(e) => {
                      setExpiration((date) => ({
                        ...date,
                        mount: e.target.value,
                      }));
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
                    value={expiration.year}
                    onChange={(e) => {
                      if (e.target.value < 1410) {
                        setExpiration((date) => ({
                          ...date,
                          year: e.target.value,
                        }));
                      }
                    }}
                    type="number"
                    className="text-sm border rounded-xl border-gray-400 m-1 h-8"
                    id=""
                    min="1300"
                    max="1402"
                    placeholder="1400"
                  />
                </div>
              </td>
            </tr>
            <tr className="bg-white ">
              <td className="p-4 text-xs text-gray-600 font-bold">
                <select
                value={stepOne.places}
                onChange={(e) => {
                  setStepOne((item) => ({
                    ...item,
                    
                  }));
                }}
                  name=""
                  id=""
                  className="border-gray-300 rounded-xl  text-xs"
                >
                  <option
                    value="                    فناوری زیستی (پزشكی، کشاورزی، صنعتی و محیط زیست)
"
                  >
                    فناوری زیستی (پزشكی، کشاورزی، صنعتی و محیط زیست)
                  </option>
                  <option value=" فناوری نانو (محصوالت و مواد )">
                    {" "}
                    فناوری نانو (محصوالت و مواد )
                  </option>
                  <option
                    value="                    اپتیک و فوتونیک (مواد، قطعات و سامانه ها)
"
                  >
                    {" "}
                    اپتیک و فوتونیک (مواد، قطعات و سامانه ها)
                  </option>
                  <option
                    value="                    مواد پیشرفته شیمیایی و غیر شیمیایی (فلزات، کامپوزیتها،)
"
                  >
                    {" "}
                    مواد پیشرفته شیمیایی و غیر شیمیایی (فلزات، کامپوزیتها،)
                  </option>
                  <option
                    value="
                    مواد پیشرفته شیمیایی و غیر شیمیایی (فلزات، کامپوزیتها،
                    سرامیکها، پلیمرها)"
                  >
                    مواد پیشرفته شیمیایی و غیر شیمیایی (فلزات، کامپوزیتها،
                    سرامیکها، پلیمرها){" "}
                  </option>
                  <option
                    value="الكترونیک و کنترل (میكروالكترونیک، قطعات، مدارها، سختافزار
                    کامپیوتر و سامانه ها)"
                  >
                    الكترونیک و کنترل (میكروالكترونیک، قطعات، مدارها، سختافزار
                    کامپیوتر و سامانه ها){" "}
                  </option>
                  <option value="                    تجهیزات پیشرفته ساخت، تولید و آزمایشگاهی
">
                    {" "}
                    تجهیزات پیشرفته ساخت، تولید و آزمایشگاهی
                  </option>
                  <option value="داروهای پیشرفته و مهندسی پزشكی"> داروهای پیشرفته و مهندسی پزشكی</option>
                  <option value="هوافضا (پرنده ها، ماهواره ها، موشکها)">
                    {" "}
                    هوافضا (پرنده ها، ماهواره ها، موشکها)
                  </option>
                  <option value="انرژی (هسته ای، نفت و گاز و تجدید پذیر)">
                    {" "}
                    انرژی (هسته ای، نفت و گاز و تجدید پذیر)
                  </option>
                  <option value="محصوالت پیشرفته سایر بخش ها (رباتیک و ...)">
                    {" "}
                    محصوالت پیشرفته سایر بخش ها (رباتیک و ...)
                  </option>
                  <option value="صنایع دریایی"> صنایع دریایی</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className=" text-left mt-2">
        <button
          className="bg-blue-700  text-white rounded-xl p-4 font-bold text-sm"
          onClick={() => {
            nextPage("/panel/Tashilat/2");
          }}
        >
          مرحله بعد
        </button>
      </div>
    </>
  );
}
