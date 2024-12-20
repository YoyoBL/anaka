"use server";

import { revalidatePath } from "next/cache";
import prisma from "../lib/db";
import { getIsraelCurrentTime } from "../lib/getIsraelCurrentTime";
import { deleteFromDb } from "../lib/dbQueries";

export async function getFeedings() {
   try {
      const feedings = await prisma.feeding.findMany();

      return { feedings, error: null };
   } catch (error) {
      console.log(error);
      return { error: error.message, data: null };
   }
}

export async function addFeeding(formData) {
   const breastSide = formData.get("breastSide").toLowerCase();
   const data = {
      breastSide,
   };

   try {
      const newFeed = await prisma.feeding.create({ data });
      revalidatePath("/", "page");
      return { newFeed, error: null };
   } catch (error) {
      console.log(error);

      return { error: error.message, data: null };
   }
}

export async function deleteFeeding(id) {
   try {
      const deleted = await deleteFromDb("feeding", id);
      console.log(deleted);

      revalidatePath("/");
      console.log("updated");

      return {
         data: deleted,
         message: "Feeding deleted successfully",
         error: null,
      };
   } catch (error) {
      console.log(error);
      return { error: error.message, data: null };
   }
}
