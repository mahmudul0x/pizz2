import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { branches } from "@/data/menu";

export type Branch = (typeof branches)[number];

interface BranchContextValue {
  selected: Branch | null;
  select: (branch: Branch) => void;
  reset: () => void;
}

const BranchContext = createContext<BranchContextValue | null>(null);

const STORAGE_KEY = "pb_selected_branch";

export function BranchProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<Branch | null>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const city = JSON.parse(raw) as string;
      return branches.find((b) => b.city === city) ?? null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (selected) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selected.city));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [selected]);

  return (
    <BranchContext.Provider
      value={{
        selected,
        select: setSelected,
        reset: () => setSelected(null),
      }}
    >
      {children}
    </BranchContext.Provider>
  );
}

export function useBranch() {
  const ctx = useContext(BranchContext);
  if (!ctx) throw new Error("useBranch must be used inside BranchProvider");
  return ctx;
}
