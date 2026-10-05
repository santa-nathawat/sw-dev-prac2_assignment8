import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { venueById } from "@/data/venues";

export default async function VenueDetailPage({ params }: { params: Promise<{ vid: string }> }) {
  const { vid } = await params;
  const venue = venueById.get(vid);

  if (!venue) notFound();

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-10 text-zinc-950 sm:px-10">
      <article className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl">
        <Image src={venue.imgSrc} alt={venue.venueName} width={1600} height={1000} priority className="h-[320px] w-full object-cover sm:h-[480px]" />
        <div className="p-7 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">Venue {venue.vid}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{venue.venueName}</h1>
          <p className="mt-3 font-medium text-zinc-500">{venue.location}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-700">{venue.description}</p>
          <Link href="/venue" className="mt-8 inline-flex rounded-full bg-zinc-900 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800">← Back to all venues</Link>
        </div>
      </article>
    </main>
  );
}
