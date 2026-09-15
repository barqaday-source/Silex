import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export type UserRole = "customer" | "merchant";

type AppState = {
  session: Session | null;
  role: UserRole;
  loading: boolean;
  can: {
    browseProducts: boolean;
    createOrders: boolean;
    manageStore: boolean;
    updateOrderStatus: boolean;
  };
  refreshRole: () => Promise<void>;
};

const AppStateContext = createContext<AppState | null>(null);

type ProfileRoleRow = { role?: UserRole | null };
type UntypedSupabase = { from: (table: string) => { select: (columns: string) => { eq: (column: string, value: string) => { maybeSingle: () => Promise<{ data: ProfileRoleRow | null; error: unknown }> } } } };

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [role, setRole] = useState<UserRole>("customer");
  const [loading, setLoading] = useState(true);

  const refreshRole = async () => {
    if (!session?.user.id) {
      setRole("customer");
      return;
    }
    const client = supabase as unknown as UntypedSupabase;
    const { data } = await client.from("profiles").select("role").eq("id", session.user.id).maybeSingle();
    setRole(data?.role === "merchant" ? "merchant" : "customer");
  };

  useEffect(() => {
    let mounted = true;
    void supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      setLoading(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (mounted) setSession(nextSession);
    });
    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    void refreshRole();
  }, [session?.user.id]);

  const can = role === "merchant"
    ? { browseProducts: true, createOrders: false, manageStore: true, updateOrderStatus: true }
    : { browseProducts: true, createOrders: true, manageStore: false, updateOrderStatus: false };

  return <AppStateContext.Provider value={{ session, role, loading, can, refreshRole }}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const state = useContext(AppStateContext);
  if (!state) throw new Error("useAppState must be used within AppStateProvider");
  return state;
}
