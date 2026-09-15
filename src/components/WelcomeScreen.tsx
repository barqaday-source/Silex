import { useState } from "react";
import { ArrowRight, Globe, MessageSquare, Shield, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthScreen } from "@/components/AuthScreen";

export function WelcomeScreen() {
  const [view, setView] = useState<"welcome" | "auth">("welcome");
  const [language, setLanguage] = useState<"AR" | "EN">("AR");
  const isArabic = language === "AR";

  if (view === "auth") {
    return <AuthScreen onBackToLanding={() => setView("welcome")} />;
  }

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="flex min-h-screen flex-col justify-between bg-background px-6 py-6 text-foreground selection:bg-primary/20 sm:px-10">
      <header className="mx-auto flex w-full max-w-4xl items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-xl font-black tracking-[0.2em] text-foreground" dir="ltr">SALIX</span>
          <span className="rounded-full border border-border bg-card px-2 py-0.5 text-[10px] font-medium text-muted-foreground">صفصاف</span>
        </div>
        <button type="button" onClick={() => setLanguage((current) => current === "AR" ? "EN" : "AR")} className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition-all hover:border-primary hover:text-foreground" aria-label="Change language">
          <Globe className="size-3.5" /> <span className="font-mono text-[11px]">{language}</span>
        </button>
      </header>

      <main className="mx-auto my-auto w-full max-w-3xl py-12">
        <div className="space-y-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            <span>{isArabic ? "بيئة التشغيل الموحدة للتجارة الاجتماعية" : "Unified Business OS for Social Commerce"}</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl">
              {isArabic ? "التجارة الاجتماعية" : "Social Commerce,"}<br />
              <span className="font-normal text-muted-foreground">{isArabic ? "بمعايير عالمية آمنة." : "Redefined and Secured."}</span>
            </h1>
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              {isArabic ? "منظومة Salix تدمج المحادثات، الستوريات القابلة للشراء، حاسبة COD، ومساعد صفصاف الذكي في مكان واحد." : "Salix unifies in-app messaging, shoppable stories, cash calculators, and AI assistance into one seamless ecosystem."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-right sm:grid-cols-4 sm:text-center">
            <Feature icon={MessageSquare} title={isArabic ? "محادثات مدمجة" : "In-App Chat"} detail={isArabic ? "بدون تحويل خارجي" : "Zero external links"} />
            <Feature icon={ShoppingBag} title={isArabic ? "ستوريات 9:16" : "Shoppable Stories"} detail={isArabic ? "زر شراء مباشر" : "Instant 1-Tap checkout"} />
            <Feature icon={Shield} title={isArabic ? "حاسبة COD" : "Cash Ledger"} detail={isArabic ? "حساب المتبقي للمندوب" : "Smart change calculator"} />
            <Feature icon={Sparkles} title={isArabic ? "مجيب صفصاف" : "Salix AI"} detail={isArabic ? "خدمة عملاء هادئة" : "Quiet store assistant"} />
          </div>

          <Button type="button" onClick={() => setView("auth")} className="h-12 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90">
            <span>{isArabic ? "الدخول إلى المنصة" : "Enter Platform"}</span>
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </main>

      <footer className="text-center font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Salix SELX Inc. © 2026</footer>
    </div>
  );
}

function Feature({ icon: Icon, title, detail }: { icon: typeof MessageSquare; title: string; detail: string }) {
  return <div className="space-y-1.5 rounded-2xl border border-border bg-card p-4"><Icon className="mx-auto size-4 text-primary" /><h2 className="text-xs font-semibold text-foreground">{title}</h2><p className="text-[10px] text-muted-foreground">{detail}</p></div>;
}
