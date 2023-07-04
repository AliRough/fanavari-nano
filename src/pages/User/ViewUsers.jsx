import React, { useContext, useState } from "react";
import Axios from "../../../axiosinstancs";
import { useEffect } from "react";
import Viewdetailuser from "./Viewdetailuser";
import ViewLegalDetailUser from "./ViewLegalDetailUser";
import { onlyDateConversion } from "../../helper/dateConversion.cjs";
import { UserDataContext } from "../../contexts/UserData.Provider";
import user from "../../assets/imges/user.png"




export default function   ViewUsers() {
  const {userDatas} = useContext(UserDataContext)
  const [isPerson, setIsPerson] = useState(true);
  const [allGenuineUser, setAllGenuineUser] = useState(null);
  const [allLegalUser, setAllLegalUser] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetailsUsergenuine, setShowDetailsUsergenuine] = useState(false);
  const [showDetailsUserlegal, setShowDetailsUserlegal] = useState(false);
  const [selectUser, setSelectUser] = useState({});
  
  useEffect(() => {
    getUserGenuine();
    getUserLegal();
  }, []);
  const getUserGenuine = () => {
    Axios.get("/api/admin/get_genuine").then(async res => {
      // console.log(res.data)
      setAllGenuineUser(res.data)
    }
    ).catch(err => {
      console.log(err)
    }
    )
  }
  const getUserLegal = () => {
    Axios.get("/api/admin/get_legal").then(async res => {
      console.log(res.data)
      setAllLegalUser(res.data)
    }
    ).catch(err => {
      console.log(err)
    }
    )
  }
  const handleSelectRow = (item) => {
    setSelectedItem(item);
    // setShowDetailsUsergenuine(true);
    console.log(item);
  };
  const handleSelectRow2 = (item) => {
    setSelectedItem(item);
    // setShowDetailsUserlegal(true);
    console.log(item);
  };
  // این قسمت کار نمیکنه
  const showSelectedUser = () => {
    Axios.get(`/api/admin//users/${selectedItem.id}`).then(async res => {
      // setAllGenuineUser(res.data)
      console.log(res.data)

    }
    ).catch(err => {
      console.log(err)
    }
    )
  }

  // const deleteUserHandler = (userId) => {
  //   axios.delete(`/user/${userId}` , {headers : ["Access-Control-Allow-Origin"] })
  //     .then((res) => console.log(res))
  // }
  if (showDetailsUserlegal) return <ViewLegalDetailUser close={setShowDetailsUserlegal} details={selectedItem} />

  if (showDetailsUsergenuine) return <Viewdetailuser close={showDetailsUsergenuine} details={selectedItem} />
  if ((userDatas.user.type === "admin" || userDatas.user.type === "Admin")) return (
    <div>
      <div className="flex justify-between py-6">
        <p className="text-xl font-extrabold" >مشاهده کاربران</p>
        <div className="flex bg-white rounded-xl">
          <button
            className={`${!isPerson && " bg-blue-600 text-white "
              } p-3 ml-4 rounded-xl`}
            onClick={() => {
              setIsPerson(!isPerson);
            }}
          >
            حقوقی
          </button>
          <button
            className={`${isPerson && " bg-blue-600 text-white "
              } rounded-xl p-3 `}
            onClick={() => {
              setIsPerson(!isPerson);
            }}
          >
            حقیقی
          </button>
        </div>
      </div>
      <div className="max-h-[60vh] overflow-y-scroll">
        {isPerson ? (
          <table className="w-full ">
            <tr className=" sticky top-0  text-sm ">
              <th className="bg-white p-3 text-center rounded-r-xl ">نمایه </th>
              <th className="bg-white p-3 text-center ">نام </th>
              <th className="bg-white p-3 text-center ">نام خانوادگی</th>
              <th className="bg-white p-3 text-center ">تاریخ ثبت نام کاربر </th>
              <th className="bg-white p-3 text-center rounded-l-xl">اعمال </th>
            </tr>
            {allGenuineUser && allGenuineUser.map((GenuineUser) => {
              return (
                <tr
                  key={GenuineUser.id}
                  id={GenuineUser.id}
                  
                  className={
                    selectedItem?.id === GenuineUser.id
                      ? console.log(GenuineUser.id)
                      : null
                  }
                >
                  <td>
                    {" "}
                    <img
                      className="w-10 mx-auto"
                      src={user}
                      alt=""
                    />
                  </td>
                  <td className="p-4 text-xs text-gray-400 font-bold text-center  ">{GenuineUser.name}</td>
                  <td className="p-4 text-xs text-gray-400 font-bold text-center ">{GenuineUser.family}</td>
                  <td className="p-4 text-xs text-gray-400 font-bold text-center ">
                    {onlyDateConversion(GenuineUser.created_at)}
                  </td>
                  <td className="p-4 text-xs text-gray-400 font-bold">
                    <div className="flex justify-center">
                      <button  className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                        حذف کاربر
                      </button>
                      <button onClick={() => handleSelectRow(GenuineUser)} className="text-blue-700 border rounded-2xl p-2 ">
                        اطلاعات بیشتر
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </table>
        ) : (

          <table className="w-full ">
            <tr className=" sticky top-0 text-sm  ">
              <th className="bg-white p-3 text-center rounded-r-xl ">نام شرکت </th>
              <th className="bg-white p-3 text-center ">نام ونام خانوادگی نماینده </th>
              <th className="bg-white p-3 text-center ">شناسه مالی شرکت</th>
              <th className="bg-white p-3 text-center rounded-l-xl">اعمال </th>
            </tr>
            {allLegalUser && allLegalUser.map((LegalUser) => {
              return (
                <tr
                key={LegalUser.id}
                id={LegalUser.id}
                
                className={
                  selectedItem?.id === LegalUser.id
                    ? console.log(LegalUser.id)
                    : null
                }
              >
                  <td className="p-4 text-xs text-gray-400 font-bold text-center">{LegalUser.company_name}</td>
                  <td className="p-4 text-xs text-gray-400 font-bold text-center">{LegalUser.name}{LegalUser.family}</td>
                  <td className="p-4 text-xs text-gray-400 font-bold text-center">{LegalUser.national_company}</td>
                  <td className="p-4 text-xs text-gray-400 font-bold text-center">
                    <div className="flex justify-center">
                      <button  className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                        حذف کاربر
                      </button>
                      <button onClick={() => handleSelectRow2(LegalUser)} className="text-blue-700 border rounded-2xl p-2 ">
                        اطلاعات بیشتر
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}

          </table>
        )}
      </div>
      <hr />
      <div className="flex justify-between py-4 text-gray-600 items-center text-xs">
        <div className="">نمایش 21-31 از 80 مورد</div>
        <div className="font-bold">
          <button className="text-gray-800 md:text-2xl text-lg  font-bold px-2">
            {"<"}
          </button>
          <button className="text-gray-800 md:text-lg  text-sm font-bold px-2">6</button>
          <button className="text-gray-800 md:text-lg  text-sm font-bold px-2">5</button>
          <button className="text-gray-800 md:text-lg  text-sm font-bold px-2">4</button>
          <button className="text-gray-800 md:text-lg  text-sm font-bold px-2">3</button>
          <button className="text-gray-800 md:text-lg  text-sm font-bold px-2">2</button>
          <button className="text-gray-800 md:text-lg  text-sm font-bold px-2">1</button>
          <button className="text-gray-800 md:text-2xl text-lg font-bold px-2">
            {" "}
            {">"}{" "}
          </button>
        </div>
        <div className="flex items-center">
          <select
            d ir="ltr"
            name=""
            id=""
            className="rounded outline-none md:w-20 w-max text-xs text-gray-800 border ml-4"
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <p className="">تعداد کاربر در هر صفحه</p>
        </div>
      </div>
    </div>
  );
}
