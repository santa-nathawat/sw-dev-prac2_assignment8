import CardPanel from "@/components/CardPanel";

export default function VenuePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-zinc-950">
      <section className="mx-auto max-w-6xl px-6 pt-12 sm:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">Find your place</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Explore our venues</h1>
        <p className="mt-4 max-w-2xl text-zinc-600">Choose a space that makes your next gathering feel special.</p>
      </section>
      <CardPanel />
    </main>
  );
}
