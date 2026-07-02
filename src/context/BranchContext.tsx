import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { branches } from "@/data/menu";

export type Branch = (typeof branches)[number];

interface BranchContextValue {
  selected: Branch | null;
  hydrated: boolean;
  select: (branch: Branch) => void;
  reset: () => void;
}

const BranchContext = createContext<BranchContextValue | null>(null);

const STORAGE_KEY = "pb_selected_branch";

export function BranchProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<Branch | null>(null);
  const [hydrated, setHydrated] = useState(false);

  // Read persisted branch only on the client to avoid SSR/client hydration mismatches.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const city = raw ? (JSON.parse(raw) as string) : null;
      const branch = city ? branches.find((b) => b.city === city) ?? null : null;
      setSelected(branch);
    } catch {
      setSelected(null);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    if (selected) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selected.city));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [selected, hydrated]);

  return (
    <BranchContext.Provider
      value={{
        selected,
        hydrated,
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
