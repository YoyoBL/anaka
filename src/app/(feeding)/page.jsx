import { unstable_noStore } from "next/cache";
import { getFeedings } from "../actions/feeding.actions";
import FeedingTable from "./feedingTable";
import FeedingBtns from "./FeedingBtns";

export default async function Home() {
   unstable_noStore();
   const { feedings } = await getFeedings();

   return (
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8  gap-16 sm:p-20">
         <section>
            <FeedingBtns />
         </section>

         <section>
            <div className="overflow-x-auto">
               <FeedingTable feedings={feedings} />
            </div>
         </section>
      </div>
   );
}
