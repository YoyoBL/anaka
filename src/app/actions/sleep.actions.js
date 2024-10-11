"use server";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";
import { getIsraelCurrentTime } from "../lib/getIsraelCurrentTime";

export async function getSleeps() {
   try {
      const sleeps = await prisma.sleep.findMany();
      return { data: sleeps, error: null };
   } catch (error) {
      console.log(error);
      return { error: error.message, data: null };
   }
}

export async function addSleep(formData) {
   getIsraelCurrentTime();
   const data = {
      status: formData.get("sleep-status"),
      createdAt: getIsraelCurrentTime(),
   };

   try {
      const newSleep = await prisma.sleep.create({ data });

      revalidatePath("/sleep");

      return { data: newSleep, error: null };
   } catch (error) {
      console.log(error);

      return { error: error.message, data: null };
   }
}
