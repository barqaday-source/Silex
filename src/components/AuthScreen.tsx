import { Eye, EyeOff, Globe, Loader2, Lock, Mail, UserRound } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { lovable } from "@/integrations/lovable/index";
import { supabase } from "@/integrations/supabase/client";

type Mode = "login" | "signup";
type Language = "AR" | "EN";

export interface AuthScreenProps {
  onSuccess?: () => void;
  onBackToLanding?: () => void;
}

export function AuthScreen({ onSuccess, onBackToLanding }: AuthScreenProps) {
  const [mode, setMode] = useState<Mode>("login");
  const [language, setLanguage] = useState<Language>("AR");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const isArabic = language === "AR";
  const text = isArabic
    ? { title: mode === "signup" ? "إنشاء حساب جديد" : "تسجيل الدخول", email: "البريد الإلكتروني", password: "كلمة المرور", name: "الاسم الكامل", submit: mode === "signup" ? "إنشاء حساب" : "دخول", google: "المتابعة بواسطة Google", switchPrompt: mode === "signup" ? "لديك حساب بالفعل؟" : "لا تملك حساباً؟", switchAction: mode === "signup" ? "تسجيل الدخول" : "إنشاء حساب", back: "العودة للرئيسية", or: "أو", notice: "تم إنشاء الحساب. تحقق من بريدك الإلكتروني إذا كان التحقق مطلوباً." }
    : { title: mode === "signup" ? "Create an Account" : "Welcome Back", email: "Email address", password: "Password", name: "Full name", submit: mode === "signup" ? "Sign Up" : "Sign In", google: "Continue with Google", switchPrompt: mode === "signup" ? "Already have an account?" : "Don't have an account?", switchAction: mode === "signup" ? "Sign In" : "Sign Up", back: "Back to Landing", or: "OR", notice: "Account created. Check your email if verification is required." };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      if (mode === "signup") {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { display_name: name.trim() || email.split("@")[0] },
          },
        });
        if (signUpError) throw signUpError;
        if (data.session) onSuccess?.();
        else setNotice(text.notice);
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });
        if (signInError) throw signInError;
        onSuccess?.();
      }
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : "حدث خطأ غير متوقع";
      setError(
        /invalid login/i.test(message)
          ? isArabic ? "البريد الإلكتروني أو كلمة المرور غير صحيحة" : "Invalid email or password"
          : /already registered|already been/i.test(message)
            ? isArabic ? "هذا البريد مسجّل مسبقاً، جرّب تسجيل الدخول" : "Email already registered. Try signing in"
            : /password/i.test(message)
              ? isArabic ? "كلمة المرور يجب أن تكون 6 أحرف على الأقل" : "Password must be at least 6 characters"
              : message,
      );
    } finally {
      setBusy(false);
    }
  };

  const googleSignIn = async () => {
    setBusy(true);
    setError(null);
    setNotice(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setError(isArabic ? "تعذّر الدخول عبر Google، حاول مرة أخرى" : "Could not sign in with Google");
      setBusy(false);
      return;
    }
    if (result.redirected) return;
    setBusy(false);
    onSuccess?.();
  };

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="flex min-h-screen flex-col justify-between bg-background px-6 py-6 text-foreground selection:bg-primary/20">
      <div className="mx-auto flex w-full max-w-sm items-center justify-between">
        {onBackToLanding ? <button type="button" onClick={onBackToLanding} className="text-xs text-muted-foreground transition-colors hover:text-foreground">{text.back}</button> : <span />}
        <button type="button" onClick={() => setLanguage((current) => current === "AR" ? "EN" : "AR")} className="flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground transition-all hover:border-primary hover:text-foreground" aria-label="Change language">
          <Globe className="size-3.5" /> <span>{language}</span>
        </button>
      </div>

      <div className="mx-auto my-auto w-full max-w-sm space-y-7 py-8">
        
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary transition-transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
              <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/>
              <path d="M2 7h20"/>
              <path d="M22 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2"/>
            </svg>
          </div>
          
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold uppercase tracking-[0.25em] text-foreground">Salix</h1>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{isArabic ? "نظام التشغيل التجاري" : "Business Operating System"}</p>
            <p className="pt-3 text-sm font-bold text-foreground">{text.title}</p>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-3.5 w-full">
          {mode === "signup" && (
            <div className="relative flex items-center">
              <UserRound size={18} className="pointer-events-none absolute right-3.5 text-muted-foreground" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={text.name}
                className="w-full rounded-xl border border-input bg-card py-3.5 pr-10 pl-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                autoComplete="name"
              />
            </div>
          )}

          <div className="relative flex items-center">
              <Mail size={18} className="pointer-events-none absolute right-3.5 text-muted-foreground" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder={text.email}
              className="w-full rounded-xl border border-input bg-card py-3.5 pr-10 pl-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              autoComplete="email"
              dir="ltr"
            />
          </div>

          <div className="relative flex items-center">
              <Lock size={18} className="pointer-events-none absolute right-3.5 text-muted-foreground" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              required
              minLength={6}
              placeholder={text.password}
              className="w-full rounded-xl border border-input bg-card py-3.5 pr-10 pl-11 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              dir="ltr"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-3.5 text-muted-foreground transition hover:text-foreground"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && (
            <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-center text-xs font-semibold text-destructive">
              {error}
            </div>
          )}
          {notice && <div className="rounded-xl border border-emerald-900/60 bg-emerald-950/40 p-3 text-center text-xs font-semibold text-emerald-300">{notice}</div>}

          <Button
            type="submit" 
            size="lg" 
            disabled={busy} 
            className="h-11 w-full rounded-xl bg-primary text-sm font-medium text-primary-foreground shadow-none transition-all hover:bg-primary/90 active:scale-[0.99]"
          >
            {busy && <Loader2 className="animate-spin ml-2" />}
            {text.submit}
          </Button>

          <div className="pt-1 flex items-center gap-3 text-xs text-muted-foreground/60">
            <span className="h-px flex-1 bg-border/80" />
            <span>{text.or}</span>
            <span className="h-px flex-1 bg-border/80" />
          </div>

          <Button
            type="button"
            variant="outline" 
            size="lg" 
            disabled={busy} 
            onClick={googleSignIn} 
            className="h-11 w-full rounded-xl border-input bg-card text-sm font-normal text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.4a5.5 5.5 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.6-5.2 3.6-8.8z" />
              <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3a7.2 7.2 0 0 1-10.7-3.8H1.3v3.1A12 12 0 0 0 12 24z" />
              <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8l4-3.1z" />
              <path fill="#EA4335" d="M12 4.8c1.8 0 3.4.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1A7.2 7.2 0 0 1 12 4.8z" />
            </svg>
            {text.google}
          </Button>
        </form>

      </div>

      <div className="mx-auto w-full max-w-sm pt-4 pb-2 text-center text-xs text-muted-foreground">
        <span>{text.switchPrompt} </span>
        <button type="button" onClick={() => { setError(null); setNotice(null); setMode(mode === "login" ? "signup" : "login"); }} className="ml-1 font-medium text-primary hover:underline">{text.switchAction}</button>
      </div>

    </div>
  );
}