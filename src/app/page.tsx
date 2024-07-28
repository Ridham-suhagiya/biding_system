import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { database } from "@/db/database";
import { items } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { get } from "lodash";

export default async function Home() {
  const session = await auth();
  const itemData = await database.query.items.findMany();
  if (!session) return null;
  return (
    <main className="container mx-10 py-20">
      <h1 className="text-4xl font-bold my-5">Items for Sale</h1>
      <div className="grid grid-cols-4 border rounded-2xl gap-10 p-8">
        {itemData.map((item: any) => (
          <div key={item.id} className="border p-8 rounded-lg">
            {item.name} Price$: {item.startingPrice}
          </div>
        ))}
      </div>
    </main>
  );
}
