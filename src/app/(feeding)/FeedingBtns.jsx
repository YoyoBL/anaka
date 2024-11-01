"use client";
import { useEffect } from "react";
import { addFeeding } from "../actions/feeding.actions";
import { useFormStatus } from "react-dom";

const FeedingBtns = () => {
   const { pending } = useFormStatus();
   useEffect(() => {
      console.log(pending);
   }, [pending]);

   return (
      <form action={addFeeding}>
         <div className="text-center space-y-2">
            <h1>Start of feeding</h1>
            <div className="grid grid-cols-2 gap-5">
               <input
                  type="submit"
                  value={pending ? "" : "Left"}
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
   );
};

export default FeedingBtns;
