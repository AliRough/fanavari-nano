import React, { useContext, useEffect, useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Counter from "../../components/Counter/Counter";
import User from "../../components/User/User";
import Axios from "../../../axiosinstancs";
import ViewDetailExpert from "../Expert/ViewDetailExpert";
import Loading from "../../components/Loading/Loading";
import {UserDataContext} from "../../contexts/UserData.Provider";
import Ellipse2 from "../../assets/imges/Ellipse 2.png"
import Ellipse1 from "../../assets/imges/Ellipse 1.png"
import Ellipse4 from "../../assets/imges/Ellipse 4.png"
import Ellipse3 from "../../assets/imges/Ellipse 3.png"
import Ellipse6 from "../../assets/imges/Ellipse 6.png"
import Ellipse5 from "../../assets/imges/Ellipse 5.png"
import Vectora from "../../assets/imges/ViewRequests/Vectora.png"
import Vectorx from "../../assets/imges/ViewRequests/Vectorx.png"
import user from "../../assets/imges/user.png"
import { Link } from "react-router-dom";
import { onlyDateConversion } from "../../helper/dateConversion.cjs";
const Dashboard = () => {
  const {userDatas} = useContext(UserDataContext)

  // console.log(userDatas.user.type)
  const [allRequest, setAllRequest] = useState(null);
  const [allExpert, setAllExpert] = useState(null)
  const [allUser, setAllUser] = useState(null)
  const [Expert, setExpert] = useState(null)
  
  
  const [showDetailsUser, setShowDetailsUser] = useState(false)
  const [selectItemE, setSelectItemE] = useState(null)


  const getAllexpert = () => {
    Axios.get("/api/admin/count_experts").then(async res => {
      // console.log(res)
      setAllExpert(res.data)
    }
    ).catch(err => {
      console.log(err)
    }
    )
  }
  const getAllrequest = () => {
    Axios.get("/api/admin/count_requests").then(async res => {
      // console.log(res)
      setAllRequest(res.data)
    }
    ).catch(err => {
      console.log(err)
    }
    )
  }
  const getAllUser = () => {
    Axios.get("/api/admin/count_users").then(async res => {
      // console.log(res)
      setAllUser(res.data)
    }
    ).catch(err => {
      
      console.log(err)
    }
    )
  }
  // const getExpert = () => {
  //   Axios.get("/api/admin/expert").then(async res => {
  //     console.log(res)
  //     setAllExpert(res.data)
  //   }
  //   ).catch(err => {
  //     console.log(err)
  //   }
  //   )
  // }
  const getExpert = () => {
    Axios.get("/api/admin/expert").then(async res => {
      // console.log(res)
      setExpert(res.data)

    }
    ).catch(err => {
      console.log(err)
    }
    )
  }

  useEffect(() => {
    getAllUser();
    getAllexpert();
    getAllrequest();
    getExpert()
  }, []);
  const detailsHandler = (e) => {
    setSelectItemE(e)
    setShowDetailsUser(true)

  }

  if (userDatas && (userDatas.user.type === "admin" || userDatas.user.type === "Admin")) return (
    <>
      <div className="p-6 flex flex-col gap-6">
        <h2 className="text-2xl font-bold">دسترسی سریع</h2>
        <div className="flex gap-6 text-white flex-wrap sm:flex-nowrap">
          <div className="sm:w-1/3 w-full h-c-8 flex justify-between items-center rounded-2xl bg-c-5 relative overflow-hidden pr-11">
            <Link to="/panel/requests" className="z-10">مشاهده درخواست ها</Link>
            <div className="">
              <img
                className="absolute left-0 inset-y-0"
                src={Ellipse2}
                alt=""
              />
              <img
                className="absolute left-0 inset-y-0"
                src={Ellipse1}
                alt=""
              />
            </div>
          </div>
          <div className="sm:w-1/3 w-full h-c-8 flex justify-between items-center rounded-2xl bg-c-5 relative overflow-hidden pr-11">
            <Link to="/panel/viewExpert" className="z-10">مشاهده کارشناسان</Link>
            <div>
              <img
                className="absolute left-1 inset-y-0"
                src={Ellipse4}
                alt=""
              />
              <img
                className="absolute left-0 inset-y-0"
                src={Ellipse3}
                alt=""
              />
            </div>
          </div>
          <div className="sm:w-1/3 w-full h-c-8 flex justify-between items-center rounded-2xl bg-c-5 relative overflow-hidden pr-11">
            <Link to="/panel/viewUsers" className="z-10">مشاهده کاربران</Link>
            <div>
              <img
                className="absolute left-1 inset-y-0"
                src={Ellipse6}
                alt=""
              />
              <img
                className="absolute left-0 inset-y-0"
                src={Ellipse5}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 px-6">
        <div className="shadow-c rounded-2xl w-1/2 bg-white p-3.5 flex flex-col gap-7 z-10">
          <div className="p-2 flex justify-between items-center">
            <div className="text-lg font-bold">وضعیت کارشناسان</div>
            <img
              className="w-c-4 h-c-4"
              src={Vectorx}
              alt=""
            />
          </div>
          {
            Expert ? Expert.map(i => {
              return (
                <User avatar={(i.profilegenuine) && (i.profilegenuine.image !== null) ? `https://backend.nanotf.ir/${i.profilegenuine.image}` : "22"} date={onlyDateConversion(i.profilegenuine.created_at)} name={`${i.name} ${i.family}`}/>
              )
            } ) : <Loading />
          }
        </div>
        <div className="w-1/2 flex flex-col gap-6">
          <Counter
            logo={Vectora}
            number={allRequest ? allRequest : ""}
            title="تعداد درخواست"
          />
          <Counter
            logo={Vectora}
            number={allExpert ? allExpert : ""}
            title="تعداد کارشناس"
          />
          <Counter
            logo={Vectora}
            number={allUser ? allUser : ""}
            title="تعداد کاربر"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
