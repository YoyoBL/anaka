"use client";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { deleteFromDb } from "../lib/dbQueries";
import { deleteFeeding } from "../actions/feeding.actions";

const DeleteEntryBtn = ({ deleteKey = "feeding", id }) => {
   return (
      <MinusCircleIcon
         onClick={() => deleteFromDb(deleteKey, id)}
         className="size-5 cursor-pointer"
      />
   );
};

export default DeleteEntryBtn;
