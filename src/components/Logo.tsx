export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-gold shadow-gold">
        <span className="font-display text-xl font-black text-[#181512]">P</span>
        <span className="absolute -right-1 -bottom-1 grid h-5 w-5 place-items-center rounded-md bg-[#1E1C1A] ring-1 ring-[#F5B800]">
          <span className="font-display text-[10px] font-black text-[#F5B800]">B</span>
        </span>
      </div>
      <div className="leading-none">
        <div className="font-display text-lg font-black tracking-tight text-[#F0E8D8]">
          Pizz <span className="text-[#F5B800]">&amp;</span> Burg
        </div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-[#9E8E78]">
          Cooked with heart
        </div>
      </div>
    </div>
  );
}
