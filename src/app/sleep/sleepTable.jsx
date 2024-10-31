"use client";

import { format } from "date-fns";

const SleepTable = ({ sleepsData }) => {
   return (
      <table className="table table-zebra">
         {/* head */}
         <thead>
            <tr>
               <th>Date</th>
               <th>Time</th>
               <th>Status</th>
               <th></th>
            </tr>
         </thead>
         <tbody>
            {sleepsData
               .sort((a, b) => b.createdAt - a.createdAt)
               .map(({ status, createdAt }) => {
                  const date = format(createdAt, "dd/MM");
                  const time = format(createdAt, "HH:mm");
                  return (
                     <tr>
                        <td>{date}</td>
                        <td>{time}</td>
                        <td>{status}</td>
                     </tr>
                  );
               })}
         </tbody>
      </table>
   );
};

export default SleepTable;
