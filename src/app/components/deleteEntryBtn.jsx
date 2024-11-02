"use client";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { deleteFromDb } from "../lib/dbQueries";
import { useFormStatus } from "react-dom";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

const pages = { feeding: "/", diapers: "/diapers", sleep: "/sleep" };

const DeleteEntryBtn = ({ deleteKey = "feeding", id }) => {
   const router = useRouter();

   const deleteBinded = deleteFromDb.bind(undefined, deleteKey, id);
   async function handleDelete() {
      try {
         const res = await deleteBinded();
         if (res.data) {
            document.getElementById(id).classList.add("disappear");
            setTimeout(() => {
               router.refresh();
            }, 500);
         }
      } catch (error) {
         console.error(error);
      }
   }

   return (
      <form action={handleDelete}>
         <DeleteBtn />
      </form>
   );
};

export default DeleteEntryBtn;

const DeleteBtn = () => {
   const { pending } = useFormStatus();

   return (
      <button type="submit">
         {!pending ? (
            <MinusCircleIcon className="size-5 cursor-pointer" />
         ) : (
            <span className="loading loading-spinner loading-xs"></span>
         )}
      </button>
   );
};
