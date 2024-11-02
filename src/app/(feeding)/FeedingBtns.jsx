"use client";
import cn from "../lib/twMerge";
import { addFeeding } from "../actions/feeding.actions";
import { useFormStatus } from "react-dom";

const FeedingBtns = () => {
   return (
      <div className="text-center space-y-2">
         <h1>Start of feeding</h1>
         <div className="grid grid-cols-2 gap-5">
            <form action={addFeeding}>
               <Btn side={"Left"} />
            </form>
            <form action={addFeeding}>
               <Btn side={"Right"} />
            </form>
         </div>
      </div>
   );
};

export default FeedingBtns;

const Btn = ({ side }) => {
   const { pending, data } = useFormStatus();

   return (
      <label className={cn("btn btn-lg w-full", { "btn-disabled": pending })}>
         {pending ? <span className="loading loading-dots "></span> : side}
         <input
            type="submit"
            value={side}
            name="breastSide"
            className="hidden"
         />
      </label>
   );
};
