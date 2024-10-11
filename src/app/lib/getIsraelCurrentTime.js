import { addHours } from "date-fns";

export function getIsraelCurrentTime() {
   return addHours(new Date(), 3);
}
