const DiapersPage = () => {
   return (
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8  gap-16 sm:p-20">
         <section>
            <div className="text-center space-y-2">
               <h1>Diaper Change</h1>
               <div className="grid grid-cols-3 gap-5">
                  <button className="btn btn-lg btn-primary ">Pee</button>
                  <button className="btn btn-lg">Poop</button>
                  <button className="btn btn-lg">Save</button>
               </div>
            </div>
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
                     <tr>
                        <td>29/09</td>
                        <td>15:05</td>
                        <td>V</td>
                        <td>-</td>
                     </tr>
                     {/* row 2 */}
                  </tbody>
               </table>
            </div>
         </section>
      </div>
   );
};

export default DiapersPage;
