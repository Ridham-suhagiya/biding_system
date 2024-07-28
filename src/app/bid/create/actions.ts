'use server'

import {database} from "@/db/database";
import {items} from "@/db/schema";
import { revalidatePath } from "next/cache";
import {auth} from "@/auth";
import { get } from "lodash";
import { redirect } from "next/navigation";


export const placeItemsActions = async (formData: FormData) => {
    "use server";
    const session = await auth();
    if (!session){
        throw new Error("Unauthroized") 
    }
    const item = formData.get("item") as string;
    const rupee = formData.get("startingPrice") as string;
    await database
      .insert(items)
      .values({ name: item, userId: get(session, "user.id", ""), startingPrice: parseInt(rupee) });
    redirect("/")
}