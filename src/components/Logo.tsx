export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-gold shadow-gold">
        <span className="font-display text-xl font-black text-jet">P</span>
        <span className="absolute -right-1 -bottom-1 grid h-5 w-5 place-items-center rounded-md bg-jet ring-1 ring-gold">
          <span className="font-display text-[10px] font-black text-gold">B</span>
        </span>
      </div>
      <div className="leading-none">
        <div className="font-display text-lg font-black tracking-tight">
          Pizz <span className="text-gold">&amp;</span> Burg
        </div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Cooked with heart
        </div>
      </div>
    </div>
  );
}
