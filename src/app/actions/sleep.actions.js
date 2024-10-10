"use server";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";

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
   const data = formData.get("sleep-status");

   try {
      const newSleep = await prisma.sleep.create({ data: { status: data } });

      revalidatePath("/sleep");

      return { data: newSleep, error: null };
   } catch (error) {
      console.log(error);

      return { error: error.message, data: null };
   }
}
