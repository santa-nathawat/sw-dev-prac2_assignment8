import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/95 px-6 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between">
        <div className="flex items-center gap-2">
          <TopMenuItem href="/" label="Home" />
          <TopMenuItem href="/venue" label="Venues" />
        </div>
        <span className="flex items-center gap-2 font-bold tracking-tight text-emerald-900" aria-label="Venue Explorer">
          <span className="grid size-9 place-items-center rounded-xl bg-emerald-700 text-lg text-white">V</span>
          Venue Explorer
        </span>
      </nav>
    </header>
  );
}
