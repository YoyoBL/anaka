"use server";

import prisma from "../lib/db";

export async function deleteFromDb(collection, id) {
   const deleted = await prisma[collection].delete({ where: { id } });
   return deleted;
}
