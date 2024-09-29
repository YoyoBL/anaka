"use server";

import { revalidatePath } from "next/cache";
import prisma from "../lib/db";

export async function getFeedings() {
   try {
      const feedings = await prisma.feeding.findMany();

      return { feedings, error: null };
   } catch (error) {
      console.log(error);
      return { error: error.message, data: null };
   }
}

export async function addFeeding(data) {
   const breastSide = data.get("breastSide").toLowerCase();

   try {
      const newFeed = await prisma.feeding.create({ data: { breastSide } });
      revalidatePath("/");
      return { newFeed, error: null };
   } catch (error) {
      console.log(error);

      return { error: error.message, data: null };
   }
}
