"use client";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { deleteFromDb } from "../lib/dbQueries";
import { deleteFeeding } from "../actions/feeding.actions";

const DeleteEntryBtn = ({ onDeleteClick }) => {
   return (
      <MinusCircleIcon
         onClick={() => onDeleteClick}
         className="size-5 cursor-pointer"
      />
   );
};

export default DeleteEntryBtn;
