import { unstable_noStore } from "next/cache";
import { addSleep, getSleeps } from "../actions/sleep.actions";
import SleepTable from "./sleepTable";

const SleepPage = async () => {
   unstable_noStore();

   const sleepsData = await getSleepData();

   return (
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8  gap-16 sm:p-20">
         <section>
            <form action={addSleep}>
               <div className="text-center space-y-2">
                  <h1>Sleep</h1>
                  <div className="grid grid-cols-2 gap-5">
                     <label className="btn btn-lg has-[:checked]:btn-primary">
                        Start
                        <input
                           defaultChecked
                           type="submit"
                           name="sleep-status"
                           value="start"
                           className="hidden"
                        />
                     </label>

                     <label className="btn btn-lg has-[:checked]:btn-primary">
                        End
                        <input
                           type="submit"
                           name="sleep-status"
                           value="end"
                           className="hidden"
                        />
                     </label>
                  </div>
               </div>
            </form>
         </section>

         <section>
            <div className="overflow-x-auto">
               <SleepTable sleepsData={sleepsData} />
            </div>
         </section>
      </div>
   );
};

export default SleepPage;

async function getSleepData() {
   try {
      const { data, error } = await getSleeps();
      return data;
   } catch (error) {
      return "Error while fetching sleep data" + error;
   }
}
