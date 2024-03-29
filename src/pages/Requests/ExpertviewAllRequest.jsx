import React , { useContext, useEffect, useState } from "react";
import Axios from "../../../axiosinstancs";
import { onlyDateConversion } from "../../helper/dateConversion.cjs";
import Loader from '../../components/Loader/Loader'
import { Link } from "react-router-dom";
import { UserDataContext } from "../../contexts/UserData.Provider";
import user from "../../assets/imges/user.png"
export default function ExpertviewAllRequest() {
  const {userDatas} = useContext(UserDataContext)
  const [isLoading , setIsLoading] = useState(true)
  
  const [reqDatas , setReqDatas] = useState([])
  useEffect(() => {
    Axios.get(`/api/admin/get_request_with_expert/${userDatas.user.id}`).then(async (res) => {
      console.log(res.data);
      const newA = res.data.reverse()
      setReqDatas(newA)
      setIsLoading(false)
    })
  },[])
  if (userDatas && (userDatas.user.type === "expert")) return (
    <div>
      <div className=" py-6">
        <p className="text-xl font-extrabold"> درخواست های جاری</p>
      </div>
      <div className="flex flex-wrap ">
      {isLoading && <Loader /> }
      {
          reqDatas && reqDatas.map(item => {
            // console.log(item);
            return (
              <div key={item.id} className="p-3 md:w-1/3 sm:w-1/2 w-full">
                <Link to={`/panel/expertCheckRequest/${item.request.id}`}>
                  <div className="bg-white rounded-xl p-4  ">
                    <div className="flex justify-flex-end">
                      <p className="text-sm">{onlyDateConversion(item.created_at)}</p>
                    </div>
                    <p className="text-blue-500 text-sm pt-2 ">{item.request.type === "facilities" ? "درخواست تسهیلات" : 
                                                            item.request.type === "warranty" ? "درخواست ضمانت" : "درخواست"  //` ${item.request.warranty.title}`
                    }</p>
                    {item.request.facilities[0] !== undefined && (<p className="font-bold text-sm pt-2 ">{`عنوان : ${item.request.facilities[0].title}`}</p>)}
                    {item.request.warranty[0] !== undefined && (<p className="font-bold text-sm pt-2 ">{`عنوان : ${item.request.warranty[0].title}`}</p>)}
                    <p className="font-bold text-xs text-gray-400 pb-2 ">
                        شناسه درخواست : {item.request.shenaseh}
                    </p>
                    <img src={user} alt="" className="h-8" />
                  </div>
                </Link>
              </div>
              
            )
          })
        }
      </div>
    </div>
  );
}
