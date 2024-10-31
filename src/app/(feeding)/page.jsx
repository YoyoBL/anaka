import { unstable_noStore } from "next/cache";
import {
   addFeeding,
   deleteFeeding,
   getFeedings,
} from "../actions/feeding.actions";
import DeleteEntryBtn from "./deleteEntryBtn";
import FeedingTable from "./feedingTable";

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
               <FeedingTable feedings={feedings} />
            </div>
         </section>
      </div>
   );
}
