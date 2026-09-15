import { Eye, EyeOff, Loader2, Lock, Mail, UserRound } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { lovable } from "@/integrations/lovable/index";
import { supabase } from "@/integrations/supabase/client";

type Mode = "login" | "signup";

export function AuthScreen() {
  const [mode, setMode] = useState<Mode>("login");
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isAr = lang === "ar";

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
          ? (isAr ? "البريد الإلكتروني أو كلمة المرور غير صحيحة" : "Invalid email or password")
          : /already registered|already been/i.test(message)
            ? (isAr ? "هذا البريد مسجّل مسبقاً، جرّب تسجيل الدخول" : "Email already registered. Try logging in.")
            : /password/i.test(message)
              ? (isAr ? "كلمة المرور يجب أن تكون 6 أحرف على الأقل" : "Password must be at least 6 characters")
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
      setError(isAr ? "تعذّر الدخول عبر جوجل، حاول مرة أخرى" : "Could not sign in with Google");
      setBusy(false);
      return;
    }
    if (result.redirected) return;
    setBusy(false);
  };

  return (
    <div 
      dir={isAr ? "rtl" : "ltr"} 
      className="flex min-h-screen flex-col items-center justify-between bg-background px-6 py-8 text-foreground selection:bg-primary/20"
    >
      {/* تبديل اللغة EN | AR */}
      <div className="flex items-center gap-1.5 text-xs font-semibold pt-2 tracking-wider">
        <button
          type="button"
          onClick={() => setLang("ar")}
          className={`transition-colors ${isAr ? "text-primary font-bold" : "text-muted-foreground/60 hover:text-foreground"}`}
        >
          AR
        </button>
        <span className="text-muted-foreground/30">|</span>
        <button
          type="button"
          onClick={() => setLang("en")}
          className={`transition-colors ${!isAr ? "text-primary font-bold" : "text-muted-foreground/60 hover:text-foreground"}`}
        >
          EN
        </button>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="w-full max-w-sm flex-1 flex flex-col justify-center space-y-6 my-auto">
        
        {/* هوية سيلكس */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="text-primary transition-transform duration-300 hover:scale-105">
            <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12L20 5L32 12V28L20 35L8 28V12Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
              <path d="M20 5V35" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3"/>
              <path d="M12 18L20 22L28 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-2xl font-black tracking-widest text-foreground uppercase">
            SALIX
          </h1>
        </div>

        {/* نموذج الإدخال */}
        <form onSubmit={submit} className="space-y-3 w-full">
          {mode === "signup" && (
            <div className="relative flex items-center">
              <UserRound size={18} className={`absolute ${isAr ? "right-4" : "left-4"} text-muted-foreground/60 pointer-events-none`} />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={isAr ? "الاسم الكامل" : "Full Name"}
                className={`w-full rounded-2xl border border-input bg-muted/20 py-3.5 ${isAr ? "pr-11 pl-4" : "pl-11 pr-4"} text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary focus:bg-background focus:ring-1 focus:ring-primary`}
                autoComplete="name"
              />
            </div>
          )}

          <div className="relative flex items-center">
            <Mail size={18} className={`absolute ${isAr ? "right-4" : "left-4"} text-muted-foreground/60 pointer-events-none`} />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder={isAr ? "اسم المستخدم أو البريد الإلكتروني" : "Username or Email"}
              className={`w-full rounded-2xl border border-input bg-muted/20 py-3.5 ${isAr ? "pr-11 pl-4" : "pl-11 pr-4"} text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary focus:bg-background focus:ring-1 focus:ring-primary`}
              autoComplete="email"
              dir="ltr"
            />
          </div>

          <div className="relative flex items-center">
            <Lock size={18} className={`absolute ${isAr ? "right-4" : "left-4"} text-muted-foreground/60 pointer-events-none`} />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              required
              minLength={6}
              placeholder={isAr ? "كلمة السر" : "Password"}
              className={`w-full rounded-2xl border border-input bg-muted/20 py-3.5 ${isAr ? "pr-11 pl-11" : "pl-11 pr-11"} text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary focus:bg-background focus:ring-1 focus:ring-primary`}
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              dir="ltr"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute ${isAr ? "left-4" : "right-4"} text-muted-foreground/60 hover:text-foreground transition`}
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

          {/* زر العملية الرئيسي */}
          <Button 
            type="submit" 
            disabled={busy} 
            className="h-11 w-full rounded-full text-sm font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all active:scale-[0.98] mt-1"
          >
            {busy && <Loader2 className={`animate-spin ${isAr ? "ml-2" : "mr-2"}`} size={16} />}
            {mode === "login" ? (isAr ? "تسجيل الدخول" : "Log In") : (isAr ? "إنشاء الحساب" : "Sign Up")}
          </Button>

          {/* الفاصل */}
          <div className="py-2 flex items-center gap-3 text-xs text-muted-foreground/50">
            <span className="h-px flex-1 bg-border" />
            <span>{isAr ? "أو" : "OR"}</span>
            <span className="h-px flex-1 bg-border" />
          </div>

          {/* زر تسجيل دخول جوجل */}
          <Button 
            type="button"
            variant="outline" 
            disabled={busy} 
            onClick={googleSignIn} 
            className="h-11 w-full rounded-full text-sm font-semibold gap-2 border-input bg-background hover:bg-accent"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.4a5.5 5.5 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.6-5.2 3.6-8.8z" />
              <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3a7.2 7.2 0 0 1-10.7-3.8H1.3v3.1A12 12 0 0 0 12 24z" />
              <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8l4-3.1z" />
              <path fill="#EA4335" d="M12 4.8c1.8 0 3.4.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1A7.2 7.2 0 0 1 12 4.8z" />
            </svg>
            {isAr ? "المتابعة باستخدام Google" : "Continue with Google"}
          </Button>
        </form>

      </div>

      {/* رابط التبديل السفلي: بدون إطار وبخط صغير */}
      <div className="w-full max-w-sm pt-4 pb-2 text-center">
        <p className="text-xs text-muted-foreground font-medium">
          {mode === "login" ? (
            <>
              {isAr ? "ليس لديك حساب؟ " : "Don't have an account? "}
              <button
                type="button"
                onClick={() => {
                  setError(null);
                  setMode("signup");
                }}
                className="font-bold text-primary hover:underline transition-all"
              >
                {isAr ? "إنشاء حساب" : "Sign Up"}
              </button>
            </>
          ) : (
            <>
              {isAr ? "لديك حساب بالفعل؟ " : "Already have an account? "}
              <button
                type="button"
                onClick={() => {
                  setError(null);
                  setMode("login");
                }}
                className="font-bold text-primary hover:underline transition-all"
              >
                {isAr ? "تسجيل الدخول" : "Log In"}
              </button>
            </>
          )}
        </p>
      </div>

    </div>
  );
}