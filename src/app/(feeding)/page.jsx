import { unstable_noStore } from "next/cache";
import {
   addFeeding,
   deleteFeeding,
   getFeedings,
} from "../actions/feeding.actions";
import { format } from "date-fns";
import DeleteEntryBtn from "./deleteEntryBtn";
export default async function Home() {
   unstable_noStore();
   const { feedings } = await getFeedings();

   return (
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8  gap-16 sm:p-20">
         <section>
            <form action={addFeeding}>
               <div className="text-center space-y-2">
                  <h1>Start of feeding</h1>
                  <div className="grid grid-cols-2 gap-5">
                     <input
                        type="submit"
                        value="Left"
                        name="breastSide"
                        className="btn btn-lg"
                     />
                     <input
                        type="submit"
                        value="Right"
                        name="breastSide"
                        className="btn btn-lg"
                     />
                  </div>
               </div>
            </form>
         </section>

         <section>
            <div className="overflow-x-auto">
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
                              <tr>
                                 <td>{date}</td>
                                 <td>{time}</td>
                                 <td>{feed.breastSide}</td>
                                 <td>
                                    <DeleteEntryBtn
                                       onDeleteClick={() =>
                                          deleteFeeding(feed.id)
                                       }
                                    />
                                 </td>
                              </tr>
                           );
                        })}
                  </tbody>
               </table>
            </div>
         </section>
      </div>
   );
}
