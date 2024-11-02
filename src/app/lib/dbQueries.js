"use server";

import { revalidatePath } from "next/cache";
import prisma from "../lib/db";
const pages = { feeding: "/", diapers: "/diapers", sleep: "/sleep" };

export async function deleteFromDb(collection, id) {
   try {
      const deleted = await prisma[collection].delete({ where: { id } });

      return { data: deleted, error: null };
   } catch (error) {
      console.log(error);
      return { error: error.message, data: null };
   }
}
