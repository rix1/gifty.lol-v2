import { Circle, CircleMember } from "../shared/api.ts";
import { z } from "https://esm.sh/zod@3.22.4";

export const db = await Deno.openKv();
export const addUserSchema = z.object({
  name: z.string().nullable(),
  wishlist: z.array(z.object({
    name: z.string(),
    description: z.string(),
    url: z.string(),
  })),
});
export type AddUserSchema = z.infer<typeof addUserSchema>;

export async function loadCircle(
  id: string,
  consistency: "strong" | "eventual",
): Promise<Circle> {
  const out: Circle = {
    members: [],
  };

  const it = db.list({ prefix: ["circle", id] }, {
    reverse: true,
    consistency,
  });

  for await (const entry of it) {
    const item = entry.value as CircleMember;
    item.id = entry.key[entry.key.length - 1] as string;
    item.versionstamp = entry.versionstamp!;
    out.members.push(item);
  }

  return out;
}

export async function addUser(
  circleId: string,
  user: AddUserSchema,
): Promise<void> {
  // ensure no user with the same name exists
  const currentCircle = await db.get<Circle>({ prefix: ["circle", circleId] });

  const op = db.atomic();

  const members = currentCircle?.members ?? [];

  members.push({
    id: crypto.randomUUID(),
    ...user,
  });

  op.set(["circle", circleId], members);

  await op.commit();
}
