import ArenaClient from "./ArenaClient";

export default async function ArenaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ unwrap Promise here

  return <ArenaClient id={id} />;
}
