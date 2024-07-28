import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth } from "@/auth";
import { placeItemsActions } from "./actions";

export default async function Home() {
  const session = await auth();
  if (!session) return null;
  return (
    <main className="container mx-10 py-20">
      <h1 className="text-4xl font-bold my-5">Post an Item to sell</h1>
      <form
        action={placeItemsActions}
        className="flex flex-col items-end border p-8 rounded-2xl max-w-lg"
      >
        <Input
          type="text"
          placeholder="Name Your Item"
          name="item"
          className="max-w-lg my-1"
        />
        <Input
          type="number"
          placeholder="Starting Price"
          name="startingPrice"
          className="max-w-lg my-1"
        />
        <Button className="self-end my-2">Place Bid</Button>
      </form>
    </main>
  );
}
