import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as supabase } from "./client-Gc5T2T2E.mjs";
import { A as ChevronLeft, C as Grid3x3, D as Clock3, E as Ellipsis, O as CirclePlus, S as Heart, T as EyeOff, _ as LogOut, a as Store, b as Image, c as ShoppingBag, d as Search, f as Package, g as Mail, h as MapPin, i as Tag, j as Bell, k as ChevronRight, l as Share2, m as MessageCircle, n as UsersRound, o as Sparkles, p as Mic, r as UserRound, s as SlidersHorizontal, t as X, u as Send, v as Lock, w as Eye, x as House, y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as createLovableAuth } from "../_libs/lovable.dev__cloud-auth-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D9Dma3ei.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var lovableAuth = createLovableAuth();
var lovable = { auth: { signInWithOAuth: async (provider, opts) => {
	const result = await lovableAuth.signInWithOAuth(provider, {
		...opts,
		extraParams: { ...opts?.extraParams }
	});
	if (result.redirected) return result;
	if (result.error) return result;
	try {
		await supabase.auth.setSession(result.tokens);
	} catch (e) {
		return { error: e instanceof Error ? e : new Error(String(e)) };
	}
	return result;
} } };
function AuthScreen() {
	const [mode, setMode] = (0, import_react.useState)("login");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const submit = async (event) => {
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
						data: { display_name: name.trim() || email.split("@")[0] }
					}
				});
				if (signUpError) throw signUpError;
			} else {
				const { error: signInError } = await supabase.auth.signInWithPassword({
					email: email.trim(),
					password
				});
				if (signInError) throw signInError;
			}
		} catch (caught) {
			const message = caught instanceof Error ? caught.message : "حدث خطأ غير متوقع";
			setError(/invalid login/i.test(message) ? "البريد الإلكتروني أو كلمة المرور غير صحيحة" : /already registered|already been/i.test(message) ? "هذا البريد مسجّل مسبقاً، جرّب تسجيل الدخول" : /password/i.test(message) ? "كلمة المرور يجب أن تكون 6 أحرف على الأقل" : message);
		} finally {
			setBusy(false);
		}
	};
	const googleSignIn = async () => {
		setBusy(true);
		setError(null);
		const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
		if (result.error) {
			setError("تعذّر الدخول عبر جوجل، حاول مرة أخرى");
			setBusy(false);
			return;
		}
		if (result.redirected) return;
		setBusy(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		dir: "rtl",
		className: "flex min-h-screen flex-col items-center justify-between bg-background px-6 py-10 text-foreground selection:bg-primary/20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm flex-1 flex flex-col justify-center space-y-8 my-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform hover:scale-105",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "34",
						height: "34",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2.2",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 7h20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" })
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-black tracking-tight text-foreground",
						children: "تاجر"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-muted-foreground",
						children: "جامع لك كل المتاجر"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "space-y-3.5 w-full",
				children: [
					mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
							size: 18,
							className: "absolute right-3.5 text-muted-foreground/70 pointer-events-none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "الاسم الكامل",
							className: "w-full rounded-2xl border border-input bg-background/50 py-3.5 pr-10 pl-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20",
							autoComplete: "name"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							size: 18,
							className: "absolute right-3.5 text-muted-foreground/70 pointer-events-none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: email,
							onChange: (e) => setEmail(e.target.value),
							type: "email",
							required: true,
							placeholder: "البريد الإلكتروني",
							className: "w-full rounded-2xl border border-input bg-background/50 py-3.5 pr-10 pl-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20",
							autoComplete: "email",
							dir: "ltr"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
								size: 18,
								className: "absolute right-3.5 text-muted-foreground/70 pointer-events-none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: password,
								onChange: (e) => setPassword(e.target.value),
								type: showPassword ? "text" : "password",
								required: true,
								minLength: 6,
								placeholder: "كلمة المرور",
								className: "w-full rounded-2xl border border-input bg-background/50 py-3.5 pr-10 pl-11 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20",
								autoComplete: mode === "login" ? "current-password" : "new-password",
								dir: "ltr"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setShowPassword(!showPassword),
								className: "absolute left-3.5 text-muted-foreground/70 hover:text-foreground transition",
								tabIndex: -1,
								children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 18 })
							})
						]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl bg-destructive/10 p-3 text-center text-xs font-semibold text-destructive",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						size: "lg",
						disabled: busy,
						className: "h-12 w-full rounded-2xl text-base font-bold shadow-sm transition-all active:scale-[0.99]",
						children: [busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin ml-2" }), mode === "login" ? "تسجيل الدخول" : "إنشاء الحساب"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-1 flex items-center gap-3 text-xs text-muted-foreground/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border/80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "أو" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border/80" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "outline",
						size: "lg",
						disabled: busy,
						onClick: googleSignIn,
						className: "h-12 w-full rounded-2xl text-sm font-semibold gap-2 border-input bg-background hover:bg-accent hover:text-accent-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 24 24",
							width: "18",
							height: "18",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fill: "#4285F4",
									d: "M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.4a5.5 5.5 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.6-5.2 3.6-8.8z"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fill: "#34A853",
									d: "M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3a7.2 7.2 0 0 1-10.7-3.8H1.3v3.1A12 12 0 0 0 12 24z"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fill: "#FBBC05",
									d: "M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8l4-3.1z"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fill: "#EA4335",
									d: "M12 4.8c1.8 0 3.4.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1A7.2 7.2 0 0 1 12 4.8z"
								})
							]
						}), "المتابعة عبر جوجل"]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full max-w-sm pt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "outline",
				onClick: () => {
					setError(null);
					setMode(mode === "login" ? "signup" : "login");
				},
				className: "h-12 w-full rounded-2xl text-sm font-bold border-primary/30 text-primary hover:bg-primary/5 transition-all",
				children: mode === "login" ? "إنشاء حساب جديد" : "لديك حساب بالفعل؟ تسجيل الدخول"
			})
		})]
	});
}
var AuthContext = (0, import_react.createContext)(null);
function AuthProvider({ children }) {
	const [session, setSession] = (0, import_react.useState)(null);
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const loadProfile = async (userId) => {
		const { data } = await supabase.from("profiles").select("id, display_name, username, city, avatar_url").eq("id", userId).maybeSingle();
		setProfile(data ?? null);
	};
	(0, import_react.useEffect)(() => {
		const { data: subscription } = supabase.auth.onAuthStateChange((_event, nextSession) => {
			setSession(nextSession);
			setLoading(false);
			if (nextSession?.user) loadProfile(nextSession.user.id);
			else setProfile(null);
		});
		supabase.auth.getSession().then(({ data }) => {
			setSession(data.session);
			setLoading(false);
			if (data.session?.user) loadProfile(data.session.user.id);
		});
		return () => subscription.subscription.unsubscribe();
	}, []);
	const value = {
		user: session?.user ?? null,
		session,
		profile,
		loading,
		signOut: async () => {
			await supabase.auth.signOut();
			setProfile(null);
		},
		refreshProfile: async () => {
			if (session?.user) await loadProfile(session.user.id);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value,
		children
	});
}
function useAuth() {
	const ctx = (0, import_react.useContext)(AuthContext);
	if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
	return ctx;
}
var baghdad_default = "/assets/baghdad-TZleSqXO.jpg";
var portrait_default = "/assets/portrait-Cgr-cQjW.jpg";
var navItems = [
	{
		id: "home",
		label: "الرئيسية",
		icon: House
	},
	{
		id: "search",
		label: "استكشاف",
		icon: Search
	},
	{
		id: "sell",
		label: "بيع",
		icon: CirclePlus
	},
	{
		id: "chat",
		label: "الرسائل",
		icon: MessageCircle
	},
	{
		id: "profile",
		label: "حسابي",
		icon: UserRound
	}
];
var money = (value) => `${new Intl.NumberFormat("ar-IQ").format(value)} د.ع`;
function TaMark({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		"aria-label": "تاجر",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: compact ? "brand-mark brand-mark-sm" : "brand-mark",
			children: "ت"
		}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			className: "text-xl font-extrabold",
			children: "تاجر"
		})]
	});
}
function TopBar({ onSearch }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-30 border-b border-border/70 bg-background/90 px-4 pb-3 pt-4 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaMark, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "search-pill",
					onClick: onSearch,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 17 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ابحث عن منتج أو متجر..." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "icon",
					className: "relative rounded-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-1 top-1 size-2 rounded-full bg-destructive" })]
				})
			]
		})
	});
}
function BottomNav({ active, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-2 pb-[max(.55rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl lg:bottom-auto lg:left-0 lg:right-auto lg:top-0 lg:h-screen lg:w-24 lg:border-r lg:border-t-0 lg:px-3 lg:py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-xl items-center justify-around lg:h-full lg:flex-col lg:justify-start lg:gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 hidden lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaMark, { compact: true })
			}), navItems.map(({ id, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				onClick: () => onChange(id),
				className: `nav-button ${active === id ? "nav-button-active" : ""} ${id === "sell" ? "nav-sell" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
			}, id))]
		})
	});
}
function SectionTitle({ title, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-lg font-extrabold",
			children: title
		}), action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-bold text-muted-foreground",
			children: action
		})]
	});
}
function ProductCard({ product, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		className: "product-card",
		onClick: () => onOpen(product),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "product-image-wrap",
			children: [product.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image_url,
				alt: product.name
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-full place-items-center text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "heart" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-3 text-right",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-1 text-xs text-muted-foreground",
					children: product.seller_name || "بائع من المجتمع"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: product.name }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: money(product.price) })
			]
		})]
	});
}
function EmptyState({ title, detail }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "empty-state",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: detail })
		]
	});
}
function HomeScreen({ products, onProduct, onSell }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "offer-banner",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 max-w-[62%]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-2 inline-flex rounded-full bg-background/15 px-3 py-1 text-xs font-bold text-primary-foreground",
							children: "سوق محلي"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-2xl font-black leading-tight text-primary-foreground",
							children: [
								"اعرض منتجك",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"ووصل لمشتريك"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "mt-3 bg-background text-primary shadow-none hover:bg-background/90",
							onClick: onSell,
							children: "أضف إعلانك"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: baghdad_default,
					alt: "سوق تاجر",
					className: "absolute inset-y-0 left-0 h-full w-[43%] object-cover object-top opacity-90"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "category-strip",
				children: [
					[ShoppingBag, "منتجات"],
					[Store, "متاجر"],
					[Tag, "عروض"],
					[UsersRound, "مجتمع"],
					[Grid3x3, "الكل"]
				].map(([Icon, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "category-item",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: label })]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "content-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					title: "المنتجات المنشورة",
					action: `${products.length} منتج`
				}), products.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "product-grid",
					children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						product: p,
						onOpen: onProduct
					}, p.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					title: "لا توجد منتجات بعد",
					detail: "كن أول من ينشر إعلانًا في تاجر"
				})]
			})
		]
	});
}
function SearchScreen({ products, onProduct }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const visible = products.filter((p) => `${p.name} ${p.seller_name || ""}`.toLowerCase().includes(query.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "اكتشف المنتجات المنشورة" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "البحث" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "icon",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "input-pill",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "شنو تدور اليوم؟",
					autoFocus: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "النتائج" }),
			visible.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "search-results",
				children: visible.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "result-row",
					onClick: () => onProduct(p),
					children: [
						p.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image_url,
							alt: p.name
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-16 place-items-center rounded-lg bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: p.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: p.seller_name || "بائع من المجتمع" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: money(p.price) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
					]
				}, p.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "لا توجد نتائج",
				detail: "جرّب كلمة بحث أخرى أو انشر منتجك"
			})
		]
	});
}
function SellScreen({ onCreated }) {
	const { user } = useAuth();
	const [name, setName] = (0, import_react.useState)("");
	const [price, setPrice] = (0, import_react.useState)("");
	const [description, setDescription] = (0, import_react.useState)("");
	const [imageUrl, setImageUrl] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const submit = async (e) => {
		e.preventDefault();
		if (!user || !name.trim() || !price) return;
		setBusy(true);
		setError("");
		const { error: insertError } = await supabase.from("products").insert({
			seller_id: user.id,
			name: name.trim(),
			price: Number(price),
			description: description.trim() || null,
			image_url: imageUrl.trim() || null
		});
		if (insertError) setError(insertError.message);
		else {
			setName("");
			setPrice("");
			setDescription("");
			setImageUrl("");
			onCreated();
		}
		setBusy(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-heading",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "خلّي بضاعتك توصل" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "إضافة إعلان" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "form-stack",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "عنوان الإعلان" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					value: name,
					onChange: (e) => setName(e.target.value),
					placeholder: "مثال: حذاء رياضي جديد"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "السعر بالدينار العراقي" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					type: "number",
					min: "0",
					value: price,
					onChange: (e) => setPrice(e.target.value),
					placeholder: "0"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "رابط صورة المنتج (اختياري)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "url",
					value: imageUrl,
					onChange: (e) => setImageUrl(e.target.value),
					placeholder: "https://...",
					dir: "ltr"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الوصف" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: description,
					onChange: (e) => setDescription(e.target.value),
					placeholder: "اكتب تفاصيل المنتج وحالته...",
					rows: 4
				})] }),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rounded-lg bg-destructive/10 p-3 text-xs text-destructive",
					children: ["تعذر نشر الإعلان: ", error]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					size: "lg",
					disabled: busy,
					className: "mt-2 h-12 w-full rounded-xl text-base",
					children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {}), "نشر الإعلان"]
				})
			]
		})]
	});
}
function ChatScreen() {
	const { user } = useAuth();
	const [conversations, setConversations] = (0, import_react.useState)([]);
	const [open, setOpen] = (0, import_react.useState)(null);
	const [text, setText] = (0, import_react.useState)("");
	const load = (0, import_react.useCallback)(async () => {
		if (!user) return;
		const { data } = await supabase.from("conversations").select("id, participant_name, last_message, updated_at").eq("user_id", user.id).order("updated_at", { ascending: false });
		setConversations(data || []);
	}, [user]);
	(0, import_react.useEffect)(() => {
		load();
	}, [load]);
	if (open) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "chat-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "chat-header",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => setOpen(null),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: portrait_default,
						alt: open.participant_name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: open.participant_name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "محادثة" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "messages",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "date-chip",
					children: "المحادثة"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					title: "لا توجد رسائل بعد",
					detail: "ابدأ المحادثة من صفحة المنتج"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "composer",
				onSubmit: async (e) => {
					e.preventDefault();
					if (!text.trim() || !user) return;
					await supabase.from("messages").insert({
						conversation_id: open.id,
						sender_id: user.id,
						body: text.trim()
					});
					setText("");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlus, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: text,
						onChange: (e) => setText(e.target.value),
						placeholder: "اكتب رسالة..."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "icon",
						className: "rounded-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {})
					})
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-heading",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "محادثاتك الحقيقية" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "الرسائل" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {})]
		}), conversations.length ? conversations.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "conversation",
			onClick: () => setOpen(c),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: portrait_default,
					alt: c.participant_name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: c.participant_name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: c.last_message || "لا توجد رسائل بعد" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", { children: new Date(c.updated_at).toLocaleDateString("ar-IQ") })
			]
		}, c.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			title: "لا توجد محادثات",
			detail: "ستظهر هنا رسائلك مع البائعين والمشترين"
		})]
	});
}
function ProfileScreen() {
	const { user, profile, signOut } = useAuth();
	const name = profile?.display_name || user?.email?.split("@")[0] || "مستخدم تاجر";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "profile-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "profile-cover",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: baghdad_default,
					alt: "ملفك الشخصي"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "profile-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						size: "icon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						size: "icon",
						onClick: () => void signOut(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "profile-info",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: profile?.avatar_url || "/assets/portrait-Cgr-cQjW.jpg",
						alt: name,
						className: "avatar-xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
						name,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✓" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["@", profile?.username || "tajer"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {}),
						" ",
						profile?.city || "لم تحدد المدينة"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stats",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "—" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "المنشورات" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "—" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "المتابعون" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "—" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "يتابع" })] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "profile-buttons",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							children: "تعديل الملف"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							onClick: () => void signOut(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {}), "تسجيل الخروج"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "profile-tabs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "active",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3x3, {}), "المنشورات"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {}), "المتجر"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {}), "المفضلة"] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "لا توجد منشورات",
				detail: "ستظهر منتجاتك هنا بعد نشر أول إعلان"
			})
		]
	});
}
function ProductSheet({ product, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "modal-backdrop",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "product-sheet",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "sheet-handle" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					size: "icon",
					className: "sheet-close",
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
				}),
				product.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image_url,
					alt: product.name,
					className: "sheet-image"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-56 place-items-center bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sheet-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: product.seller_name || "بائع من المجتمع" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: product.name }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: money(product.price) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: product.description || "لم يضف البائع وصفًا لهذا المنتج بعد." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "delivery",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "تواصل مباشر" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "اسأل البائع عن التوصيل والتفاصيل" })] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							className: "h-12 w-full rounded-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), "تواصل مع البائع"]
						})
					]
				})
			]
		})
	});
}
function TaRoot() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaGate, {}) });
}
function TaGate() {
	const { user, loading } = useAuth();
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" })
	});
	return user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaApp, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthScreen, {});
}
function TaApp() {
	const [tab, setTab] = (0, import_react.useState)("home");
	const [products, setProducts] = (0, import_react.useState)([]);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const { user } = useAuth();
	const loadProducts = (0, import_react.useCallback)(async () => {
		const { data } = await supabase.from("products").select("id,name,price,image_url,description,seller_id,profiles(display_name)").eq("status", "active").order("created_at", { ascending: false });
		setProducts((data || []).map((p) => ({
			id: p.id,
			name: p.name,
			price: p.price,
			image_url: p.image_url,
			description: p.description,
			seller_name: p.profiles?.display_name || null
		})));
	}, []);
	(0, import_react.useEffect)(() => {
		loadProducts();
	}, [loadProducts, user]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		dir: "rtl",
		className: "min-h-screen bg-background font-sans text-foreground lg:pr-24",
		children: [
			tab !== "chat" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, { onSearch: () => setTab("search") }),
			tab === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {
				products,
				onProduct: setSelected,
				onSell: () => setTab("sell")
			}),
			tab === "search" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchScreen, {
				products,
				onProduct: setSelected
			}),
			tab === "sell" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SellScreen, { onCreated: () => {
				loadProducts();
				setTab("home");
			} }),
			tab === "chat" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatScreen, {}),
			tab === "profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileScreen, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {
				active: tab,
				onChange: setTab
			}),
			selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductSheet, {
				product: selected,
				onClose: () => setSelected(null)
			})
		]
	});
}
//#endregion
export { TaRoot as component };
