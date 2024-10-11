"use server";

import { revalidatePath } from "next/cache";
import prisma from "../lib/db";
import { getIsraelCurrentTime } from "../lib/getIsraelCurrentTime";

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
      createdAt: getIsraelCurrentTime(),
   };

   try {
      const newFeed = await prisma.feeding.create({ data });
      revalidatePath("/");
      return { newFeed, error: null };
   } catch (error) {
      console.log(error);

      return { error: error.message, data: null };
   }
}
