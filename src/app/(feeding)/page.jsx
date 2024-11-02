import { unstable_noStore } from "next/cache";
import { getFeedings } from "../actions/feeding.actions";
import FeedingTable from "../components/feedingTable";
import FeedingBtns from "../components/FeedingBtns";
import Counter from "../components/counter";

export default async function Home() {
   unstable_noStore();
   const { feedings } = await getFeedings();
   const lastFeed = feedings.sort((a, b) => b.createdAt - a.createdAt)[0];

   return (
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8  gap-16 sm:p-20">
         <section>
            <FeedingBtns />
         </section>

         <section>
            <h2 className="text-center opacity-70">Time since last feeding</h2>
            <Counter lastFeed={lastFeed.createdAt} />
         </section>

         <section>
            <div className="overflow-x-auto">
               <FeedingTable feedings={feedings} />
            </div>
         </section>
      </div>
   );
}
