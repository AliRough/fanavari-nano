import React from 'react'

export default function S4active_wView({ data , close }) {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-transparent fixed inset-0 flex flex-col items-center justify-center z-10">
        <table className=" max-w-[1200px] rounded-xl overflow-hidden">
          <thead>
              <tr className=" sticky top-0 text-xs border-b ">
                  <th className="bg-white p-3  ">رديف </th>

                  <th className="bg-white p-3  ">
                      نام بانک و شعبه/ نام صندوق و یا سایر مراکز ارائه دهنده تسهیلات{" "}
                  </th>
                  <th className="bg-white p-3  ">
                      مبلغ ضمانتنامه دریافتی(میلیون ریال){" "}
                  </th>
                  <th className="bg-white p-3  ">موضوع قرارداد </th>
                  <th className="bg-white p-3  ">نهاد دریافت کننده ضمانتنامه </th>
                  <th className="bg-white p-3  ">نوع ضمانت نامه </th>
                  <th className="bg-white p-3  ">
                      نوع وثیقه سپرده شده جهت دریافت ضمانت نامه{" "}
                  </th>
                  <th className="bg-white p-3  ">
                      میزان ودیعه سپرده شده جهت دریافت ضمانت نامه{" "}
                  </th>
                  <th className="bg-white p-3  ">تاریخ اخذ </th>
                  <th className="bg-white p-3  ">تاریخ سررسید نهایی </th>
              </tr>
          </thead>
          <tbody>
              {data.map((item, index) => {
                      return (
                          <tr key={index} className="bg-white  border-b">
                              <td className="p-4 text-xs text-gray-800 font-bold">
                                  {index + 1}
                              </td>
                              <td className="p-2 text-xs text-gray-600 font-bold text-center">
                                <span className='max-w-[135px]'>{item.name}</span>
                              </td>
                              <td className="p-2 text-xs text-gray-600 font-bold text-center">
                                <span className='max-w-[135px]'>{item.amount}</span>
                              </td>
                              <td className="p-2 text-xs text-gray-600 font-bold text-center">
                                <span className='max-w-[135px]'>{item.subject}</span>
                              </td>

                              <td className="p-2 text-xs text-gray-600 font-bold text-center">
                                <span className='max-w-[135px]'>{item.institution}</span>
                              </td>

                              <td className="p-2 text-xs text-gray-600 font-bold text-center">
                                <span className='max-w-[135px]'>{item.type_w}</span>
                              </td>
                              <td className="p-2 text-xs text-gray-600 font-bold text-center">
                                <span className='max-w-[135px]'>{item.type_collateral}</span>
                              </td>
                              <td className="p-2 text-xs text-gray-600 font-bold text-center">
                                <span className='max-w-[135px]'>{item.deposit_amount}</span>
                              </td>
                              <td className="p-2 text-xs text-gray-600 font-bold text-center">
                                <span className='max-w-[135px]'>{item.received}</span>
                              </td>
                              <td className="p-2 text-xs text-gray-600 font-bold text-center">
                                <span className='max-w-[135px]'>{item.due_date}</span>
                              </td>
                          </tr>
                      )
                  })
              }
          </tbody>
        </table>
        <button onClick={() => close(null)}  className="m-1 rounded-lg bg-white mt-2 p-3 font-bold text-xs hover:text-red-500" >بستن</button>
    </div>
  )
}
