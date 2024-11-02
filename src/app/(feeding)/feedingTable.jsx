"use client";

import { format } from "date-fns";
import DeleteEntryBtn from "./deleteEntryBtn";

const FeedingTable = ({ feedings }) => {
   return (
      <table className="table table-zebra">
         {/* head */}
         <thead>
            <tr>
               <th>Date</th>
               <th>Time</th>
               <th>Side</th>
               <th></th>
            </tr>
         </thead>
         <tbody>
            {feedings
               .sort((a, b) => b.createdAt - a.createdAt)
               .map((feed) => {
                  const date = format(feed.createdAt, "dd/MM");
                  const time = format(feed.createdAt, "HH:mm");
                  return (
                     <tr key={feed.id} id={feed.id} className="appear">
                        <td>{date}</td>
                        <td>{time}</td>
                        <td>{feed.breastSide}</td>
                        <td>
                           <DeleteEntryBtn deleteKey="feeding" id={feed.id} />
                        </td>
                     </tr>
                  );
               })}
         </tbody>
      </table>
   );
};

export default FeedingTable;
