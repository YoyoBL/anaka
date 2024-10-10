import { format } from "date-fns";
import { addDiaper, getDiapers } from "../actions/diapers.actions";

const DiapersPage = async () => {
   const diapersData = await getDiapersData();

   return (
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8  gap-16 sm:p-20">
         <section>
            <form action={addDiaper}>
               <div className="text-center space-y-2">
                  <h1>Diaper Change</h1>
                  <div className="grid grid-cols-3 gap-5">
                     <label className="btn btn-lg has-[:checked]:btn-primary">
                        Pee
                        <input
                           defaultChecked
                           type="checkbox"
                           name="pee"
                           className="hidden"
                        />
                     </label>
                     <label className="btn btn-lg has-[:checked]:btn-primary">
                        Poop
                        <input type="checkbox" name="poop" className="hidden" />
                     </label>
                     <button type="submit" className="btn btn-neutral btn-lg">
                        Save
                     </button>
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
                        <th>Pee</th>
                        <th>Poop</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* row 1 */}
                     {diapersData
                        .sort((a, b) => b.createdAt - a.createdAt)
                        .map(({ pee, poop, createdAt }) => {
                           const date = format(createdAt, "dd/MM");
                           const time = format(createdAt, "HH:mm");
                           return (
                              <tr>
                                 <td>{date}</td>
                                 <td>{time}</td>
                                 <td>{pee ? "V" : "X"}</td>
                                 <td>{poop ? "V" : "X"}</td>
                              </tr>
                           );
                        })}
                  </tbody>
               </table>
            </div>
         </section>
      </div>
   );
};

export default DiapersPage;

async function getDiapersData() {
   try {
      const { data, error } = await getDiapers();
      return data;
   } catch (error) {
      return "Error while fetching diapers data" + error;
   }
}
