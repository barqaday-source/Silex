import { Eye, EyeOff, Loader2, Lock, Mail, UserRound } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { lovable } from "@/integrations/lovable/index";
import { supabase } from "@/integrations/supabase/client";

type Mode = "login" | "signup";

export function AuthScreen() {
  const [mode, setMode] = useState<Mode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setError(null);
    try {
      if (mode === "signup") {
        const { error: signUpError } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { display_name: name.trim() || email.split("@")[0] },
          },
        });
        if (signUpError) throw signUpError;
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });
        if (signInError) throw signInError;
      }
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : "حدث خطأ غير متوقع";
      setError(
        /invalid login/i.test(message)
          ? "البريد الإلكتروني أو كلمة المرور غير صحيحة"
          : /already registered|already been/i.test(message)
            ? "هذا البريد مسجّل مسبقاً، جرّب تسجيل الدخول"
            : /password/i.test(message)
              ? "كلمة المرور يجب أن تكون 6 أحرف على الأقل"
              : message,
      );
    } finally {
      setBusy(false);
    }
  };

  const googleSignIn = async () => {
    setBusy(true);
    setError(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setError("تعذّر الدخول عبر جوجل، حاول مرة أخرى");
      setBusy(false);
      return;
    }
    if (result.redirected) return;
    setBusy(false);
  };

  return (
    <div dir="rtl" className="flex min-h-screen flex-col items-center justify-between bg-background px-6 py-10 text-foreground selection:bg-primary/20">
      
      <div className="w-full max-w-sm flex-1 flex flex-col justify-center space-y-8 my-auto">
        
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
              <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/>
              <path d="M2 7h20"/>
              <path d="M22 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2"/>
            </svg>
          </div>
          
          <div className="space-y-1">
            <h1 className="text-3xl font-black tracking-tight text-foreground">صفصاف</h1>
            <p className="text-sm font-medium text-muted-foreground">
              Salix · تجارتك الاجتماعية بذكاء
            </p>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-3.5 w-full">
          {mode === "signup" && (
            <div className="relative flex items-center">
              <UserRound size={18} className="absolute right-3.5 text-muted-foreground/70 pointer-events-none" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="الاسم الكامل"
                className="w-full rounded-2xl border border-input bg-background/50 py-3.5 pr-10 pl-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                autoComplete="name"
              />
            </div>
          )}

          <div className="relative flex items-center">
            <Mail size={18} className="absolute right-3.5 text-muted-foreground/70 pointer-events-none" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="البريد الإلكتروني"
              className="w-full rounded-2xl border border-input bg-background/50 py-3.5 pr-10 pl-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              autoComplete="email"
              dir="ltr"
            />
          </div>

          <div className="relative flex items-center">
            <Lock size={18} className="absolute right-3.5 text-muted-foreground/70 pointer-events-none" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              required
              minLength={6}
              placeholder="كلمة المرور"
              className="w-full rounded-2xl border border-input bg-background/50 py-3.5 pr-10 pl-11 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              dir="ltr"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-3.5 text-muted-foreground/70 hover:text-foreground transition"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && (
            <div className="rounded-xl bg-destructive/10 p-3 text-center text-xs font-semibold text-destructive">
              {error}
            </div>
          )}

          <Button 
            type="submit" 
            size="lg" 
            disabled={busy} 
            className="h-12 w-full rounded-2xl text-base font-bold shadow-sm transition-all active:scale-[0.99]"
          >
            {busy && <Loader2 className="animate-spin ml-2" />}
            {mode === "login" ? "تسجيل الدخول" : "إنشاء الحساب"}
          </Button>

          <div className="pt-1 flex items-center gap-3 text-xs text-muted-foreground/60">
            <span className="h-px flex-1 bg-border/80" />
            <span>أو</span>
            <span className="h-px flex-1 bg-border/80" />
          </div>

          <Button 
            type="button"
            variant="outline" 
            size="lg" 
            disabled={busy} 
            onClick={googleSignIn} 
            className="h-12 w-full rounded-2xl text-sm font-semibold gap-2 border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.4a5.5 5.5 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.6-5.2 3.6-8.8z" />
              <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3a7.2 7.2 0 0 1-10.7-3.8H1.3v3.1A12 12 0 0 0 12 24z" />
              <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8l4-3.1z" />
              <path fill="#EA4335" d="M12 4.8c1.8 0 3.4.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1A7.2 7.2 0 0 1 12 4.8z" />
            </svg>
            المتابعة عبر جوجل
          </Button>
        </form>

      </div>

      <div className="w-full max-w-sm pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setError(null);
            setMode(mode === "login" ? "signup" : "login");
          }}
          className="h-12 w-full rounded-2xl text-sm font-bold border-primary/30 text-primary hover:bg-primary/5 transition-all"
        >
          {mode === "login" ? "إنشاء حساب جديد" : "لديك حساب بالفعل؟ تسجيل الدخول"}
        </Button>
      </div>

    </div>
  );
}