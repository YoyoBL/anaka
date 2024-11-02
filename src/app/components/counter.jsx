"use client";
import { formatDistanceToNow, intervalToDuration } from "date-fns";

const Counter = ({ lastFeed }) => {
   const { hours, minutes } = intervalToDuration({
      start: lastFeed,
      end: new Date(),
   });
   const formatWithZero = (number) => {
      if (Number(!number)) return "00";
      if (Number(number) < 10) return `0${number}`;
      return number;
   };

   return (
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
         <div className="flex flex-col">
            <span className=" font-mono text-5xl">
               <span>{formatWithZero(hours)}</span>
            </span>
            hours
         </div>
         <div className=" flex flex-col">
            <span className=" font-mono text-5xl">
               <span>:</span>
            </span>
         </div>
         <div className=" flex flex-col">
            <span className=" font-mono text-5xl">
               <span>{formatWithZero(minutes)}</span>
            </span>
            min
         </div>
      </div>
   );
};

export default Counter;
