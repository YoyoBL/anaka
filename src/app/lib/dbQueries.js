"use server";

import { revalidatePath } from "next/cache";
import prisma from "../lib/db";
const pages = { feeding: "/feeding", diapers: "/diapers", sleep: "/sleep" };

export async function deleteFromDb(collection, id) {
   try {
      const deleted = await prisma[collection].delete({ where: { id } });
      revalidatePath(pages[collection]);
      return deleted;
   } catch (error) {
      console.log(error);
   }
}
