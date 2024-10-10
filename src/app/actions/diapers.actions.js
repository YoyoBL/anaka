"use server";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";

export async function getDiapers() {
   try {
      const diapers = await prisma.diaper.findMany();
      return { data: diapers, error: null };
   } catch (error) {
      console.log(error);
      return { error: error.message, data: null };
   }
}

export async function addDiaper(formData) {
   //format data to boolean
   const data = { pee: !!formData.get("pee"), poop: !!formData.get("poop") };

   try {
      const newDiaper = await prisma.diaper.create({ data });
      revalidatePath("/diapers");

      return { data: newDiaper, error: null };
   } catch (error) {
      console.log(error);

      return { error: error.message, data: null };
   }
}
