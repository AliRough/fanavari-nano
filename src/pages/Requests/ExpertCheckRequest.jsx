import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Axios from "../../../axiosinstancs";
import StepConfirm from "../../components/modal/StepConfirm";
import Loader from "../../components/Loader/Loader";
import SendFileFirst from "../../components/ChekRequestComp/SendFileFirst";
import SendFileSec from "../../components/ChekRequestComp/SendFileSec";
import SendEvaluationReportFile from "../../components/ChekRequestComp/SendEvaluationReportFile";
import CheckReport from "../../components/modal/CheckReport";

import queryString from "query-string";
import { ToastContainer, toast } from "react-toastify";

export default function ExpertCheckRequest() {
  const reqId = useParams();
  const navigate = useNavigate();

  const [reqStatus, setReqStatus] = useState({
    // check: false,
    // assessment: false,
    // report: true,
    // commite: false,
    // credit: false,
    // fileName : null,
    // file_name1 : null,
    // file_name2 : null,
    // file_name3 : null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [updatePage, setUpdatePage] = useState(0);
  const [showStepConfirm, setShowStepConfirm] = useState(null);
  const [showCheckRep, setShowCheckRep] = useState(null);
  const [reqType, setReqType] = useState("");

  useEffect(() => {
    setIsLoading(true);
    Axios.get(`/api/v1/get_all_status/${reqId.id}`).then(async (res) => {
      console.log(res);
      setReqStatus({
        check: res.data.check,
        assessment: res.data.assessment,
        report: res.data.report,
        // report: true,
        commite: res.data.commite,
        // commite: true,
        credit: res.data.credit,
      });
      setReqType(res.data.type);
      setIsLoading(false);
      console.log(updatePage);
    });
  }, [updatePage]);

  if (isLoading) return <Loader />;
  return (
    <div className="px-5">
      {showStepConfirm !== null && (
        <StepConfirm
          action={showStepConfirm}
          requestId={reqId.id}
          close={setShowStepConfirm}
          setUpdatePage={setUpdatePage}
        />
      )}
      <ToastContainer />
      {showCheckRep !== null && (
        <CheckReport close={setShowCheckRep} reqId={reqId.id} />
      )}
      {!isLoading && (
        <div className="flex flex-wrap  justify-center items-center  mt-4">
          <div className="flex items-center">
            <p
              onClick={() =>
                setShowStepConfirm({
                  step: 1,
                  prevTest: true,
                  currentStep: reqStatus.check,
                })
              }
              className={
                reqStatus.check
                  ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 mt-2 "
                  : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 mt-2"
              }
            >
              1
            </p>
            <p
              className={
                reqStatus.check
                  ? "text-blue-800 font-bold mx-2 text-sm"
                  : "text-gray-300 font-bold mx-2 text-sm"
              }
            >
              بررسی مدارک
            </p>
          </div>
          <div className="w-10 px-2">
            <div
              className={
                reqStatus.assessment
                  ? "border-t border-2 border-blue-800 h-full rounded"
                  : "border-t border-2 border-gray-300 h-full rounded"
              }
            ></div>
          </div>
          <div className="flex items-center">
            <p
              onClick={() =>
                setShowStepConfirm({
                  step: 2,
                  prevTest: reqStatus.check,
                  currentStep: reqStatus.assessment,
                })
              }
              className={
                reqStatus.assessment
                  ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 mt-2 "
                  : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 mt-2"
              }
            >
              2
            </p>
            <p
              className={
                reqStatus.assessment
                  ? "text-blue-800 font-bold mx-2 text-sm"
                  : "text-gray-300 font-bold mx-2 text-sm"
              }
            >
              شروع ارزیابی و جلسه با مشاور فنی
            </p>
          </div>
          <div className="w-10 px-2">
            <div
              className={
                reqStatus.report
                  ? "border-t border-2 border-blue-800 h-full rounded"
                  : "border-t border-2 border-gray-300 h-full rounded"
              }
            ></div>
          </div>
          <div className="flex items-center">
            <p
              onClick={() =>
                setShowStepConfirm({
                  step: 3,
                  prevTest: reqStatus.assessment,
                  currentStep: reqStatus.report,
                })
              }
              className={
                reqStatus.report
                  ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 mt-2 "
                  : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 mt-2"
              }
            >
              3
            </p>
            <p
              className={
                reqStatus.report
                  ? "text-blue-800 font-bold mx-2 text-sm"
                  : "text-gray-300 font-bold mx-2 text-sm"
              }
            >
              گزارش ارزیابی
            </p>
          </div>
          <div className="w-10 px-2">
            <div
              className={
                reqStatus.commite
                  ? "border-t border-2 border-blue-800 h-full rounded"
                  : "border-t border-2 border-gray-300 h-full rounded"
              }
            ></div>
          </div>
          <div className="flex items-center">
            <p
              onClick={() =>
                setShowStepConfirm({
                  step: 4,
                  prevTest: reqStatus.report,
                  currentStep: reqStatus.commite,
                })
              }
              className={
                reqStatus.commite
                  ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 mt-2 "
                  : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 mt-2"
              }
            >
              4
            </p>
            <p
              className={
                reqStatus.commite
                  ? "text-blue-800 font-bold mx-2 text-sm"
                  : "text-gray-300 font-bold mx-2 text-sm"
              }
            >
              کمیته
            </p>
          </div>
          <div className="w-10 px-2">
            <div
              className={
                reqStatus.credit
                  ? "border-t border-2 border-blue-800 h-full rounded"
                  : "border-t border-2 border-gray-300 h-full rounded"
              }
            ></div>
          </div>
          <div className="flex items-center">
            <p
              onClick={() =>
                setShowStepConfirm({
                  step: 5,
                  prevTest: reqStatus.commite,
                  currentStep: reqStatus.credit,
                })
              }
              className={
                reqStatus.credit
                  ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 mt-2 "
                  : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 mt-2"
              }
            >
              5
            </p>
            <p
              className={
                reqStatus.credit
                  ? "text-blue-800 font-bold mx-2 text-sm"
                  : "text-gray-300 font-bold mx-2 text-sm"
              }
            >
              اعلام حد اعتباری
            </p>
          </div>
        </div>
      )}

      {/* ------------------------------------------   آپلود فایل مرحله 4 و 3  ------------------------------------------------------ */}
      <div className="flex py-6 flex-wrap">
        <div
          className="md:w-1/2 w-full px-2"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <SendFileFirst
            reqStatus={reqStatus}
            reqId={reqId.id}
            setUpdatePage={setUpdatePage}
          />
          <SendFileSec
            reqStatus={reqStatus}
            reqId={reqId.id}
            setUpdatePage={setUpdatePage}
          />
        </div>
        {/* ------------------------------------------   آپلود فایل مرحله 4 و 3  ------------------------------------------------------ */}

        <div className="md:w-1/2 w-full px-2">
          <SendEvaluationReportFile
            reqStatus={reqStatus}
            reqId={reqId.id}
            setUpdatePage={setUpdatePage}
          />

          <div className="pt-4 px-2">
            <div style={{ display: "flex" }} className="w-full">
              {reqStatus.check === false ? (
                <button
                  onClick={() => setShowCheckRep(true)}
                  className="w-1/2  rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs"
                >
                  گزارش ناقصی در مدارک{" "}
                </button>
              ) : (
                ""
              )}
              {reqType && (
                <Link
                  to={
                    reqType === "facilities"
                      ? `/panel/FacilitiesDocuments/${reqId.id}`
                      : `/panel/WarrantyDocuments/${reqId.id}`
                  }
                  style={{ textAlign: "center" }}
                  className={
                    reqStatus.check === false
                      ? "w-1/2 rounded-lg border border-blue-700 mt-2 text-blue-700 p-3 font-bold text-xs"
                      : "w-full rounded-lg border border-blue-700 mt-2 text-blue-700 p-3 font-bold text-xs"
                  }
                >
                  مشاهده مدارک{" "}
                </Link>
              )}
            </div>
            <div
              className="w-full"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button
                onClick={() => navigate(-1)}
                className={
                  "w-full  rounded-lg bg-blue-700 mt-2   text-white p-3 font-bold text-xs"
                }
              >
                بازگشت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
