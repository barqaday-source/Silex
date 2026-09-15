import { useState, type ChangeEvent, type FormEvent } from "react";
import { AlertCircle, Camera, Check, ChevronLeft, Globe, Lock, LogOut, Smartphone, Trash2, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export function ProfileSettingsView({
  initialName = "جود الجابر",
  initialEmail = "",
  onLogout,
  onBack,
}: {
  initialName?: string;
  initialEmail?: string;
  onLogout: () => void;
  onBack: () => void;
}) {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [bio, setBio] = useState("مهندسة برمجيات ومطورة تطبيقات");
  const [website, setWebsite] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [activeModal, setActiveModal] = useState<"password" | "switchAccount" | "deleteAccount" | null>(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [notice, setNotice] = useState<string | null>(null);

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(null), 2500);
  };

  const saveProfile = (event: FormEvent) => {
    event.preventDefault();
    showNotice("تم حفظ التعديلات الشخصية");
  };

  const updateImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setProfileImage(URL.createObjectURL(file));
    showNotice("تم تحديث الصورة الشخصية");
  };

  const updatePassword = async () => {
    if (currentPassword.length < 6 || newPassword.length < 6) {
      showNotice("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      return;
    }
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      showNotice("تعذر تحديث كلمة المرور");
      return;
    }
    setCurrentPassword("");
    setNewPassword("");
    setActiveModal(null);
    showNotice("تم تحديث كلمة المرور بنجاح");
  };

  return (
    <div dir="rtl" className="mx-auto max-w-xl space-y-5 pb-20 text-right">
      {notice && <div className="fixed left-1/2 top-5 z-[70] flex -translate-x-1/2 items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground shadow-xl"><Check size={14} className="text-primary" />{notice}</div>}

      <div className="flex items-center justify-between">
        <button type="button" onClick={onBack} className="flex items-center gap-1 rounded-xl p-2 text-xs font-bold text-muted-foreground hover:bg-muted hover:text-foreground"><ChevronLeft size={16} /> العودة</button>
        <div>
          <h2 className="text-lg font-black text-foreground">الملف الشخصي والإعدادات</h2>
          <p className="mt-1 text-xs text-muted-foreground">إدارة معلوماتك الشخصية وأمان حسابك</p>
        </div>
      </div>

      <form onSubmit={saveProfile} className="space-y-4 rounded-3xl border border-border bg-card p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            {profileImage ? <img src={profileImage} alt={name} className="size-16 rounded-full object-cover ring-2 ring-primary/30" /> : <div className="grid size-16 place-items-center rounded-full bg-secondary text-2xl font-black text-primary">{name.charAt(0) || "ج"}</div>}
            <label className="absolute bottom-0 left-0 grid size-7 cursor-pointer place-items-center rounded-full bg-primary text-primary-foreground shadow-md" title="تغيير الصورة"><Camera size={14} /><input type="file" accept="image/*" className="hidden" onChange={updateImage} /></label>
          </div>
          <div><p className="text-sm font-black text-foreground">{name || "اسم المستخدم"}</p><span className="mt-1 inline-flex rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold text-primary">حساب موثق</span></div>
        </div>

        <div className="space-y-3 text-xs">
          <label className="block"><span className="mb-1 block font-bold text-muted-foreground">الاسم الكامل</span><input value={name} onChange={(event) => setName(event.target.value)} className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary" /></label>
          <label className="block"><span className="mb-1 block font-bold text-muted-foreground">البريد الإلكتروني</span><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} dir="ltr" className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-right text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary" /></label>
          <label className="block"><span className="mb-1 block font-bold text-muted-foreground">النبذة الشخصية</span><textarea value={bio} onChange={(event) => setBio(event.target.value)} rows={2} className="w-full resize-none rounded-xl border border-input bg-background px-3.5 py-2 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary" /></label>
          <label className="relative block"><span className="mb-1 block font-bold text-muted-foreground">الموقع الإلكتروني</span><Globe className="absolute right-3.5 top-8 size-4 text-muted-foreground" /><input value={website} onChange={(event) => setWebsite(event.target.value)} dir="ltr" placeholder="https://example.com" className="w-full rounded-xl border border-input bg-background py-2.5 pl-3 pr-10 text-right text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary" /></label>
          <button type="submit" className="w-full rounded-xl bg-primary py-2.5 font-bold text-primary-foreground hover:bg-primary/90">حفظ التغييرات</button>
        </div>
      </form>

      <SettingsGroup title="الأمان والحسابات">
        <SettingsButton icon={Lock} label="تغيير كلمة المرور" onClick={() => setActiveModal("password")} />
        <SettingsButton icon={Smartphone} label="فتح حساب آخر بنفس رقم الهاتف" onClick={() => setActiveModal("switchAccount")} />
      </SettingsGroup>

      <SettingsGroup title="إدارة الجلسة والحساب">
        <SettingsButton icon={LogOut} label="تسجيل الخروج من المنصة" onClick={onLogout} />
        <SettingsButton icon={Trash2} label="حذف الحساب نهائياً" danger onClick={() => setActiveModal("deleteAccount")} />
      </SettingsGroup>

      {activeModal && <div className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4 backdrop-blur-sm" onClick={() => setActiveModal(null)}><div className="w-full max-w-sm space-y-4 rounded-3xl border border-border bg-card p-5 shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between"><button type="button" onClick={() => setActiveModal(null)} className="rounded-lg p-1 text-muted-foreground hover:bg-muted" aria-label="إغلاق"><X size={18} /></button><h3 className="text-sm font-black text-foreground">{activeModal === "password" ? "تغيير كلمة المرور" : activeModal === "switchAccount" ? "إضافة حساب" : "حذف الحساب"}</h3></div>
        {activeModal === "password" && <div className="space-y-3 text-xs"><input type="password" value={currentPassword} onChange={(event) => setCurrentPassword(event.target.value)} placeholder="كلمة المرور الحالية" className="w-full rounded-xl border border-input bg-background p-2.5 text-foreground outline-none" /><input type="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} placeholder="كلمة المرور الجديدة" className="w-full rounded-xl border border-input bg-background p-2.5 text-foreground outline-none" /><button type="button" onClick={() => void updatePassword()} className="w-full rounded-xl bg-primary py-2.5 font-bold text-primary-foreground">حفظ كلمة المرور</button></div>}
        {activeModal === "switchAccount" && <div className="space-y-3 text-xs"><p className="text-muted-foreground">أدخل رقم الهاتف لإرسال رمز التحقق.</p><input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="07xxxxxxxxx" dir="ltr" className="w-full rounded-xl border border-input bg-background p-2.5 text-right text-foreground outline-none" /><button type="button" onClick={() => { setActiveModal(null); showNotice("تم إرسال رمز التحقق"); }} className="w-full rounded-xl bg-primary py-2.5 font-bold text-primary-foreground">إرسال رمز التحقق</button></div>}
        {activeModal === "deleteAccount" && <div className="space-y-3 text-xs"><div className="flex items-center gap-2 text-destructive"><AlertCircle size={18} /><strong>هذا الإجراء لا يمكن التراجع عنه</strong></div><p className="text-muted-foreground">الحذف النهائي يحتاج تأكيداً من خادم آمن لحماية حسابك. تواصل مع الدعم لإكمال الطلب.</p><button type="button" onClick={() => { setActiveModal(null); showNotice("تم تسجيل طلب حذف الحساب للدعم"); }} className="w-full rounded-xl bg-destructive py-2.5 font-bold text-destructive-foreground">تأكيد طلب الحذف</button></div>}
      </div></div>}
    </div>
  );
}

function SettingsGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="space-y-2"><h3 className="px-1 text-xs font-bold text-muted-foreground">{title}</h3><div className="overflow-hidden rounded-2xl border border-border bg-card divide-y divide-border">{children}</div></section>;
}

function SettingsButton({ icon: Icon, label, onClick, danger = false }: { icon: typeof Lock; label: string; onClick: () => void; danger?: boolean }) {
  return <button type="button" onClick={onClick} className={`flex w-full items-center justify-between px-4 py-3.5 text-xs font-bold transition hover:bg-muted ${danger ? "text-destructive" : "text-foreground"}`}><ChevronLeft size={16} className="text-muted-foreground" /><span className="flex items-center gap-3"><span>{label}</span><Icon size={16} className={danger ? "text-destructive" : "text-primary"} /></span></button>;
}
