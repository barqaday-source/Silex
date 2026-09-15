import { n as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-Gc5T2T2E.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as HeadContent, d as Outlet, f as createFileRoute, g as useRouter, m as Link, p as createRootRouteWithContext, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { $ as EllipsisVertical, A as Pin, B as Info, C as Settings, Ct as ArrowRight, D as QrCode, E as Search, F as MapPin, G as Globe, H as History, I as Mail, J as FileText, K as Gauge, L as LogOut, M as PackageCheck, N as MessageSquare, O as Printer, P as MessageCircle, Q as ExternalLink, R as Lock, S as Share2, St as ArrowUpFromLine, T as Send, Tt as ArrowDownToLine, U as Heart, V as House, W as Grid3x3, X as Eye, Y as FileSpreadsheet, Z as EyeOff, _ as Smartphone, _t as Bell, a as UserRound, at as CirclePlus, b as ShieldCheck, bt as Award, c as Upload, ct as ChevronRight, d as TrendingUp, dt as Check, et as Download, f as Trash2, ft as CheckCheck, g as Sparkles, gt as Bot, h as Store, ht as Boxes, i as User, it as CircleQuestionMark, j as Package, k as Plus, l as Truck, lt as ChevronLeft, m as Tag, mt as Camera, n as Wallet, nt as CornerUpRight, o as UserPlus, ot as CircleCheck, p as Ticket, pt as ChartColumn, q as Flag, r as WalletCards, rt as ClipboardList, s as UserCheck, st as CircleAlert, t as X, tt as CreditCard, u as TriangleAlert, ut as ChevronDown, v as ShoppingBag, vt as Barcode, w as Settings2, wt as ArrowDown, x as ShieldAlert, xt as ArrowUp, y as Shield, yt as Ban, z as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as createLovableAuth } from "../_libs/lovable.dev__cloud-auth-js.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CusRbtso.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C1xTrDAx.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "صفصاف | Salix" },
			{
				name: "description",
				content: "صفصاف Salix للتسوق والتجارة والتواصل"
			},
			{
				name: "author",
				content: "Salix"
			},
			{
				property: "og:title",
				content: "صفصاف | Salix"
			},
			{
				property: "og:description",
				content: "تسوق وتاجر بلمسة واحدة مع صفصاف"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;500;600;700;800;900&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ar",
		dir: "rtl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
function Header({ cartCount, unreadNotificationsCount, searchQuery, onSearchChange, onOpenCart, onOpenNotifications, onOpenMenu }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-background/90 px-4 py-4 backdrop-blur-md sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-5xl items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onOpenMenu,
					className: "rounded-xl p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
					"aria-label": "القائمة الجانبية",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "select-none text-xl font-black uppercase tracking-widest text-foreground",
					dir: "ltr",
					children: "SALIX"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: onOpenNotifications,
						className: "relative rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
						"aria-label": "الإشعارات",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-5" }),
							unreadNotificationsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-2.5 top-2.5 size-2 animate-pulse rounded-full bg-primary" }),
							unreadNotificationsCount > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[9px] font-black text-primary-foreground",
								children: unreadNotificationsCount
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: onOpenCart,
						className: "relative rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
						"aria-label": "سلة التسوق",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-black text-primary-foreground",
							children: cartCount
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl px-4 pb-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					size: 16,
					className: "absolute right-3.5 top-3 text-muted-foreground"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: searchQuery,
					onChange: (e) => onSearchChange(e.target.value),
					placeholder: "ابحث عن منتجات، متاجر، تصنيفات...",
					className: "w-full rounded-2xl border border-input bg-card py-2.5 pr-10 pl-4 text-xs font-medium text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
				})]
			})
		})]
	});
}
function MobileMenuDrawer({ isOpen, onClose, onNavigateTab }) {
	if (!isOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex w-4/5 max-w-xs flex-col bg-white p-5 text-right shadow-2xl dark:bg-slate-900",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "grid size-9 place-items-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-black text-slate-400",
						children: "القائمة الرئيسية"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onClick: () => {
						onNavigateTab("profile");
						onClose();
					},
					className: "my-4 flex cursor-pointer items-center justify-between rounded-2xl bg-emerald-50 p-3 dark:bg-emerald-950/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						size: 16,
						className: "text-emerald-600 dark:text-emerald-400"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xs font-black text-slate-900 dark:text-white",
								children: "جود الجابر"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-bold text-emerald-600 dark:text-emerald-400",
								children: "عرض الحساب الشخصي ←"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-10 place-items-center rounded-xl bg-emerald-500 font-black text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 18 })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-4 overflow-y-auto no-scrollbar",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold text-slate-400 px-2",
									children: "خدمات التسوق والتجارة"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										onNavigateTab("stores");
										onClose();
									},
									className: "flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
										size: 14,
										className: "text-slate-400"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "بيع معنا وافتح متجرك" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, {
											size: 16,
											className: "text-emerald-500"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
										size: 14,
										className: "text-slate-400"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "متابعة طلبياتي" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {
											size: 16,
											className: "text-blue-500"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
										size: 14,
										className: "text-slate-400"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "العروض والتخفيضات" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, {
											size: 16,
											className: "text-amber-500"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
										size: 14,
										className: "text-slate-400"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "المحفظة الرقمية" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
											size: 16,
											className: "text-purple-500"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
										size: 14,
										className: "text-slate-400"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "نقاط الولاء والمكافآت" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
											size: 16,
											className: "text-rose-500"
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "border-slate-100 dark:border-slate-800" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold text-slate-400 px-2",
									children: "النظام والتطبيق"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
										size: 14,
										className: "text-slate-400"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "إعدادات الحساب" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
											size: 16,
											className: "text-slate-400"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold text-emerald-600",
										children: "العربية"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "اللغة والعملة" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
											size: 16,
											className: "text-slate-400"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
										size: 14,
										className: "text-slate-400"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "المساعدة والدعم الفني" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, {
											size: 16,
											className: "text-slate-400"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
										size: 14,
										className: "text-slate-400"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "عن المنصة" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
											size: 16,
											className: "text-slate-400"
										})]
									})]
								})
							]
						})
					]
				})
			]
		})]
	});
}
function HomeScreen({ products, stores, stories, selectedCategory, onSelectCategory, onSelectStory, onSelectProduct, onSelectStore, onAddToCart }) {
	const banners = [{
		id: 1,
		title: "عروض الموسم 🔥",
		subtitle: "خصومات تصل إلى 50% على الإلكترونيات",
		btnText: "تسوق الآن"
	}, {
		id: 2,
		title: "متاجر موثقة ⭐️",
		subtitle: "توصيل سريع لكافة المحافظات",
		btnText: "استكشف المتاجر"
	}];
	const categories = [
		{
			id: "all",
			label: "الكل"
		},
		{
			id: "electronics",
			label: "إلكترونيات"
		},
		{
			id: "fashion",
			label: "أزياء"
		},
		{
			id: "home",
			label: "المنزل"
		}
	];
	const activeBanner = banners[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 text-right pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-3 overflow-x-auto no-scrollbar py-2",
				children: stories.map((story) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => onSelectStory(story),
					className: "flex flex-col items-center gap-1 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-emerald-500 sm:size-14",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: story.storeAvatar,
							alt: story.storeName,
							className: "size-full rounded-full object-cover border-2 border-white dark:border-slate-900"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-bold truncate max-w-[64px]",
						children: story.storeName
					})]
				}, story.id))
			}),
			activeBanner && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 p-6 text-white shadow-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-black",
						children: activeBanner.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-100 mt-1",
						children: activeBanner.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "mt-4 rounded-xl bg-white px-4 py-2 text-xs font-black text-emerald-800 shadow-md transition hover:bg-slate-100",
						children: activeBanner.btnText
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto no-scrollbar",
				children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onSelectCategory(cat.id),
					className: `rounded-2xl px-4 py-2 text-xs font-bold transition shrink-0 ${selectedCategory === cat.id ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20" : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300"}`,
					children: cat.label
				}, cat.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold text-emerald-600",
						children: "عرض الكل"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-sm font-black flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
							size: 16,
							className: "text-amber-500"
						}), " المنتجات المقترحة"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
					children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => onSelectProduct(product),
						className: "group cursor-pointer rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-square overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image_url,
								alt: product.name,
								className: "size-full object-cover transition duration-300 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-black truncate",
									children: product.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-slate-400",
									children: product.seller_name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-black text-emerald-600",
										children: [product.price.toLocaleString("ar-IQ"), " د.ع"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: (e) => {
											e.stopPropagation();
											onAddToCart(product);
										},
										className: "rounded-lg bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600 hover:bg-emerald-500 hover:text-white transition",
										children: "+ إضافة"
									})]
								})
							]
						})]
					}, product.id))
				})]
			})
		]
	});
}
function CartDrawer({ isOpen, items, onClose, onUpdateQuantity, onContinueShopping, onCheckout }) {
	const [cashAmount, setCashAmount] = (0, import_react.useState)("");
	const [orderPlaced, setOrderPlaced] = (0, import_react.useState)(false);
	const [processing, setProcessing] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	if (!isOpen) return null;
	const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
	const change = Number(cashAmount) >= total ? Number(cashAmount) - total : 0;
	const handleCheckout = async () => {
		if (!onCheckout || !cashAmount || processing) return;
		setProcessing(true);
		setError(null);
		try {
			await onCheckout(items);
			setOrderPlaced(true);
		} catch (caught) {
			setError(caught instanceof Error ? caught.message : "تعذر تسجيل الطلب");
		} finally {
			setProcessing(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute left-0 top-0 h-full w-full max-w-sm bg-white p-5 shadow-2xl dark:bg-slate-900 text-slate-900 dark:text-white",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b pb-4 dark:border-slate-800",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-black",
						children: "السلة الذكية"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "rounded-lg p-1 hover:bg-slate-100 dark:hover:bg-slate-800",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					})]
				}),
				items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 flex flex-col items-center space-y-3 text-center text-slate-400",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
							size: 40,
							className: "mx-auto text-slate-300"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold",
							children: "السلة فارغة حالياً"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onContinueShopping,
							className: "rounded-xl bg-emerald-50 px-4 py-2 text-[11px] font-black text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300",
							children: "استكشف المنتجات"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-3 overflow-y-auto max-h-[calc(100vh-200px)]",
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 rounded-2xl border p-3 dark:border-slate-800",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image_url,
							alt: item.name,
							className: "size-16 rounded-xl object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 text-right",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-black truncate",
									children: item.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-bold text-emerald-600 mt-1",
									children: [item.price.toLocaleString("ar-IQ"), " د.ع"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex items-center justify-between",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 rounded-lg bg-slate-100 p-1 dark:bg-slate-800",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => onUpdateQuantity(item.id, 1),
												className: "px-2 font-bold",
												children: "+"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-black",
												children: item.quantity
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => onUpdateQuantity(item.id, -1),
												className: "px-2 font-bold",
												children: "-"
											})
										]
									})
								})
							]
						})]
					}, item.id))
				}),
				items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-5 left-5 right-5 border-t pt-4 dark:border-slate-800 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm font-black",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الإجمالي:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-emerald-600",
								children: [total.toLocaleString("ar-IQ"), " د.ع"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-emerald-100 bg-emerald-50/70 p-3 text-right dark:border-emerald-950/50 dark:bg-emerald-950/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-1 text-xs font-black text-emerald-800 dark:text-emerald-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 15 }), " الدفع عند الاستلام"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mt-2 block text-[10px] font-bold text-slate-600 dark:text-slate-300",
									children: ["سأدفع بفئة نقدية", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: cashAmount,
										onChange: (event) => setCashAmount(event.target.value),
										className: "mt-1 w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs outline-none dark:border-slate-700 dark:bg-slate-900",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "اختيار الفئة"
										}), [
											5e4,
											1e5,
											25e4,
											5e5,
											1e6,
											2e6
										].filter((amount) => amount >= total).map((amount) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
											value: amount,
											children: [amount.toLocaleString("ar-IQ"), " د.ع"]
										}, amount))]
									})]
								}),
								cashAmount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-[11px] font-black text-emerald-700 dark:text-emerald-300",
									children: [
										"سيحضر المندوب باقي ",
										change.toLocaleString("ar-IQ"),
										" د.ع"
									]
								})
							]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-xl bg-rose-50 p-2 text-center text-[11px] font-bold text-rose-600 dark:bg-rose-950/30 dark:text-rose-300",
							children: error
						}),
						orderPlaced ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 py-3 text-xs font-black text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 16 }), " تم تسجيل طلبك داخل صفصاف"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: !cashAmount || processing || !onCheckout,
							onClick: () => void handleCheckout(),
							className: "w-full rounded-2xl bg-emerald-500 py-3 text-xs font-black text-white hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50",
							children: processing ? "جاري تسجيل الطلب..." : "تأكيد الطلب نقداً عند الاستلام"
						})
					]
				})
			]
		})
	});
}
function StoryViewerModal({ story, stories = [story], onClose, onOpenStore, products, onAddToCart, onSendMessage }) {
	const initialIndex = Math.max(0, stories.findIndex((item) => item.id === story.id));
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(initialIndex);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [liked, setLiked] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [isPaused, setIsPaused] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	const activeStory = stories[activeIndex] ?? story;
	const storyProduct = products.find((product) => product.id === activeStory.productId);
	(0, import_react.useEffect)(() => {
		if (isPaused) return;
		const timer = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					if (activeIndex < stories.length - 1) {
						setActiveIndex((current) => current + 1);
						return 0;
					}
					onClose();
					return 0;
				}
				return prev + 2;
			});
		}, 100);
		return () => clearInterval(timer);
	}, [
		activeIndex,
		isPaused,
		onClose,
		stories.length
	]);
	(0, import_react.useEffect)(() => {
		setProgress(0);
		setLiked(false);
		setMessage("");
		setSent(false);
	}, [activeIndex]);
	const goTo = (index) => {
		if (index < 0) {
			setProgress(0);
			return;
		}
		if (index >= stories.length) {
			onClose();
			return;
		}
		setActiveIndex(index);
	};
	const sendReply = (event) => {
		event.preventDefault();
		const trimmedMessage = message.trim();
		if (!trimmedMessage) return;
		onSendMessage?.(activeStory.storeId, activeStory.storeName, trimmedMessage);
		setMessage("");
		setSent(true);
		window.setTimeout(() => setSent(false), 2500);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md",
		onMouseDown: () => setIsPaused(true),
		onMouseUp: () => setIsPaused(false),
		onMouseLeave: () => setIsPaused(false),
		onTouchStart: () => setIsPaused(true),
		onTouchEnd: () => setIsPaused(false),
		dir: "rtl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full w-full max-w-md flex-col justify-between overflow-hidden p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: activeStory.mediaUrl,
					alt: activeStory.caption ?? "Story",
					className: "absolute inset-0 size-full object-contain"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-1 gap-1",
						children: stories.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 overflow-hidden rounded-full bg-white/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-white transition-[width] duration-100",
								style: { width: index < activeIndex ? "100%" : index === activeIndex ? `${progress}%` : "0%" }
							})
						}, item.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onOpenStore(activeStory.storeId),
							className: "flex items-center gap-2 text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: activeStory.storeAvatar,
								alt: activeStory.storeName,
								className: "size-10 rounded-full border-2 border-primary object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black",
									children: activeStory.storeName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-white/70",
									children: activeStory.createdAt
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "grid size-9 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30",
							"aria-label": "إغلاق الستوري",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => goTo(activeIndex + 1),
					className: "absolute left-2 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-black/20 text-white/70 hover:text-white",
					"aria-label": "الستوري التالية",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 24 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => goTo(activeIndex - 1),
					className: "absolute right-2 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-black/20 text-white/70 hover:text-white",
					"aria-label": "الستوري السابقة",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 24 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 space-y-3 text-white",
					children: [
						storyProduct && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3 rounded-2xl border border-white/20 bg-black/55 p-3 backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-xs font-black",
									children: storyProduct.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-[11px] font-bold text-primary",
									children: [storyProduct.price.toLocaleString("ar-IQ"), " د.ع"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onAddToCart(storyProduct),
								className: "flex shrink-0 items-center gap-1.5 rounded-xl bg-primary px-3 py-2 text-[11px] font-black text-primary-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 14 }), " شراء الآن"]
							})]
						}),
						activeStory.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium leading-relaxed",
							children: activeStory.caption
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: sendReply,
							className: "flex items-center gap-2 pt-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: message,
									onChange: (event) => setMessage(event.target.value),
									placeholder: `الرد على ${activeStory.storeName}...`,
									className: "flex-1 rounded-full border border-white/20 bg-black/55 px-4 py-3 text-xs text-white placeholder-white/60 outline-none backdrop-blur-md focus:border-white"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setLiked((current) => !current),
									className: `grid size-10 shrink-0 place-items-center rounded-full backdrop-blur-md ${liked ? "bg-rose-500 text-white" : "bg-white/10 text-white"}`,
									"aria-label": "إعجاب",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
										size: 18,
										fill: liked ? "currentColor" : "none"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground",
									"aria-label": "إرسال الرد",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 17 })
								})
							]
						}),
						sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-[11px] font-bold text-primary",
							children: "تم إرسال الرد إلى المتجر"
						})
					]
				})
			]
		})
	});
}
function NotificationsDrawer({ notifications, onClose, onMarkAllRead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute left-0 top-0 h-full w-full max-w-sm bg-white p-5 shadow-2xl dark:bg-slate-900 text-slate-900 dark:text-white",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b pb-4 dark:border-slate-800",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-black",
						children: "التنبيهات الإشعارات"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "rounded-lg p-1 hover:bg-slate-100 dark:hover:bg-slate-800",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex justify-between items-center text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-slate-400",
						children: [
							"لديك ",
							notifications.filter((n) => !n.read).length,
							" إشعارات غير قراءتها"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onMarkAllRead,
						className: "font-bold text-emerald-600 hover:underline",
						children: "تحديد الكل كقراءة"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-3 overflow-y-auto max-h-[calc(100vh-140px)]",
					children: notifications.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex gap-3 rounded-2xl p-3 border transition ${item.read ? "border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/50" : "border-emerald-200 bg-emerald-50/30 dark:border-emerald-900 dark:bg-emerald-950/20"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid size-9 shrink-0 place-items-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50",
							children: [
								item.type === "order" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 16 }),
								item.type === "discount" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { size: 16 }),
								item.type === "system" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { size: 16 })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1 text-right",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-[11px] text-slate-500 dark:text-slate-400",
									children: item.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block text-[9px] text-slate-400",
									children: item.time
								})
							]
						})]
					}, item.id))
				})
			]
		})
	});
}
function StoreProfileModal({ store, products, onClose, onOpenProduct, onAddToCart: _onAddToCart, onOpenChat }) {
	const [following, setFollowing] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [reportOpen, setReportOpen] = (0, import_react.useState)(false);
	const [reportReason, setReportReason] = (0, import_react.useState)("");
	const [notice, setNotice] = (0, import_react.useState)(null);
	const storeProducts = products.filter((product) => product.seller_id === store.id || product.seller_name === store.name);
	const showNotice = (message) => {
		setNotice(message);
		window.setTimeout(() => setNotice(null), 2500);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		dir: "rtl",
		className: "fixed inset-0 z-50 overflow-y-auto bg-black/60 p-3 backdrop-blur-sm sm:p-6",
		onClick: onClose,
		children: [
			notice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed left-1/2 top-5 z-[70] flex -translate-x-1/2 items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground shadow-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					size: 14,
					className: "text-primary"
				}), notice]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto min-h-full max-w-2xl overflow-hidden rounded-3xl bg-background text-foreground shadow-2xl",
				onClick: (event) => event.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "sticky top-0 z-20 flex items-center justify-between border-b border-border bg-background/90 px-4 py-3 backdrop-blur-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onClose,
								className: "rounded-xl p-2 text-muted-foreground hover:bg-muted hover:text-foreground",
								"aria-label": "إغلاق",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 19 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								dir: "ltr",
								className: "text-sm font-bold tracking-wide",
								children: store.name.replace(/^متجر\s*/, "")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setMenuOpen((current) => !current),
								className: "rounded-xl p-2 text-muted-foreground hover:bg-muted hover:text-foreground",
								"aria-label": "خيارات المتجر",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { size: 19 })
							}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-0 top-11 z-30 w-48 rounded-2xl border border-border bg-card p-1.5 text-right shadow-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setMenuOpen(false);
										showNotice("تم حظر المتجر");
									},
									className: "flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold text-destructive hover:bg-destructive/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { size: 14 }), " حظر المتجر"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setMenuOpen(false);
										setReportOpen(true);
									},
									className: "flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold text-foreground hover:bg-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { size: 14 }), " إبلاغ عن المتجر"]
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto max-w-xl space-y-4 px-4 pb-5 pt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: store.avatar,
									alt: store.name,
									className: "size-20 shrink-0 rounded-full object-cover ring-2 ring-primary/30"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid flex-1 grid-cols-3 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											value: String(storeProducts.length),
											label: "منتجات"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											value: "1.2K",
											label: "متابعون"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											value: "98%",
											label: "التقييم"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
											className: "text-sm font-black",
											children: store.name
										}), store.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
											size: 15,
											className: "text-primary"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "leading-relaxed text-muted-foreground",
										children: store.bio || "متجر موثوق يقدم أفضل المنتجات المحلية بأعلى جودة."
									}),
									store.location && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: store.location
									}),
									store.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										dir: "ltr",
										className: "w-fit text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
											size: 12,
											className: "ml-1 inline"
										}), store.phone]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setFollowing((current) => !current);
										showNotice(following ? "تم إلغاء المتابعة" : "تمت المتابعة بنجاح");
									},
									className: `flex-1 rounded-xl py-2.5 text-xs font-bold transition ${following ? "border border-border bg-card text-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90"}`,
									children: following ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, {
										size: 15,
										className: "ml-1 inline"
									}), "تمت المتابعة"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, {
										size: 15,
										className: "ml-1 inline"
									}), "متابعة"] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										onClose();
										onOpenChat?.(store.id);
									},
									className: "flex-1 rounded-xl border border-border bg-card py-2.5 text-xs font-bold text-foreground hover:bg-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
										size: 15,
										className: "ml-1 inline"
									}), "مراسلة"]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center border-b border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-b-2 border-primary px-6 py-3 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3x3, { size: 17 })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-0.5 bg-border p-0.5",
							children: [storeProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onOpenProduct(product),
								className: "group relative aspect-square overflow-hidden bg-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: product.image_url,
									alt: product.name,
									className: "size-full object-cover transition duration-300 group-hover:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute inset-x-1 bottom-1 truncate rounded bg-black/60 px-1 py-1 text-[9px] text-white opacity-0 transition group-hover:opacity-100",
									children: product.name
								})]
							}, product.id)), storeProducts.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-3 grid min-h-48 place-items-center p-8 text-center text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
									size: 24,
									className: "mb-2 text-primary"
								}), "لا توجد منتجات منشورة حالياً"]
							})]
						})]
					})
				]
			}),
			reportOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4",
				onClick: () => setReportOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm space-y-4 rounded-3xl border border-border bg-card p-5 shadow-2xl",
					onClick: (event) => event.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setReportOpen(false),
								className: "rounded-lg p-1 text-muted-foreground hover:bg-muted",
								"aria-label": "إغلاق",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-black",
								children: "إبلاغ عن المتجر"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2 text-xs",
							children: [
								"حساب مزيف",
								"محتوى غير لائق",
								"احتيال"
							].map((reason) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setReportReason(reason),
								className: `w-full rounded-xl border p-3 text-right transition ${reportReason === reason ? "border-primary bg-secondary text-foreground" : "border-border text-muted-foreground hover:bg-muted"}`,
								children: reason
							}, reason))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: !reportReason,
								onClick: () => {
									setReportOpen(false);
									showNotice("تم إرسال البلاغ بنجاح");
								},
								className: "flex-1 rounded-xl bg-primary py-2.5 text-xs font-bold text-primary-foreground disabled:opacity-50",
								children: "إرسال البلاغ"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setReportOpen(false),
								className: "rounded-xl bg-muted px-4 py-2.5 text-xs font-bold",
								children: "إلغاء"
							})]
						})
					]
				})
			})
		]
	});
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-sm font-black",
		children: value
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[11px] text-muted-foreground",
		children: label
	})] });
}
function BottomNavigation({ activeTab, unreadChatCount, isSellerMode, onTabChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/95",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-3xl items-center justify-around gap-1 px-2 py-2 dir-rtl",
			children: (isSellerMode ? [
				{
					id: "seller-dashboard",
					label: "لوحة المتجر",
					icon: Store
				},
				{
					id: "seller-orders",
					label: "الطلبات",
					icon: ClipboardList
				},
				{
					id: "seller-inventory",
					label: "المخزون",
					icon: Boxes
				},
				{
					id: "seller-analytics",
					label: "التحليلات",
					icon: ChartColumn
				},
				{
					id: "chat",
					label: "المحادثات",
					icon: MessageSquare,
					badge: unreadChatCount
				}
			] : [
				{
					id: "home",
					label: "الرئيسية",
					icon: House
				},
				{
					id: "stores",
					label: "المتاجر",
					icon: Store
				},
				{
					id: "chat",
					label: "المحادثات",
					icon: MessageSquare,
					badge: unreadChatCount
				},
				{
					id: "profile",
					label: "حسابي",
					icon: User
				}
			]).map((tab) => {
				const Icon = tab.icon;
				const isActive = activeTab === tab.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => onTabChange(tab.id),
					className: `relative flex flex-col items-center gap-1 px-3 py-1 transition ${isActive ? "scale-105 font-bold text-emerald-500" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 20 }), !!tab.badge && tab.badge > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -top-1.5 -right-2.5 flex size-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-black text-white",
							children: tab.badge
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px]",
						children: tab.label
					})]
				}, tab.id);
			})
		})
	});
}
function ChatList({ conversations, onSelectConversation }) {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [search, setSearch] = (0, import_react.useState)("");
	const filtered = conversations.filter((c) => {
		const matchesFilter = filter === "all" || filter === "unread" && c.unreadCount > 0 || filter === "orders" && c.hasActiveOrder;
		const matchesSearch = c.storeName.toLowerCase().includes(search.toLowerCase()) || c.relatedProductName && c.relatedProductName.toLowerCase().includes(search.toLowerCase());
		return matchesFilter && matchesSearch;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					size: 16,
					className: "absolute right-3 top-3 text-slate-400"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: search,
					onChange: (e) => setSearch(e.target.value),
					placeholder: "ابحث عن متجر أو منتج...",
					className: "w-full rounded-2xl border border-slate-200 bg-white py-2.5 pr-9 pl-4 text-xs shadow-sm outline-none focus:border-emerald-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 border-b border-slate-100 pb-2 dark:border-slate-800",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFilter("all"),
						className: `rounded-xl px-3 py-1.5 text-xs font-bold transition ${filter === "all" ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`,
						children: "الكل"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFilter("unread"),
						className: `rounded-xl px-3 py-1.5 text-xs font-bold transition ${filter === "unread" ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`,
						children: "غير مقروء"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFilter("orders"),
						className: `rounded-xl px-3 py-1.5 text-xs font-bold transition ${filter === "orders" ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`,
						children: "طلباتي 📦"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: filtered.map((chat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onClick: () => onSelectConversation(chat),
					className: "flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm transition hover:border-emerald-300 dark:border-slate-800 dark:bg-slate-900",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: chat.storeAvatar,
								alt: chat.storeName,
								className: "size-12 rounded-2xl object-cover"
							}), chat.isOnline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0 text-right",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xs font-black text-slate-800 dark:text-slate-100 truncate",
										children: chat.storeName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-slate-400",
										children: chat.lastTime
									})]
								}),
								chat.relatedProductName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-0.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 11 }),
										" بخصوص: ",
										chat.relatedProductName
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-500 dark:text-slate-400 truncate mt-1",
									children: chat.lastMessage
								})
							]
						}),
						chat.unreadCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-5 place-items-center rounded-full bg-emerald-500 text-[10px] font-black text-white",
							children: chat.unreadCount
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, {
							size: 16,
							className: "text-slate-400"
						})
					]
				}, chat.id))
			})
		]
	});
}
function ChatRoom({ conversation, onBack, onOpenStore, products = [] }) {
	const [messages, setMessages] = (0, import_react.useState)(conversation.messages);
	const [input, setInput] = (0, import_react.useState)("");
	const [showTools, setShowTools] = (0, import_react.useState)(false);
	const [showSafetyMenu, setShowSafetyMenu] = (0, import_react.useState)(false);
	const [showReport, setShowReport] = (0, import_react.useState)(false);
	const [blocked, setBlocked] = (0, import_react.useState)(false);
	const [reportReason, setReportReason] = (0, import_react.useState)("احتيال");
	const [offerAmount, setOfferAmount] = (0, import_react.useState)("");
	const [replyingTo, setReplyingTo] = (0, import_react.useState)(null);
	const [notice, setNotice] = (0, import_react.useState)(null);
	const relatedProduct = products.find((product) => product.seller_id === conversation.storeId) ?? products[0];
	const quickReplies = [
		"هل المنتج متوفر؟",
		"كم سعر النهائي مع التوصيل؟",
		"متى يصل الطلب؟"
	];
	const handleSend = (textToSend) => {
		const text = textToSend || input;
		if (!text.trim() || blocked) return;
		const newMsg = {
			id: Date.now().toString(),
			sender: "user",
			text,
			time: "الآن",
			replyTo: replyingTo ? {
				id: replyingTo.id,
				text: replyingTo.text ?? "رسالة مرفقة"
			} : void 0
		};
		setMessages((prev) => [...prev, newMsg]);
		if (!textToSend) setInput("");
		setReplyingTo(null);
	};
	const showNotice = (message) => {
		setNotice(message);
		window.setTimeout(() => setNotice(null), 2500);
	};
	const togglePin = (message) => {
		setMessages((current) => current.map((item) => item.id === message.id ? {
			...item,
			isPinned: !item.isPinned
		} : item));
		showNotice(message.isPinned ? "تم إلغاء تثبيت الرسالة" : "تم تثبيت الرسالة");
	};
	const deleteMessage = (messageId) => {
		setMessages((current) => current.filter((item) => item.id !== messageId));
		if (replyingTo?.id === messageId) setReplyingTo(null);
		showNotice("تم حذف الرسالة");
	};
	const sendProductCard = () => {
		if (!relatedProduct) return;
		setMessages((current) => [...current, {
			id: Date.now().toString(),
			sender: "user",
			text: "أرغب بالاستفسار عن هذا المنتج داخل صفصاف.",
			time: "الآن",
			type: "product",
			productDetails: {
				id: relatedProduct.id,
				name: relatedProduct.name,
				price: relatedProduct.price,
				image: relatedProduct.image_url
			}
		}]);
		setShowTools(false);
	};
	const sendOffer = () => {
		const amount = Number(offerAmount);
		if (!Number.isFinite(amount) || amount <= 0) return;
		setMessages((current) => [...current, {
			id: Date.now().toString(),
			sender: "user",
			time: "الآن",
			type: "offer",
			text: "عرض خاص للطلب داخل صفصاف.",
			offerDetails: {
				amount,
				expiresIn: "24 ساعة"
			}
		}]);
		setOfferAmount("");
		setShowTools(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		dir: "rtl",
		className: "fixed inset-0 z-50 flex flex-col bg-background",
		children: [
			notice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed left-1/2 top-5 z-[70] flex -translate-x-1/2 items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground shadow-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					size: 14,
					className: "text-primary"
				}), notice]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between border-b border-border bg-card px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onBack,
						className: "rounded-xl p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground",
						"aria-label": "العودة",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 20 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onOpenStore?.(conversation.storeId),
						className: "flex items-center gap-2.5 text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: conversation.storeAvatar,
							alt: conversation.storeName,
							className: "size-10 rounded-full border-2 border-primary/40 object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-black text-foreground",
								children: conversation.storeName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold text-primary",
								children: conversation.isOnline ? "● متصل الآن" : "متصل مؤخراً"
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center gap-2",
					children: [
						onOpenStore && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onOpenStore(conversation.storeId),
							className: "flex items-center gap-1.5 rounded-xl bg-muted px-3 py-1.5 text-[11px] font-bold text-foreground hover:bg-accent hover:text-accent-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { size: 14 }), " المتجر"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setShowSafetyMenu((current) => !current),
							className: "grid size-9 place-items-center rounded-xl bg-muted text-muted-foreground hover:text-foreground",
							"aria-label": "خيارات المحادثة",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { size: 18 })
						}),
						showSafetyMenu && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute left-0 top-11 z-20 w-44 rounded-2xl border border-border bg-card p-1.5 text-right shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setBlocked(true);
									setShowSafetyMenu(false);
									showNotice("تم حظر المتجر");
								},
								className: "flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-destructive hover:bg-destructive/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { size: 14 }), " حظر المتجر"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setShowReport(true);
									setShowSafetyMenu(false);
								},
								className: "flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-foreground hover:bg-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, { size: 14 }), " إبلاغ عن انتهاك"]
							})]
						})
					]
				})]
			}),
			messages.some((message) => message.isPinned) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-2 text-[11px] text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, {
					size: 14,
					className: "shrink-0 text-primary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "truncate",
					children: ["رسالة مثبتة: ", messages.find((message) => message.isPinned)?.text]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-3 overflow-y-auto bg-muted/40 p-4",
				children: [blocked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-sm rounded-2xl border border-rose-200 bg-rose-50 p-4 text-center text-xs font-bold text-rose-700",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, {
						size: 18,
						className: "mx-auto mb-2"
					}), "تم حظر هذا المتجر ولن تصلك رسائل جديدة."]
				}), messages.map((msg) => {
					const isUser = msg.sender === "user";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex flex-col ${isUser ? "items-start" : "items-end"}`,
						children: [
							msg.type === "product" && msg.productDetails && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 w-full max-w-xs rounded-2xl border border-emerald-200 bg-emerald-50/60 p-3 dark:border-emerald-900 dark:bg-emerald-950/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] font-bold text-emerald-700 dark:text-emerald-400",
									children: "🛍️ المنتج المرتبط للمناقشة"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: msg.productDetails.image,
										alt: msg.productDetails.name,
										className: "size-12 rounded-xl object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right flex-1 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-black truncate",
											children: msg.productDetails.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs font-bold text-emerald-600 mt-0.5",
											children: [msg.productDetails.price.toLocaleString("ar-IQ"), " د.ع"]
										})]
									})]
								})]
							}),
							msg.type === "order" && msg.orderDetails && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 w-full max-w-xs rounded-2xl border border-blue-200 bg-blue-50 p-3 dark:border-blue-900 dark:bg-blue-950/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs font-black text-blue-700 dark:text-blue-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { size: 14 }), " حالة الطلب"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: msg.orderDetails.orderId })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-slate-700 dark:text-slate-300 font-bold",
									children: msg.orderDetails.status
								})]
							}),
							msg.type === "offer" && msg.offerDetails && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 w-full max-w-xs rounded-2xl border border-amber-200 bg-amber-50 p-3 text-right dark:border-amber-900 dark:bg-amber-950/30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs font-black text-amber-800 dark:text-amber-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { size: 14 }), " عرض خاص"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: msg.offerDetails.expiresIn })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-lg font-black text-amber-900 dark:text-amber-200",
									children: [msg.offerDetails.amount.toLocaleString("ar-IQ"), " د.ع"]
								})]
							}),
							msg.text && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative max-w-[80%]",
								children: [
									msg.replyTo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-1 flex items-center gap-1 rounded-t-xl border-r-2 border-primary bg-secondary px-3 py-1.5 text-[10px] text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerUpRight, {
											size: 12,
											className: "text-primary"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: msg.replyTo.text
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `rounded-2xl px-4 py-2.5 text-xs font-bold shadow-sm ${isUser ? "rounded-br-none bg-primary text-primary-foreground" : "rounded-bl-none bg-card text-foreground"}`,
										children: [msg.text, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-1 flex items-center justify-end gap-1 text-[9px] opacity-70",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: msg.time }), isUser && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { size: 12 })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `absolute -top-3 ${isUser ? "left-2" : "right-2"} hidden items-center rounded-lg border border-border bg-card shadow-lg group-hover:flex`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setReplyingTo(msg),
												className: "p-1.5 text-muted-foreground hover:text-primary",
												title: "رد",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerUpRight, { size: 13 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => togglePin(msg),
												className: "p-1.5 text-muted-foreground hover:text-primary",
												title: "تثبيت",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, { size: 13 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => deleteMessage(msg.id),
												className: "p-1.5 text-muted-foreground hover:text-destructive",
												title: "حذف",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 13 })
											})
										]
									})
								]
							})
						]
					}, msg.id);
				})]
			}),
			replyingTo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-t border-border bg-card px-4 py-2 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-2 text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerUpRight, { className: "size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "truncate",
						children: ["الرد على: ", replyingTo.text]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setReplyingTo(null),
					className: "text-muted-foreground hover:text-foreground",
					"aria-label": "إلغاء الرد",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1.5 overflow-x-auto bg-muted px-4 py-2 no-scrollbar",
				children: quickReplies.map((qr, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => handleSend(qr),
					className: "shrink-0 rounded-full bg-card px-3 py-1 text-[11px] font-bold text-foreground shadow-sm transition hover:bg-accent hover:text-accent-foreground",
					children: qr
				}, idx))
			}),
			showTools && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-2 bg-white p-3 border-t dark:bg-slate-900 dark:border-slate-800 text-center text-xs font-bold",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: sendProductCard,
						className: "rounded-xl bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {
							size: 15,
							className: "mx-auto mb-1"
						}), "إرسال المنتج"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: sendOffer,
						className: "rounded-xl bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
							size: 15,
							className: "mx-auto mb-1"
						}), "إرسال العرض"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setShowTools(false),
						className: "rounded-xl bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							size: 15,
							className: "mx-auto mb-1"
						}), "إغلاق"]
					})
				]
			}),
			showTools && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t bg-amber-50 p-3 text-right dark:border-slate-800 dark:bg-amber-950/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-[10px] font-bold text-amber-900 dark:text-amber-200",
					children: ["قيمة العرض الخاص", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: offerAmount,
						onChange: (event) => setOfferAmount(event.target.value),
						type: "number",
						min: "1",
						placeholder: "مثال: 85000",
						className: "mt-1 w-full rounded-xl border border-amber-200 bg-white p-2 text-xs outline-none dark:border-amber-900 dark:bg-slate-900"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-t border-border bg-card p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setShowTools(!showTools),
						className: "grid size-10 place-items-center rounded-xl bg-muted text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 20 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: input,
						onChange: (e) => setInput(e.target.value),
						onKeyDown: (e) => e.key === "Enter" && handleSend(),
						placeholder: "اكتب رسالتك للبائع...",
						disabled: blocked,
						className: "flex-1 rounded-2xl border border-input bg-muted px-4 py-2.5 text-xs text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => handleSend(),
						type: "button",
						disabled: blocked,
						className: "grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 disabled:opacity-50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 18 })
					})
				]
			}),
			showReport && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4",
				onClick: () => setShowReport(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm rounded-3xl bg-white p-5 text-right shadow-2xl dark:bg-slate-900",
					onClick: (event) => event.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setShowReport(false),
								className: "grid size-8 place-items-center rounded-xl bg-slate-100 dark:bg-slate-800",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 15 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-black",
								children: "إبلاغ عن انتهاك"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-slate-500",
							children: "اختر سبب البلاغ ليبقى التواصل آمناً داخل صفصاف."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 space-y-2",
							children: [
								"احتيال",
								"تأخير متكرر",
								"أسلوب غير لائق"
							].map((reason) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setReportReason(reason),
								className: `flex w-full items-center justify-between rounded-xl border p-3 text-xs font-bold ${reportReason === reason ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-slate-200 dark:border-slate-700"}`,
								children: [reason, reportReason === reason && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 })]
							}, reason))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setShowReport(false),
							className: "mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-rose-500 py-2.5 text-xs font-black text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { size: 15 }), " إرسال البلاغ"]
						})
					]
				})
			})
		]
	});
}
var MOCK_STORES = [{
	id: "1",
	name: "متجر بغداد سبورت",
	avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
	verified: true,
	bio: "أفضل المستلزمات الرياضية والأحذية الأصلية",
	phone: "9647700000001",
	location: "بغداد - المنصور"
}, {
	id: "2",
	name: "مركز المنصور للتكنولوجيا",
	avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
	verified: true,
	bio: "أحدث أجهزة الآيفون واللابتوبات بضمان حقيقي",
	phone: "9647700000002",
	location: "بغداد - الكرادة"
}];
var MOCK_STORIES = [{
	id: "s1",
	storeId: "1",
	storeName: "بغداد سبورت",
	storeAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
	mediaUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
	createdAt: "قبل 15 دقيقة",
	productId: "p1"
}, {
	id: "s2",
	storeId: "2",
	storeName: "المنصور تِك",
	storeAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
	mediaUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
	createdAt: "قبل ساعة",
	productId: "p2"
}];
var MOCK_PRODUCTS = [{
	id: "p1",
	name: "حذاء نايكي اير فورس كلاسيك",
	price: 9e4,
	image_url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
	seller_id: "1",
	seller_name: "متجر بغداد سبورت",
	seller_avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
	category: "fashion",
	in_stock: true,
	created_at: "منذ ساعتين",
	description: "حذاء رياضي أصلي ومريح للارتداء اليومي"
}, {
	id: "p2",
	name: "آيفون 15 برو ماكس 256GB",
	price: 145e4,
	image_url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
	seller_id: "2",
	seller_name: "مركز المنصور للتكنولوجيا",
	seller_avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
	category: "electronics",
	in_stock: true,
	created_at: "منذ 4 ساعات",
	description: "جهاز جديد بالكرتونة مع ضمان سنة كاملة"
}];
var MOCK_NOTIFICATIONS = [{
	id: "n1",
	title: "تم تأكيد طلبك",
	description: "طلبك لحذاء نايكي في طريقه إليك الآن",
	time: "قبل 10 دقائق",
	read: false,
	type: "order"
}, {
	id: "n2",
	title: "خصم خاص 20%",
	description: "خصومات حصرية على قسم الإلكترونيات اليوم فقط",
	time: "قبل ساعة",
	read: false,
	type: "discount"
}];
function buildStoreRagData(products) {
	return {
		name: "متجر بغداد الرقمي",
		products: products.map((product) => ({
			id: product.id,
			name: product.name,
			price: product.price,
			in_stock: product.in_stock,
			quantity: product.in_stock ? 1 : 0
		})),
		deliveryPolicy: "بغداد 2-3 أيام، البصرة 1-2 يوم",
		returnPolicy: "الاستبدال خلال 7 أيام",
		ledger: {
			outstanding: 0,
			collected: 0
		},
		stories: {
			active: 0,
			clicks: 0
		}
	};
}
function answerFromStoreData(storeData, userMessage) {
	const message = userMessage.trim().toLowerCase();
	if (/التاجر|موظف|مشكلة|غاضب|شكوى|human/.test(message)) return {
		intent: "TRANSFER_TO_HUMAN",
		text_response: "سأحوّل المحادثة الآن إلى موظف المتجر لمساعدتك بدقة.",
		action: "TRANSFER_TO_HUMAN"
	};
	if (/توصيل|شحن|يوصل/.test(message)) return {
		intent: "DELIVERY_QUERY",
		text_response: `التوصيل: ${storeData.deliveryPolicy}`
	};
	const product = storeData.products.find((item) => message.includes(item.name.toLowerCase()) || item.name.toLowerCase().split(" ").some((word) => word.length > 3 && message.includes(word)));
	if (!product) return {
		intent: "UNKNOWN",
		text_response: "عذراً، هذا المنتج غير متوفر حالياً. يمكنني تحويلك إلى موظف المتجر."
	};
	if (!product.in_stock || product.quantity <= 0) return {
		intent: "INVENTORY_QUERY",
		text_response: "عذراً، هذا المنتج غير متوفر حالياً."
	};
	return {
		intent: "RECOMMEND_PRODUCT",
		text_response: `هذا المنتج متوفر بسعر ${product.price.toLocaleString("ar-IQ")} د.ع.`,
		widget: {
			type: "PRODUCT_CARD",
			data: product
		}
	};
}
var permissionLabels = {
	products: "الإجابة عن المنتجات",
	prices: "الإجابة عن الأسعار",
	inventory: "معرفة المخزون",
	orders: "تتبع الطلبات",
	recommendations: "اقتراح المنتجات",
	faq: "الإجابة عن الأسئلة الشائعة"
};
var initialPermissions = {
	products: true,
	prices: true,
	inventory: true,
	orders: true,
	recommendations: true,
	faq: true
};
function MerchantAiAssistant({ onAddToCart }) {
	const [isEnabled, setIsEnabled] = (0, import_react.useState)(true);
	const [availabilityMode, setAvailabilityMode] = (0, import_react.useState)("always");
	const [isSuggestionsEnabled, setIsSuggestionsEnabled] = (0, import_react.useState)(true);
	const [deliveryPolicy, setDeliveryPolicy] = (0, import_react.useState)("بغداد 4,000 د.ع، المحافظات 6,000 د.ع");
	const [returnPolicy, setReturnPolicy] = (0, import_react.useState)("لا يوجد استرجاع للقطع المستعملة");
	const [freeRepliesRemaining, setFreeRepliesRemaining] = (0, import_react.useState)(100);
	const [assistantMode, setAssistantMode] = (0, import_react.useState)("friendly");
	const [knowledgeTab, setKnowledgeTab] = (0, import_react.useState)("knowledge");
	const [permissions, setPermissions] = (0, import_react.useState)(initialPermissions);
	const [isSettingsOpen, setIsSettingsOpen] = (0, import_react.useState)(false);
	const [isHumanMode, setIsHumanMode] = (0, import_react.useState)(false);
	const [input, setInput] = (0, import_react.useState)("");
	const [messages, setMessages] = (0, import_react.useState)([{
		id: 1,
		sender: "customer",
		text: "هل عندكم حذاء رياضي أسود؟"
	}, {
		id: 2,
		sender: "ai",
		text: "هلا بيك 🌷 نعم، أفحص المنتجات والمخزون الفعلي حتى أرشح لك الأنسب."
	}]);
	const [handoffReason, setHandoffReason] = (0, import_react.useState)(null);
	const availableProducts = (0, import_react.useMemo)(() => MOCK_PRODUCTS.filter((product) => product.in_stock), []);
	const storeData = (0, import_react.useMemo)(() => ({
		...buildStoreRagData(availableProducts),
		deliveryPolicy,
		returnPolicy
	}), [
		availableProducts,
		deliveryPolicy,
		returnPolicy
	]);
	const togglePermission = (key) => {
		setPermissions((current) => ({
			...current,
			[key]: !current[key]
		}));
	};
	const sendMessage = (textToSend = input) => {
		const text = textToSend.trim();
		if (!text) return;
		const customerMessage = {
			id: Date.now(),
			sender: "customer",
			text
		};
		setMessages((current) => [...current, customerMessage]);
		setInput("");
		if (!isEnabled || isHumanMode || availabilityMode === "off" || freeRepliesRemaining <= 0) {
			setMessages((current) => [...current, {
				id: Date.now() + 1,
				sender: "human",
				text: "تم تحويل المحادثة لك. يمكنك متابعة الرد كموظف المتجر."
			}]);
			return;
		}
		if (availabilityMode === "after_hours") {
			const hour = (/* @__PURE__ */ new Date()).getHours();
			if (hour >= 9 && hour < 18) {
				setMessages((current) => [...current, {
					id: Date.now() + 1,
					sender: "human",
					text: "سيتابع موظف المتجر رسالتك خلال ساعات العمل (09:00 - 18:00)."
				}]);
				return;
			}
		}
		const answer = answerFromStoreData(storeData, text);
		setFreeRepliesRemaining((current) => Math.max(0, current - 1));
		if (answer.action === "TRANSFER_TO_HUMAN") {
			setHandoffReason("تم إيقاف الرد الآلي بسبب طلب تدخل بشري أو انخفاض الثقة.");
			setIsHumanMode(true);
		}
		const aiMessage = {
			id: Date.now() + 1,
			sender: "ai",
			text: answer.text_response
		};
		if (answer.widget) {
			aiMessage.productId = answer.widget.data.id;
			aiMessage.widgetProductId = answer.widget.data.id;
		}
		setMessages((current) => [...current, aiMessage]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-4 rounded-3xl border border-emerald-100 bg-white p-4 text-right shadow-sm dark:border-emerald-950/60 dark:bg-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setIsEnabled((current) => !current),
					className: `flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-black transition ${isEnabled ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300" : "bg-slate-100 text-slate-500 dark:bg-slate-800"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2 rounded-full ${isEnabled ? "bg-emerald-500" : "bg-slate-400"}` }), availabilityMode === "off" ? "متوقف مؤقتًا" : availabilityMode === "after_hours" ? "خارج أوقات العمل" : "يعمل الآن"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-10 place-items-center rounded-2xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { size: 21 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-black",
						children: "مساعد صفصاف الذكي"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-slate-400",
						children: "Salix AI Assistant · SELX"
					})] })]
				})]
			}),
			handoffReason && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-2 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-[10px] font-bold text-amber-800 dark:border-amber-900/50 dark:bg-amber-950/20 dark:text-amber-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
					size: 15,
					className: "mt-0.5 shrink-0"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [handoffReason, " تم تنبيه التاجر ليتابع المحادثة."] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between rounded-2xl border border-emerald-100 bg-emerald-50/60 px-3 py-2 text-[10px] dark:border-emerald-950/50 dark:bg-emerald-950/20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-black text-emerald-700 dark:text-emerald-300",
					children: [freeRepliesRemaining, " رد مجاني متبقٍ هذا الشهر"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-slate-500",
					children: "الباقة المجانية"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "المحادثات اليوم",
						value: "428",
						icon: MessageCircle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "رد عليها AI",
						value: "371",
						icon: Bot
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "مبيعات من AI",
						value: "4,820 د.ع",
						icon: ShoppingBag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "تحتاج تدخل",
						value: "12",
						icon: UserRound
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsSettingsOpen((current) => !current),
								className: "grid size-8 place-items-center rounded-xl bg-white text-slate-500 shadow-sm dark:bg-slate-900",
								"aria-label": "إعدادات الذكاء الاصطناعي",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { size: 16 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "flex items-center gap-1.5 text-xs font-black",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
									size: 15,
									className: "text-emerald-500"
								}), " إعدادات المساعد"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
							label: "الرد التلقائي",
							enabled: isEnabled && availabilityMode !== "off",
							onChange: () => {
								setIsEnabled((current) => !current);
								setAvailabilityMode((current) => current === "off" ? "always" : "off");
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-black text-slate-400",
								children: "نمط التشغيل"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 gap-1",
								children: [
									["always", "24/7"],
									["after_hours", "خارج العمل"],
									["off", "إيقاف"]
								].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setAvailabilityMode(value),
									className: `rounded-lg px-2 py-2 text-[10px] font-bold ${availabilityMode === value ? "bg-emerald-500 text-white" : "bg-white text-slate-500 dark:bg-slate-900"}`,
									children: label
								}, value))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
							label: "اقتراح المنتجات",
							enabled: isSuggestionsEnabled,
							onChange: () => setIsSuggestionsEnabled((current) => !current)
						}),
						isSettingsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 border-t border-slate-200 pt-3 dark:border-slate-700",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black text-slate-400",
									children: "شخصية المساعد"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-2",
									children: [
										["friendly", "ودود"],
										["formal", "رسمي"],
										["concise", "مختصر"],
										["store", "أسلوب المتجر"]
									].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setAssistantMode(value),
										className: `rounded-xl px-2 py-2 text-[10px] font-bold ${assistantMode === value ? "bg-emerald-500 text-white" : "bg-white text-slate-600 dark:bg-slate-900 dark:text-slate-300"}`,
										children: [assistantMode === value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											size: 12,
											className: "mr-1 inline"
										}), label]
									}, value))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-[10px] font-bold text-slate-500",
									children: ["سياسة التوصيل", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: deliveryPolicy,
										onChange: (event) => setDeliveryPolicy(event.target.value),
										className: "mt-1 w-full rounded-xl border border-slate-200 bg-white p-2 text-[10px] outline-none dark:border-slate-700 dark:bg-slate-900"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-[10px] font-bold text-slate-500",
									children: ["سياسة الاستبدال", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: returnPolicy,
										onChange: (event) => setReturnPolicy(event.target.value),
										className: "mt-1 w-full rounded-xl border border-slate-200 bg-white p-2 text-[10px] outline-none dark:border-slate-700 dark:bg-slate-900"
									})]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 rounded-2xl border border-slate-100 p-3 dark:border-slate-800",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-800",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowledgeTabButton, {
									active: knowledgeTab === "faq",
									onClick: () => setKnowledgeTab("faq"),
									label: "FAQ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowledgeTabButton, {
									active: knowledgeTab === "permissions",
									onClick: () => setKnowledgeTab("permissions"),
									label: "الحدود"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowledgeTabButton, {
									active: knowledgeTab === "knowledge",
									onClick: () => setKnowledgeTab("knowledge"),
									label: "معرفة المتجر"
								})
							]
						}),
						knowledgeTab === "knowledge" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowledgeRow, {
									icon: Package,
									label: "المنتجات والمخزون",
									value: `${availableProducts.length} منتجات متاحة`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowledgeRow, {
									icon: FileText,
									label: "سياسة الاستبدال",
									value: "الاستبدال خلال 7 أيام"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowledgeRow, {
									icon: MessageCircle,
									label: "أسلوب الرد",
									value: assistantMode === "friendly" ? "ودود، عراقي، مختصر" : "مخصص حسب الإعداد"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowledgeRow, {
									icon: Sparkles,
									label: "التوصيل",
									value: "البصرة 1–2 يوم، بغداد 2–3 أيام"
								})
							]
						}),
						knowledgeTab === "permissions" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-1 text-[10px] font-bold text-amber-600",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 13 }), " لا توجد صلاحية لتغيير الأسعار أو إلغاء الطلبات أو إصدار Refund."]
							}), Object.keys(permissionLabels).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								label: permissionLabels[key],
								enabled: permissions[key],
								onChange: () => togglePermission(key)
							}, key))]
						}),
						knowledgeTab === "faq" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 text-xs text-slate-600 dark:text-slate-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-start gap-2 rounded-xl bg-slate-50 p-2.5 dark:bg-slate-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, {
										size: 15,
										className: "mt-0.5 text-emerald-500"
									}), " التوصيل للبصرة متاح، والمدة المتوقعة من يوم إلى يومين."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-start gap-2 rounded-xl bg-slate-50 p-2.5 dark:bg-slate-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, {
										size: 15,
										className: "mt-0.5 text-emerald-500"
									}), " يراجع المساعد المخزون قبل الإجابة عن التوفر."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "flex w-full items-center justify-between rounded-xl border border-dashed border-emerald-300 p-2 text-[10px] font-bold text-emerald-600",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 14 }), " إضافة سؤال شائع"]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-slate-100 dark:border-slate-800",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-slate-100 p-3 dark:border-slate-800",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsHumanMode((current) => !current),
							className: `flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-[10px] font-black ${isHumanMode ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500 dark:bg-slate-800"}`,
							children: [isHumanMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { size: 13 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { size: 13 }), isHumanMode ? "وضع الموظف" : "وضع AI"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 text-xs font-black",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500" }), " محادثة تجريبية آمنة"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-h-64 space-y-2 overflow-y-auto p-3",
						children: messages.map((message) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex ${message.sender === "customer" ? "justify-start" : "justify-end"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `max-w-[88%] rounded-2xl px-3 py-2 text-[11px] font-medium ${message.sender === "customer" ? "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200" : message.sender === "human" ? "bg-amber-100 text-amber-800" : "bg-emerald-500 text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: message.text }), message.widgetProductId && (() => {
									const product = availableProducts.find((item) => item.id === message.widgetProductId);
									return product ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 overflow-hidden rounded-xl bg-white/15 p-2 text-[10px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: product.image_url,
											alt: product.name,
											className: "mb-2 aspect-video w-full rounded-lg object-cover"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate font-black",
												children: product.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => onAddToCart?.(product),
												className: "shrink-0 rounded-lg bg-white px-2 py-1 font-black text-emerald-700",
												children: "إضافة للسلة"
											})]
										})]
									}) : null;
								})()]
							})
						}, message.id))
					}),
					isSuggestionsEnabled && !isHumanMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 overflow-x-auto border-t border-slate-100 px-3 py-2 dark:border-slate-800",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => sendMessage("أريد المنتج الأكثر مبيعًا"),
							className: "shrink-0 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
							children: "اقتراح الأكثر مبيعًا"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setIsHumanMode(true),
							className: "shrink-0 rounded-full bg-amber-50 px-3 py-1.5 text-[10px] font-bold text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
							children: "تحويل لموظف"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 border-t border-slate-100 p-3 dark:border-slate-800",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => sendMessage(),
								className: "grid size-9 place-items-center rounded-xl bg-emerald-500 text-white",
								"aria-label": "إرسال رسالة",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 15 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: input,
								onChange: (event) => setInput(event.target.value),
								onKeyDown: (event) => event.key === "Enter" && sendMessage(),
								placeholder: isHumanMode ? "اكتب رد الموظف..." : "اختبر سؤال العميل...",
								className: "flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsHumanMode((current) => !current),
								className: "grid size-9 place-items-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800",
								"aria-label": "تحويل لموظف",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { size: 15 })
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-2 rounded-2xl bg-amber-50 p-3 text-[10px] text-amber-800 dark:bg-amber-950/30 dark:text-amber-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
					size: 15,
					className: "mt-0.5 shrink-0"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "المساعد يطلب تنفيذ الأدوات عبر صلاحيات محددة فقط. لا يتم الشراء أو تعديل الطلب أو أي إجراء حساس دون تأكيد واضح من المستخدم." })]
			})
		]
	});
}
function Metric({ label, value, icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-slate-50 p-2.5 dark:bg-slate-800/60",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				size: 15,
				className: "text-emerald-500"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs font-black",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[9px] text-slate-400",
				children: label
			})
		]
	});
}
function ToggleRow({ label, enabled, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onChange,
		className: "flex w-full items-center justify-between py-1 text-[11px] font-bold",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `relative h-5 w-9 rounded-full transition ${enabled ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-700"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-1 size-3 rounded-full bg-white transition ${enabled ? "right-1" : "left-1"}` })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
function KnowledgeTabButton({ active, onClick, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: `flex-1 rounded-lg py-1.5 text-[10px] font-bold ${active ? "bg-white text-emerald-600 shadow-sm dark:bg-slate-900 dark:text-emerald-400" : "text-slate-400"}`,
		children: label
	});
}
function KnowledgeRow({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-2 rounded-xl bg-slate-50 p-2.5 dark:bg-slate-800",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] text-slate-500 dark:text-slate-400",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-1.5 font-bold",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				size: 14,
				className: "text-emerald-500"
			}), label]
		})]
	});
}
var initialInventory = [{
	id: "stock-p1",
	productId: "p1",
	name: "حذاء نايكي اير فورس كلاسيك",
	sku: "NK-AF-43-BLK",
	variant: "43 • أسود",
	quantity: 24,
	minimum: 5,
	purchaseCost: 7e4,
	sellingPrice: 9e4,
	location: "المتجر",
	movements: [
		{
			id: 1,
			quantity: 20,
			reason: "استلام بضاعة",
			time: "اليوم 10:32"
		},
		{
			id: 2,
			quantity: -1,
			reason: "طلب #18291",
			time: "اليوم 12:15"
		},
		{
			id: 3,
			quantity: -1,
			reason: "طلب #18294",
			time: "اليوم 13:40"
		},
		{
			id: 4,
			quantity: 5,
			reason: "إضافة يدوية",
			time: "أمس"
		}
	]
}, {
	id: "stock-p2",
	productId: "p2",
	name: "آيفون 15 برو ماكس 256GB",
	sku: "IP15-PM-256",
	variant: "256GB • تيتانيوم",
	quantity: 4,
	minimum: 5,
	purchaseCost: 125e4,
	sellingPrice: 145e4,
	location: "المخزن الرئيسي",
	movements: [{
		id: 5,
		quantity: 8,
		reason: "استلام بضاعة",
		time: "قبل يومين"
	}, {
		id: 6,
		quantity: -4,
		reason: "طلبات مؤكدة",
		time: "اليوم 09:20"
	}]
}];
function InventoryManager() {
	const [items, setItems] = (0, import_react.useState)(initialInventory);
	const [search, setSearch] = (0, import_react.useState)("");
	const [activeItemId, setActiveItemId] = (0, import_react.useState)(null);
	const [showAddStock, setShowAddStock] = (0, import_react.useState)(false);
	const [showScanner, setShowScanner] = (0, import_react.useState)(false);
	const [minimumAlertsEnabled, setMinimumAlertsEnabled] = (0, import_react.useState)(true);
	const [selectedLocation, setSelectedLocation] = (0, import_react.useState)("الكل");
	const locations = ["الكل", ...new Set(items.map((item) => item.location))];
	const filteredItems = (0, import_react.useMemo)(() => {
		const normalizedSearch = search.trim().toLowerCase();
		return items.filter((item) => {
			const matchesSearch = [
				item.name,
				item.sku,
				item.variant
			].join(" ").toLowerCase().includes(normalizedSearch);
			const matchesLocation = selectedLocation === "الكل" || item.location === selectedLocation;
			return matchesSearch && matchesLocation;
		});
	}, [
		items,
		search,
		selectedLocation
	]);
	const lowStockCount = items.filter((item) => item.quantity <= item.minimum).length;
	const totalCost = items.reduce((sum, item) => sum + item.quantity * item.purchaseCost, 0);
	const updateQuantity = (itemId, delta) => {
		setItems((current) => current.map((item) => {
			if (item.id !== itemId) return item;
			const nextQuantity = Math.max(0, item.quantity + delta);
			return {
				...item,
				quantity: nextQuantity,
				movements: [{
					id: Date.now(),
					quantity: delta,
					reason: delta > 0 ? "إضافة يدوية" : "سحب يدوي",
					time: "الآن"
				}, ...item.movements]
			};
		}));
	};
	const addStock = (itemId, quantity, reason) => {
		if (!Number.isFinite(quantity) || quantity <= 0) return;
		setItems((current) => current.map((item) => {
			if (item.id !== itemId) return item;
			return {
				...item,
				quantity: item.quantity + quantity,
				movements: [{
					id: Date.now(),
					quantity,
					reason: reason || "استلام بضاعة",
					time: "الآن"
				}, ...item.movements]
			};
		}));
		setShowAddStock(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-4 rounded-3xl border border-slate-100 bg-white p-4 text-right shadow-sm dark:border-slate-800 dark:bg-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setShowScanner(true),
						className: "grid size-9 place-items-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-200",
						"aria-label": "مسح المنتج",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Barcode, { size: 18 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setShowAddStock(true),
						className: "flex items-center gap-1.5 rounded-xl bg-emerald-500 px-3 py-2 text-[11px] font-black text-white shadow-md shadow-emerald-500/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 15 }), " إضافة مخزون"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "flex items-center justify-end gap-2 text-sm font-black",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {
						size: 18,
						className: "text-emerald-500"
					}), " إدارة المخزون"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[10px] text-slate-400",
					children: "الرصيد، التكلفة، والحركات في مكان واحد"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
						label: "إجمالي القطع",
						value: String(items.reduce((sum, item) => sum + item.quantity, 0))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
						label: "مخزون منخفض",
						value: String(lowStockCount),
						tone: lowStockCount > 0 ? "warning" : "normal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
						label: "قيمة التكلفة",
						value: `${totalCost.toLocaleString("ar-IQ")} د.ع`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
						label: "المواقع",
						value: String(locations.length - 1)
					})
				]
			}),
			minimumAlertsEnabled && lowStockCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setMinimumAlertsEnabled(false),
					className: "text-amber-700 dark:text-amber-300",
					"aria-label": "إخفاء تنبيه المخزون",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 15 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-2 text-[11px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
						size: 16,
						className: "mt-0.5 shrink-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "مخزون منخفض:" }),
						" ",
						lowStockCount,
						" منتجات وصلت إلى الحد الأدنى أو أقل. راجعها قبل استقبال طلبات جديدة."
					] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						size: 16,
						className: "absolute right-3 top-3 text-slate-400"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: search,
						onChange: (event) => setSearch(event.target.value),
						placeholder: "ابحث عن منتج أو SKU...",
						className: "w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-9 pl-3 text-xs outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "relative min-w-40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							size: 14,
							className: "absolute right-3 top-3 text-slate-400"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: selectedLocation,
							onChange: (event) => setSelectedLocation(event.target.value),
							className: "w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-9 pl-8 text-xs outline-none dark:border-slate-700 dark:bg-slate-800",
							children: locations.map((location) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: location }, location))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
							size: 14,
							className: "pointer-events-none absolute left-3 top-3 text-slate-400"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [filteredItems.map((item) => {
					const isLow = item.quantity <= item.minimum;
					const isActive = item.id === activeItemId;
					const profit = item.sellingPrice - item.purchaseCost;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `rounded-2xl border p-3 transition ${isLow ? "border-amber-200 bg-amber-50/50 dark:border-amber-900/60 dark:bg-amber-950/20" : "border-slate-100 dark:border-slate-800"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => updateQuantity(item.id, -1),
											className: "grid size-8 place-items-center rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200",
											"aria-label": `سحب قطعة من ${item.name}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { size: 15 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-8 text-center text-sm font-black",
											children: item.quantity
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => updateQuantity(item.id, 1),
											className: "grid size-8 place-items-center rounded-lg bg-emerald-500 text-white hover:bg-emerald-600",
											"aria-label": `إضافة قطعة إلى ${item.name}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { size: 15 })
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-end gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `rounded-full px-2 py-0.5 text-[9px] font-black ${isLow ? "bg-amber-200 text-amber-800" : "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300"}`,
												children: isLow ? "مخزون منخفض" : "متوفر"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "truncate text-xs font-black",
												children: item.name
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-[10px] text-slate-400",
											children: [
												item.variant,
												" • SKU: ",
												item.sku
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-500 dark:text-slate-400",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 11 }),
												" ",
												item.location,
												" • الحد الأدنى ",
												item.minimum
											]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 text-center dark:border-slate-800",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[9px] text-slate-400",
										children: "سعر البيع"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
										className: "text-[11px]",
										children: [item.sellingPrice.toLocaleString("ar-IQ"), " د.ع"]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[9px] text-slate-400",
										children: "الربح المتوقع"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
										className: "text-[11px] text-emerald-600",
										children: [profit.toLocaleString("ar-IQ"), " د.ع"]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[9px] text-slate-400",
										children: "قيمة التكلفة"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
										className: "text-[11px]",
										children: [(item.quantity * item.purchaseCost).toLocaleString("ar-IQ"), " د.ع"]
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setActiveItemId(isActive ? null : item.id),
									className: "flex items-center gap-1 text-[10px] font-bold text-slate-500 hover:text-emerald-600",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { size: 13 }),
										" ",
										isActive ? "إخفاء الحركة" : "عرض حركة المخزون"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setActiveItemId(item.id);
										setShowAddStock(true);
									},
									className: "flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 13 }), " إضافة بضاعة"]
								})]
							}),
							isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MovementList, { movements: item.movements })
						]
					}, item.id);
				}), filteredItems.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl border border-dashed border-slate-200 p-8 text-center text-xs text-slate-400 dark:border-slate-700",
					children: "لا توجد منتجات مطابقة للبحث."
				})]
			}),
			showAddStock && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddStockModal, {
				items,
				selectedItemId: activeItemId,
				onClose: () => setShowAddStock(false),
				onAdd: addStock
			}),
			showScanner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScannerModal, { onClose: () => setShowScanner(false) })
		]
	});
}
function SummaryCard({ label, value, tone = "normal" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-2xl p-2.5 ${tone === "warning" ? "bg-amber-50 dark:bg-amber-950/30" : "bg-slate-50 dark:bg-slate-800/60"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-black",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[9px] text-slate-400",
			children: label
		})]
	});
}
function MovementList({ movements }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 space-y-2 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h5", {
			className: "flex items-center justify-end gap-1 text-[10px] font-black",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, {
				size: 13,
				className: "text-emerald-500"
			}), " حركة المخزون"]
		}), movements.map((movement) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-slate-200 pb-1.5 text-[10px] last:border-0 last:pb-0 dark:border-slate-700",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-slate-400",
				children: movement.time
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: movement.quantity > 0 ? "text-emerald-600" : "text-rose-600",
				children: [
					movement.quantity > 0 ? "+" : "",
					movement.quantity,
					" • ",
					movement.reason
				]
			})]
		}, movement.id))]
	});
}
function AddStockModal({ items, selectedItemId, onClose, onAdd }) {
	const [itemId, setItemId] = (0, import_react.useState)(selectedItemId ?? items[0]?.id ?? "");
	const [quantity, setQuantity] = (0, import_react.useState)("1");
	const [reason, setReason] = (0, import_react.useState)("استلام بضاعة");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalShell, {
		title: "إضافة مخزون",
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 text-right",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-xs font-bold",
					children: ["المنتج", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: itemId,
						onChange: (event) => setItemId(event.target.value),
						className: "mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs dark:border-slate-700 dark:bg-slate-800",
						children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: item.id,
							children: [
								item.name,
								" • ",
								item.variant
							]
						}, item.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-xs font-bold",
					children: ["الكمية", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: "1",
						value: quantity,
						onChange: (event) => setQuantity(event.target.value),
						className: "mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs dark:border-slate-700 dark:bg-slate-800"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-xs font-bold",
					children: ["الملاحظة", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: reason,
						onChange: (event) => setReason(event.target.value),
						className: "mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs dark:border-slate-700 dark:bg-slate-800"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onAdd(itemId, Number(quantity), reason),
					className: "w-full rounded-xl bg-emerald-500 py-2.5 text-xs font-black text-white",
					children: "إضافة وتسجيل الحركة"
				})
			]
		})
	});
}
function ScannerModal({ onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalShell, {
		title: "مسح المنتج",
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid aspect-video place-items-center rounded-2xl border-2 border-dashed border-emerald-400 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Barcode, { size: 58 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-slate-500 dark:text-slate-400",
					children: "واجهة المسح جاهزة للربط مع كاميرا الجهاز أو قارئ Barcode."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					className: "w-full rounded-xl bg-slate-100 py-2.5 text-xs font-bold dark:bg-slate-800",
					children: "إغلاق"
				})
			]
		})
	});
}
function ModalShell({ title, children, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-3xl bg-white p-5 shadow-2xl dark:bg-slate-900",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					className: "grid size-8 place-items-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800",
					"aria-label": "إغلاق",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-black",
					children: title
				})]
			}), children]
		})
	});
}
var statusLabels = {
	new: "جديد",
	packing: "قيد التجميع",
	shipped: "تم الشحن",
	completed: "مكتمل",
	cancelled: "ملغى"
};
var nextStatus = {
	new: "packing",
	packing: "shipped",
	shipped: "completed"
};
var initialOrders = [
	{
		id: "#18294",
		customer: "سارة أحمد",
		items: "حذاء نايكي • 43",
		amount: 9e4,
		status: "new"
	},
	{
		id: "#18291",
		customer: "محمد علي",
		items: "آيفون 15 برو",
		amount: 145e4,
		status: "packing"
	},
	{
		id: "#18288",
		customer: "نور حسين",
		items: "حذاء نايكي • 42",
		amount: 9e4,
		status: "shipped"
	},
	{
		id: "#18271",
		customer: "علي كريم",
		items: "إكسسوارات رياضية",
		amount: 125e3,
		status: "completed"
	}
];
function OrderPipeline() {
	const [orders, setOrders] = (0, import_react.useState)(initialOrders);
	const columns = [
		"new",
		"packing",
		"shipped",
		"completed",
		"cancelled"
	];
	const moveOrder = (orderId) => setOrders((current) => current.map((order) => order.id === orderId && nextStatus[order.status] ? {
		...order,
		status: nextStatus[order.status]
	} : order));
	const printDocument = (order, document) => {
		const popup = window.open("", "_blank", "width=720,height=720");
		if (!popup) return;
		popup.document.write(`<html dir="rtl"><head><title>${document === "invoice" ? "فاتورة" : "بوليصة توصيل"} ${order.id}</title><style>body{font-family:Arial;padding:40px}h1{color:#059669}table{width:100%;border-collapse:collapse}td{padding:12px;border-bottom:1px solid #ddd}</style></head><body><h1>صفصاف | Salix</h1><h2>${document === "invoice" ? "فاتورة الطلب" : "بوليصة التوصيل"} ${order.id}</h2><table><tr><td>العميل</td><td>${order.customer}</td></tr><tr><td>المحتويات</td><td>${order.items}</td></tr><tr><td>المبلغ نقداً</td><td>${order.amount.toLocaleString("ar-IQ")} د.ع</td></tr></table><script>window.print()<\/script></body></html>`);
		popup.document.close();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-4 rounded-3xl border border-emerald-100 bg-white p-4 shadow-sm dark:border-emerald-950/50 dark:bg-slate-900",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-[10px] font-bold text-slate-400",
				children: [orders.length, " طلبات نشطة"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "flex items-center gap-2 text-sm font-black",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCheck, {
					size: 18,
					className: "text-emerald-500"
				}), " خط سير الطلبات"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 xl:grid-cols-5",
			children: columns.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-44 rounded-2xl bg-slate-50 p-2.5 dark:bg-slate-800/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-white px-2 py-1 text-[10px] font-black shadow-sm dark:bg-slate-900",
						children: orders.filter((order) => order.status === status).length
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-black",
						children: statusLabels[status]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: orders.filter((order) => order.status === status).map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-slate-200 bg-white p-3 text-right shadow-sm dark:border-slate-700 dark:bg-slate-900",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-[10px] font-black",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-emerald-600",
									children: order.id
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: order.customer })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[10px] text-slate-500",
								children: order.items
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-[11px] font-black",
								children: [order.amount.toLocaleString("ar-IQ"), " د.ع"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => printDocument(order, "invoice"),
										className: "grid size-8 place-items-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-200",
										"aria-label": "طباعة الفاتورة",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 13 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => printDocument(order, "waybill"),
										className: "grid size-8 place-items-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-200",
										"aria-label": "طباعة بوليصة التوصيل",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { size: 13 })
									}),
									nextStatus[status] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => moveOrder(order.id),
										className: "flex flex-1 items-center justify-center gap-1 rounded-lg bg-emerald-50 px-2 text-[9px] font-black text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300",
										children: ["التالي ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { size: 12 })]
									})
								]
							})
						]
					}, order.id))
				})]
			}, status))
		})]
	});
}
function CodLedger() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-4 rounded-3xl border border-emerald-100 bg-white p-4 shadow-sm dark:border-emerald-950/50 dark:bg-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-amber-50 px-2 py-1 text-[10px] font-black text-amber-700 dark:bg-amber-950/30 dark:text-amber-300",
					children: "تحديث اليوم"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "flex items-center gap-2 text-sm font-black",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalletCards, {
						size: 18,
						className: "text-emerald-500"
					}), " دفتر حسابات الكاش"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-amber-200 bg-amber-50 p-4 text-right dark:border-amber-900/50 dark:bg-amber-950/20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpFromLine, {
							size: 18,
							className: "text-amber-600"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[10px] font-bold text-amber-800 dark:text-amber-300",
							children: "مبالغ معلقة عند المندوب"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "mt-1 block text-xl font-black text-amber-900 dark:text-amber-200",
							children: "1,275,000 د.ع"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-[10px] text-amber-700 dark:text-amber-300",
							children: "9 طلبات بانتظار التسوية"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-right dark:border-emerald-900/50 dark:bg-emerald-950/20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownToLine, {
							size: 18,
							className: "text-emerald-600"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[10px] font-bold text-emerald-800 dark:text-emerald-300",
							children: "المبالغ المحصلة في المحفظة"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "mt-1 block text-xl font-black text-emerald-900 dark:text-emerald-200",
							children: "4,820,000 د.ع"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-[10px] text-emerald-700 dark:text-emerald-300",
							children: "تمت تسوية هذا الأسبوع"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between rounded-xl bg-slate-50 p-3 text-[11px] dark:bg-slate-800/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-black text-emerald-600",
					children: "92%"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-slate-500",
					children: "نسبة تحصيل الطلبات المسلّمة"
				})]
			})
		]
	});
}
var salesByHour = [
	18,
	26,
	34,
	48,
	42,
	67,
	82,
	58,
	39,
	31,
	24,
	18
];
var topProducts = [
	{
		name: "آيفون 15 برو ماكس",
		value: 82
	},
	{
		name: "حذاء نايكي اير فورس",
		value: 64
	},
	{
		name: "إكسسوارات رياضية",
		value: 41
	}
];
function SellerAnalytics() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-4 rounded-3xl border border-emerald-100 bg-white p-4 shadow-sm dark:border-emerald-950/50 dark:bg-slate-900",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1 text-[10px] font-black text-emerald-600",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { size: 14 }), " +18.4% هذا الأسبوع"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "flex items-center gap-2 text-sm font-black",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, {
					size: 18,
					className: "text-emerald-500"
				}), " تحليلات المبيعات"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1.2fr_0.8fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center justify-between text-[10px] text-slate-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "12:00 - 23:00" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-slate-700 dark:text-slate-200",
						children: "أوقات ذروة المبيعات"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-40 items-end gap-2",
					children: salesByHour.map((height, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full rounded-t-lg bg-emerald-500/80 transition hover:bg-emerald-400",
							style: { height: `${height}%` },
							title: `${height} طلب`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[8px] text-slate-400",
							children: index + 12
						})]
					}, index))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 rounded-2xl border border-slate-100 p-4 dark:border-slate-800",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs font-black",
					children: "الأكثر طلباً هذا الأسبوع"
				}), topProducts.map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex justify-between text-[10px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-black text-emerald-600",
						children: [product.value, " طلب"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "truncate",
						children: [
							index + 1,
							". ",
							product.name
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-2 rounded-full bg-slate-100 dark:bg-slate-800",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2 rounded-full bg-emerald-500",
						style: { width: `${product.value}%` }
					})
				})] }, product.name))]
			})]
		})]
	});
}
function BulkOperations() {
	const inputRef = (0, import_react.useRef)(null);
	const [fileName, setFileName] = (0, import_react.useState)("");
	const exportCsv = () => {
		const blob = new Blob(["﻿sku,name,quantity,selling_price\nNK-AF-43-BLK,حذاء نايكي,24,90000\nIP15-PM-256,آيفون 15 برو,4,1450000"], { type: "text/csv;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "salix-inventory.csv";
		link.click();
		URL.revokeObjectURL(url);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-4 rounded-3xl border border-emerald-100 bg-white p-4 shadow-sm dark:border-emerald-950/50 dark:bg-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] text-slate-400",
					children: "CSV متوافق مع Excel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "flex items-center gap-2 text-sm font-black",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, {
						size: 18,
						className: "text-emerald-500"
					}), " استيراد وتصدير جماعي"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => inputRef.current?.click(),
					className: "flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50/60 text-xs font-black text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/20 dark:text-emerald-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 20 }),
						" رفع ملف المخزون",
						fileName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-normal",
							children: fileName
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: exportCsv,
					className: "flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 text-xs font-black text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 20 }), " تصدير قالب CSV"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				type: "file",
				accept: ".csv,text/csv",
				className: "hidden",
				onChange: (event) => setFileName(event.target.files?.[0]?.name ?? "")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] leading-5 text-slate-400",
				children: "استخدم الأعمدة: SKU، الاسم، الكمية، وسعر البيع. راجع الملف قبل اعتماده لتفادي تغيير جماعي غير مقصود."
			})
		]
	});
}
function ProfileScreen({ accountMode = "personal", onEnterSellerMode, onExitSellerMode, onAddToCart, onOpenSettings, onLogout }) {
	const [showQrModal, setShowQrModal] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 pb-20 text-right",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between rounded-2xl border border-emerald-100 bg-white p-3 shadow-sm dark:border-emerald-950/50 dark:bg-slate-900",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: accountMode === "seller" ? onExitSellerMode : onEnterSellerMode,
					className: "flex items-center gap-2 rounded-xl bg-emerald-500 px-3 py-2 text-[11px] font-black text-white shadow-sm transition hover:bg-emerald-600",
					children: [accountMode === "seller" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { size: 14 }), accountMode === "seller" ? "العودة للتسوق" : "فتح لوحة التاجر"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-bold text-slate-400",
						children: "مساحة العمل الحالية"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-black text-slate-800 dark:text-white",
						children: accountMode === "seller" ? "إدارة المتجر" : "الحساب الشخصي"
					})]
				})]
			}),
			false,
			accountMode === "personal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 p-5 text-white shadow-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowQrModal(true),
							className: "grid size-9 place-items-center rounded-xl bg-white/15 backdrop-blur-md transition hover:bg-white/25",
							title: "رمز QR",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { size: 18 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "grid size-9 place-items-center rounded-xl bg-white/15 backdrop-blur-md transition hover:bg-white/25",
							title: "مشاركة البروفايل",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { size: 18 })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 justify-end",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md bg-emerald-400/30 px-1.5 py-0.5 text-[10px] font-bold text-emerald-100",
										children: "عضو منذ 2025"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-base font-black",
										children: "جود الجابر"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-emerald-100/80 dir-ltr font-mono",
									children: "@jood_aljaber"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 flex items-center gap-2 justify-end text-[10px] font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex items-center gap-0.5 text-amber-300",
										children: "★ 4.9 (28 تقييم)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1 text-emerald-200",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
											size: 12,
											className: "text-emerald-300"
										}), " موثق"]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-16 place-items-center rounded-2xl bg-white/20 font-black text-2xl text-white backdrop-blur-md border-2 border-white/30",
								children: "ج"
							})
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid grid-cols-2 gap-2 border-t border-white/15 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 rounded-2xl bg-white/10 p-2.5 backdrop-blur-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-8 place-items-center rounded-xl bg-amber-400/20 text-amber-300",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { size: 16 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] text-emerald-100",
								children: "رصيد المحفظة"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-black",
								children: "125,000 د.ع"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 rounded-2xl bg-white/10 p-2.5 backdrop-blur-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-8 place-items-center rounded-xl bg-purple-400/20 text-purple-300",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { size: 16 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] text-emerald-100",
								children: "نقاط الولاء"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-black",
								children: "450 نقطة ⭐"
							})]
						})]
					})]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-50 p-5 text-slate-900 shadow-sm dark:border-emerald-950/50 dark:bg-emerald-950/20 dark:text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-black text-emerald-400 border border-emerald-500/30",
						children: "Top Seller ★"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-base font-black",
								children: "متجر بغداد الرقمي"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-slate-500 dark:text-slate-300",
								children: "1.2K مبيعات • 98% تقييم إيجابي"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-14 place-items-center rounded-2xl bg-emerald-500 text-white font-black text-xl",
							children: "🏪"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-3 gap-2 border-t border-emerald-200 pt-3 text-center dark:border-emerald-900",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-slate-500 dark:text-slate-300",
							children: "الطلبات اليوم"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-black text-emerald-400",
							children: "18"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-slate-400",
							children: "وقت الرد"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-black text-slate-700 dark:text-slate-100",
							children: "5 دقائق"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-slate-500 dark:text-slate-300",
							children: "المنتجات النشطة"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-black text-slate-700 dark:text-slate-100",
							children: "42"
						})] })
					]
				})]
			}),
			accountMode === "personal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-slate-100 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[11px] font-bold text-emerald-600 flex items-center gap-1 cursor-pointer",
						children: ["عرض الكل ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 14 })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-xs font-black text-slate-800 dark:text-slate-100 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
							size: 15,
							className: "text-emerald-500"
						}), " متابعة الطلبات"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-2 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-slate-50 p-2.5 dark:bg-slate-800/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg",
								children: "📦"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-black text-slate-700 dark:text-slate-300 mt-1",
								children: "قيد التنفيذ (2)"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-slate-50 p-2.5 dark:bg-slate-800/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg",
								children: "🚚"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-black text-slate-700 dark:text-slate-300 mt-1",
								children: "تم الشحن (1)"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-slate-50 p-2.5 dark:bg-slate-800/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg",
								children: "✅"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-black text-slate-700 dark:text-slate-300 mt-1",
								children: "مكتملة (14)"
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-slate-100 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
							size: 16,
							className: "text-slate-400"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "المفضلة والمنتجات المحفوظة" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								size: 18,
								className: "text-rose-500"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
							size: 16,
							className: "text-slate-400"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الكوبونات وقسائم الخصم" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, {
								size: 18,
								className: "text-amber-500"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
							size: 16,
							className: "text-slate-400"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "عناوين التوصيل المخزنة" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								size: 18,
								className: "text-emerald-500"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
							size: 16,
							className: "text-slate-400"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "طرق الدفع والبطاقات" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {
								size: 18,
								className: "text-blue-500"
							})]
						})]
					})
				]
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 space-y-0 xl:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "xl:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderPipeline, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodLedger, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SellerAnalytics, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "xl:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulkOperations, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InventoryManager, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MerchantAiAssistant, { ...onAddToCart ? { onAddToCart } : {} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex flex-col items-center justify-center rounded-3xl bg-emerald-500 p-4 text-white shadow-md hover:bg-emerald-600 transition space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlus, { size: 24 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-black",
								children: "إضافة منتج جديد"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex flex-col items-center justify-center rounded-3xl border border-slate-100 bg-white p-4 text-slate-800 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
								size: 24,
								className: "text-emerald-500"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-black",
								children: "تحليلات المبيعات"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "xl:col-span-2 rounded-3xl border border-slate-100 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
								size: 16,
								className: "text-slate-400"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "إدارة مخزون المتجر" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, {
									size: 18,
									className: "text-emerald-500"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
								size: 16,
								className: "text-slate-400"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الطلبات الواردة من الزبائن" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCheck, {
									size: 18,
									className: "text-blue-500"
								})]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-slate-100 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onOpenSettings,
					className: "flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						size: 16,
						className: "text-slate-400"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تنبيهات الإشعارات" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
							size: 18,
							className: "text-purple-500"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						size: 16,
						className: "text-slate-400"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الخصوصية والجلسات النشطة" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							size: 18,
							className: "text-slate-500"
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onLogout,
				className: "flex w-full items-center justify-center gap-2 rounded-2xl border border-rose-200 bg-rose-50 py-3.5 text-xs font-black text-rose-600 transition hover:bg-rose-100 dark:border-rose-900/50 dark:bg-rose-950/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 16 }), " تسجيل الخروج من الحساب"]
			}),
			showQrModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",
				onClick: () => setShowQrModal(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-xs rounded-3xl bg-white p-6 text-center shadow-2xl dark:bg-slate-900",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-black text-slate-900 dark:text-white",
							children: "رمز QR الخاص بحسابك"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[11px] text-slate-400",
							children: "امسح الرمز للتواصل مباشرة مع @jood_aljaber"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "my-5 grid aspect-square place-items-center rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-emerald-500 p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, {
								size: 120,
								className: "text-emerald-600 dark:text-emerald-400"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowQrModal(false),
							className: "w-full rounded-2xl bg-slate-100 py-2.5 text-xs font-black text-slate-700 dark:bg-slate-800 dark:text-slate-200",
							children: "إغلاق"
						})
					]
				})
			})
		]
	});
}
function ProfileSettingsView({ initialName = "جود الجابر", initialEmail = "", onLogout, onBack }) {
	const [name, setName] = (0, import_react.useState)(initialName);
	const [email, setEmail] = (0, import_react.useState)(initialEmail);
	const [bio, setBio] = (0, import_react.useState)("مهندسة برمجيات ومطورة تطبيقات");
	const [website, setWebsite] = (0, import_react.useState)("");
	const [profileImage, setProfileImage] = (0, import_react.useState)("");
	const [activeModal, setActiveModal] = (0, import_react.useState)(null);
	const [currentPassword, setCurrentPassword] = (0, import_react.useState)("");
	const [newPassword, setNewPassword] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [notice, setNotice] = (0, import_react.useState)(null);
	const showNotice = (message) => {
		setNotice(message);
		window.setTimeout(() => setNotice(null), 2500);
	};
	const saveProfile = (event) => {
		event.preventDefault();
		showNotice("تم حفظ التعديلات الشخصية");
	};
	const updateImage = (event) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		dir: "rtl",
		className: "mx-auto max-w-xl space-y-5 pb-20 text-right",
		children: [
			notice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed left-1/2 top-5 z-[70] flex -translate-x-1/2 items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground shadow-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					size: 14,
					className: "text-primary"
				}), notice]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onBack,
					className: "flex items-center gap-1 rounded-xl p-2 text-xs font-bold text-muted-foreground hover:bg-muted hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 16 }), " العودة"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-black text-foreground",
					children: "الملف الشخصي والإعدادات"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "إدارة معلوماتك الشخصية وأمان حسابك"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: saveProfile,
				className: "space-y-4 rounded-3xl border border-border bg-card p-5 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative shrink-0",
						children: [profileImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: profileImage,
							alt: name,
							className: "size-16 rounded-full object-cover ring-2 ring-primary/30"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-16 place-items-center rounded-full bg-secondary text-2xl font-black text-primary",
							children: name.charAt(0) || "ج"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "absolute bottom-0 left-0 grid size-7 cursor-pointer place-items-center rounded-full bg-primary text-primary-foreground shadow-md",
							title: "تغيير الصورة",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "image/*",
								className: "hidden",
								onChange: updateImage
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-black text-foreground",
						children: name || "اسم المستخدم"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 inline-flex rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold text-primary",
						children: "حساب موثق"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1 block font-bold text-muted-foreground",
								children: "الاسم الكامل"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (event) => setName(event.target.value),
								className: "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1 block font-bold text-muted-foreground",
								children: "البريد الإلكتروني"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								value: email,
								onChange: (event) => setEmail(event.target.value),
								dir: "ltr",
								className: "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-right text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1 block font-bold text-muted-foreground",
								children: "النبذة الشخصية"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: bio,
								onChange: (event) => setBio(event.target.value),
								rows: 2,
								className: "w-full resize-none rounded-xl border border-input bg-background px-3.5 py-2 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "relative block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1 block font-bold text-muted-foreground",
									children: "الموقع الإلكتروني"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "absolute right-3.5 top-8 size-4 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: website,
									onChange: (event) => setWebsite(event.target.value),
									dir: "ltr",
									placeholder: "https://example.com",
									className: "w-full rounded-xl border border-input bg-background py-2.5 pl-3 pr-10 text-right text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "w-full rounded-xl bg-primary py-2.5 font-bold text-primary-foreground hover:bg-primary/90",
							children: "حفظ التغييرات"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SettingsGroup, {
				title: "الأمان والحسابات",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsButton, {
					icon: Lock,
					label: "تغيير كلمة المرور",
					onClick: () => setActiveModal("password")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsButton, {
					icon: Smartphone,
					label: "فتح حساب آخر بنفس رقم الهاتف",
					onClick: () => setActiveModal("switchAccount")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SettingsGroup, {
				title: "إدارة الجلسة والحساب",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsButton, {
					icon: LogOut,
					label: "تسجيل الخروج من المنصة",
					onClick: onLogout
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsButton, {
					icon: Trash2,
					label: "حذف الحساب نهائياً",
					danger: true,
					onClick: () => setActiveModal("deleteAccount")
				})]
			}),
			activeModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4 backdrop-blur-sm",
				onClick: () => setActiveModal(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm space-y-4 rounded-3xl border border-border bg-card p-5 shadow-2xl",
					onClick: (event) => event.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActiveModal(null),
								className: "rounded-lg p-1 text-muted-foreground hover:bg-muted",
								"aria-label": "إغلاق",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-black text-foreground",
								children: activeModal === "password" ? "تغيير كلمة المرور" : activeModal === "switchAccount" ? "إضافة حساب" : "حذف الحساب"
							})]
						}),
						activeModal === "password" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "password",
									value: currentPassword,
									onChange: (event) => setCurrentPassword(event.target.value),
									placeholder: "كلمة المرور الحالية",
									className: "w-full rounded-xl border border-input bg-background p-2.5 text-foreground outline-none"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "password",
									value: newPassword,
									onChange: (event) => setNewPassword(event.target.value),
									placeholder: "كلمة المرور الجديدة",
									className: "w-full rounded-xl border border-input bg-background p-2.5 text-foreground outline-none"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => void updatePassword(),
									className: "w-full rounded-xl bg-primary py-2.5 font-bold text-primary-foreground",
									children: "حفظ كلمة المرور"
								})
							]
						}),
						activeModal === "switchAccount" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "أدخل رقم الهاتف لإرسال رمز التحقق."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: phone,
									onChange: (event) => setPhone(event.target.value),
									placeholder: "07xxxxxxxxx",
									dir: "ltr",
									className: "w-full rounded-xl border border-input bg-background p-2.5 text-right text-foreground outline-none"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setActiveModal(null);
										showNotice("تم إرسال رمز التحقق");
									},
									className: "w-full rounded-xl bg-primary py-2.5 font-bold text-primary-foreground",
									children: "إرسال رمز التحقق"
								})
							]
						}),
						activeModal === "deleteAccount" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-destructive",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "هذا الإجراء لا يمكن التراجع عنه" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "الحذف النهائي يحتاج تأكيداً من خادم آمن لحماية حسابك. تواصل مع الدعم لإكمال الطلب."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setActiveModal(null);
										showNotice("تم تسجيل طلب حذف الحساب للدعم");
									},
									className: "w-full rounded-xl bg-destructive py-2.5 font-bold text-destructive-foreground",
									children: "تأكيد طلب الحذف"
								})
							]
						})
					]
				})
			})
		]
	});
}
function SettingsGroup({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "px-1 text-xs font-bold text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-2xl border border-border bg-card divide-y divide-border",
			children
		})]
	});
}
function SettingsButton({ icon: Icon, label, onClick, danger = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: `flex w-full items-center justify-between px-4 py-3.5 text-xs font-bold transition hover:bg-muted ${danger ? "text-destructive" : "text-foreground"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
			size: 16,
			className: "text-muted-foreground"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				size: 16,
				className: danger ? "text-destructive" : "text-primary"
			})]
		})]
	});
}
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
function AuthScreen({ onSuccess, onBackToLanding }) {
	const [mode, setMode] = (0, import_react.useState)("login");
	const [language, setLanguage] = (0, import_react.useState)("AR");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [notice, setNotice] = (0, import_react.useState)(null);
	const isArabic = language === "AR";
	const text = isArabic ? {
		title: mode === "signup" ? "إنشاء حساب جديد" : "تسجيل الدخول",
		email: "البريد الإلكتروني",
		password: "كلمة المرور",
		name: "الاسم الكامل",
		submit: mode === "signup" ? "إنشاء حساب" : "دخول",
		google: "المتابعة بواسطة Google",
		switchPrompt: mode === "signup" ? "لديك حساب بالفعل؟" : "لا تملك حساباً؟",
		switchAction: mode === "signup" ? "تسجيل الدخول" : "إنشاء حساب",
		back: "العودة للرئيسية",
		or: "أو",
		notice: "تم إنشاء الحساب. تحقق من بريدك الإلكتروني إذا كان التحقق مطلوباً."
	} : {
		title: mode === "signup" ? "Create an Account" : "Welcome Back",
		email: "Email address",
		password: "Password",
		name: "Full name",
		submit: mode === "signup" ? "Sign Up" : "Sign In",
		google: "Continue with Google",
		switchPrompt: mode === "signup" ? "Already have an account?" : "Don't have an account?",
		switchAction: mode === "signup" ? "Sign In" : "Sign Up",
		back: "Back to Landing",
		or: "OR",
		notice: "Account created. Check your email if verification is required."
	};
	const submit = async (event) => {
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
						data: { display_name: name.trim() || email.split("@")[0] }
					}
				});
				if (signUpError) throw signUpError;
				if (data.session) onSuccess?.();
				else setNotice(text.notice);
			} else {
				const { error: signInError } = await supabase.auth.signInWithPassword({
					email: email.trim(),
					password
				});
				if (signInError) throw signInError;
				onSuccess?.();
			}
		} catch (caught) {
			const message = caught instanceof Error ? caught.message : "حدث خطأ غير متوقع";
			setError(/invalid login/i.test(message) ? isArabic ? "البريد الإلكتروني أو كلمة المرور غير صحيحة" : "Invalid email or password" : /already registered|already been/i.test(message) ? isArabic ? "هذا البريد مسجّل مسبقاً، جرّب تسجيل الدخول" : "Email already registered. Try signing in" : /password/i.test(message) ? isArabic ? "كلمة المرور يجب أن تكون 6 أحرف على الأقل" : "Password must be at least 6 characters" : message);
		} finally {
			setBusy(false);
		}
	};
	const googleSignIn = async () => {
		setBusy(true);
		setError(null);
		setNotice(null);
		const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
		if (result.error) {
			setError(isArabic ? "تعذّر الدخول عبر Google، حاول مرة أخرى" : "Could not sign in with Google");
			setBusy(false);
			return;
		}
		if (result.redirected) return;
		setBusy(false);
		onSuccess?.();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		dir: isArabic ? "rtl" : "ltr",
		className: "flex min-h-screen flex-col justify-between bg-background px-6 py-6 text-foreground selection:bg-primary/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-sm items-center justify-between",
				children: [onBackToLanding ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onBackToLanding,
					className: "text-xs text-muted-foreground transition-colors hover:text-foreground",
					children: text.back
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setLanguage((current) => current === "AR" ? "EN" : "AR"),
					className: "flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground transition-all hover:border-primary hover:text-foreground",
					"aria-label": "Change language",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5" }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: language })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto my-auto w-full max-w-sm space-y-7 py-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center text-center space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary transition-transform hover:scale-105",
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
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl font-extrabold uppercase tracking-[0.25em] text-foreground",
								children: "Salix"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
								children: isArabic ? "نظام التشغيل التجاري" : "Business Operating System"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pt-3 text-sm font-bold text-foreground",
								children: text.title
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "space-y-3.5 w-full",
					children: [
						mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
								size: 18,
								className: "pointer-events-none absolute right-3.5 text-muted-foreground"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: text.name,
								className: "w-full rounded-xl border border-input bg-card py-3.5 pr-10 pl-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary",
								autoComplete: "name"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								size: 18,
								className: "pointer-events-none absolute right-3.5 text-muted-foreground"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: email,
								onChange: (e) => setEmail(e.target.value),
								type: "email",
								required: true,
								placeholder: text.email,
								className: "w-full rounded-xl border border-input bg-card py-3.5 pr-10 pl-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary",
								autoComplete: "email",
								dir: "ltr"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
									size: 18,
									className: "pointer-events-none absolute right-3.5 text-muted-foreground"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: password,
									onChange: (e) => setPassword(e.target.value),
									type: showPassword ? "text" : "password",
									required: true,
									minLength: 6,
									placeholder: text.password,
									className: "w-full rounded-xl border border-input bg-card py-3.5 pr-10 pl-11 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary",
									autoComplete: mode === "login" ? "current-password" : "new-password",
									dir: "ltr"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowPassword(!showPassword),
									className: "absolute left-3.5 text-muted-foreground transition hover:text-foreground",
									tabIndex: -1,
									children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 18 })
								})
							]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-center text-xs font-semibold text-destructive",
							children: error
						}),
						notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl border border-emerald-900/60 bg-emerald-950/40 p-3 text-center text-xs font-semibold text-emerald-300",
							children: notice
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							size: "lg",
							disabled: busy,
							className: "h-11 w-full rounded-xl bg-primary text-sm font-medium text-primary-foreground shadow-none transition-all hover:bg-primary/90 active:scale-[0.99]",
							children: [busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin ml-2" }), text.submit]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-1 flex items-center gap-3 text-xs text-muted-foreground/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border/80" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text.or }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border/80" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							size: "lg",
							disabled: busy,
							onClick: googleSignIn,
							className: "h-11 w-full rounded-xl border-input bg-card text-sm font-normal text-foreground hover:bg-accent hover:text-accent-foreground",
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
							}), text.google]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-sm pt-4 pb-2 text-center text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [text.switchPrompt, " "] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setError(null);
						setNotice(null);
						setMode(mode === "login" ? "signup" : "login");
					},
					className: "ml-1 font-medium text-primary hover:underline",
					children: text.switchAction
				})]
			})
		]
	});
}
function WelcomeScreen() {
	const [view, setView] = (0, import_react.useState)("welcome");
	const [language, setLanguage] = (0, import_react.useState)("AR");
	const isArabic = language === "AR";
	if (view === "auth") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthScreen, { onBackToLanding: () => setView("welcome") });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		dir: isArabic ? "rtl" : "ltr",
		className: "flex min-h-screen flex-col justify-between bg-background px-6 py-6 text-foreground selection:bg-primary/20 sm:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mx-auto flex w-full max-w-4xl items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl font-black tracking-[0.2em] text-foreground",
						dir: "ltr",
						children: "SALIX"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-border bg-card px-2 py-0.5 text-[10px] font-medium text-muted-foreground",
						children: "صفصاف"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setLanguage((current) => current === "AR" ? "EN" : "AR"),
					className: "flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition-all hover:border-primary hover:text-foreground",
					"aria-label": "Change language",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5" }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px]",
							children: language
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto my-auto w-full max-w-3xl py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 animate-pulse rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "بيئة التشغيل الموحدة للتجارة الاجتماعية" : "Unified Business OS for Social Commerce" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl",
								children: [
									isArabic ? "التجارة الاجتماعية" : "Social Commerce,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-normal text-muted-foreground",
										children: isArabic ? "بمعايير عالمية آمنة." : "Redefined and Secured."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base",
								children: isArabic ? "منظومة Salix تدمج المحادثات، الستوريات القابلة للشراء، حاسبة COD، ومساعد صفصاف الذكي في مكان واحد." : "Salix unifies in-app messaging, shoppable stories, cash calculators, and AI assistance into one seamless ecosystem."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3 text-right sm:grid-cols-4 sm:text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
									icon: MessageSquare,
									title: isArabic ? "محادثات مدمجة" : "In-App Chat",
									detail: isArabic ? "بدون تحويل خارجي" : "Zero external links"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
									icon: ShoppingBag,
									title: isArabic ? "ستوريات 9:16" : "Shoppable Stories",
									detail: isArabic ? "زر شراء مباشر" : "Instant 1-Tap checkout"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
									icon: Shield,
									title: isArabic ? "حاسبة COD" : "Cash Ledger",
									detail: isArabic ? "حساب المتبقي للمندوب" : "Smart change calculator"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
									icon: Sparkles,
									title: isArabic ? "مجيب صفصاف" : "Salix AI",
									detail: isArabic ? "خدمة عملاء هادئة" : "Quiet store assistant"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							onClick: () => setView("auth"),
							className: "h-12 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isArabic ? "الدخول إلى المنصة" : "Enter Platform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "text-center font-mono text-[11px] uppercase tracking-wider text-muted-foreground",
				children: "Salix SELX Inc. © 2026"
			})
		]
	});
}
function Feature({ icon: Icon, title, detail }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5 rounded-2xl border border-border bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mx-auto size-4 text-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs font-semibold text-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] text-muted-foreground",
				children: detail
			})
		]
	});
}
var AppStateContext = (0, import_react.createContext)(null);
function useAppState() {
	const state = (0, import_react.useContext)(AppStateContext);
	if (!state) throw new Error("useAppState must be used within AppStateProvider");
	return state;
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var MOCK_CONVERSATIONS = [{
	id: "c1",
	storeId: "1",
	storeName: "متجر بغداد سبورت",
	storeAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
	isOnline: true,
	unreadCount: 2,
	lastMessage: "نعم، المنتج متوفر وجاهز للشحن اليوم 👍",
	lastTime: "10:42 ص",
	relatedProductName: "حذاء نايكي اير فورس كلاسيك",
	hasActiveOrder: true,
	messages: [
		{
			id: "m1",
			sender: "user",
			type: "product",
			time: "10:30 ص",
			productDetails: {
				id: "p1",
				name: "حذاء نايكي اير فورس كلاسيك",
				price: 9e4,
				image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
			}
		},
		{
			id: "m2",
			sender: "user",
			text: "مرحباً، هل قياس 42 متوفر من هذا الحذاء؟",
			time: "10:31 ص"
		},
		{
			id: "m3",
			sender: "store",
			text: "أهلاً بك! نعم متوفر وجاهز للشحن اليوم 👍",
			time: "10:42 ص"
		},
		{
			id: "m4",
			sender: "store",
			type: "order",
			time: "10:43 ص",
			orderDetails: {
				orderId: "#IQ-88219",
				status: "قيد التجهيز للتوصيل 📦"
			}
		}
	]
}, {
	id: "c2",
	storeId: "2",
	storeName: "مركز المنصور للتكنولوجيا",
	storeAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
	isOnline: false,
	unreadCount: 0,
	lastMessage: "تم تأكيد طلب الآيفون وسيتصل بك المندوب.",
	lastTime: "أمس",
	relatedProductName: "آيفون 15 برو ماكس 256GB",
	hasActiveOrder: false,
	messages: [{
		id: "m10",
		sender: "store",
		text: "تم تأكيد طلب الآيفون وسيتصل بك المندوب.",
		time: "أمس 04:15 م"
	}]
}];
var client = () => supabase;
async function createOrder(input) {
	if (!Number.isInteger(input.quantity) || input.quantity < 1) throw new Error("كمية الطلب غير صالحة");
	if (!Number.isFinite(input.totalIqd) || input.totalIqd < 0) throw new Error("قيمة الطلب غير صالحة");
	const { data, error } = await client().from("orders").insert({
		buyer_id: input.buyerId,
		store_id: input.storeId,
		product_id: input.productId ?? null,
		quantity: input.quantity,
		total_iqd: input.totalIqd
	}).select().single();
	if (error) throw new Error(`تعذر إنشاء الطلب: ${error.message}`);
	return data;
}
var Route = createFileRoute("/")({ component: IndexPage });
function IndexPage() {
	const { can } = useAppState();
	const [session, setSession] = (0, import_react.useState)(null);
	const [authReady, setAuthReady] = (0, import_react.useState)(false);
	const [authError, setAuthError] = (0, import_react.useState)(null);
	const [activeTab, setActiveTab] = (0, import_react.useState)("home");
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [isSellerMode, setIsSellerMode] = (0, import_react.useState)(false);
	const [isMenuOpen, setIsMenuOpen] = (0, import_react.useState)(false);
	const [isCartOpen, setIsCartOpen] = (0, import_react.useState)(false);
	const [isNotificationsOpen, setIsNotificationsOpen] = (0, import_react.useState)(false);
	const [activeStory, setActiveStory] = (0, import_react.useState)(null);
	const [activeStore, setActiveStore] = (0, import_react.useState)(null);
	const [activeConversation, setActiveConversation] = (0, import_react.useState)(null);
	const [showProfileSettings, setShowProfileSettings] = (0, import_react.useState)(false);
	const [cartItems, setCartItems] = (0, import_react.useState)([]);
	const [notifications, setNotifications] = (0, import_react.useState)(MOCK_NOTIFICATIONS);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		supabase.auth.getSession().then(({ data, error }) => {
			if (!mounted) return;
			if (error) setAuthError("تعذر الاتصال بخدمة تسجيل الدخول. حاول تحديث الصفحة.");
			setSession(data.session);
			setAuthReady(true);
		}).catch(() => {
			if (!mounted) return;
			setAuthError("تعذر الاتصال بخدمة تسجيل الدخول. حاول تحديث الصفحة.");
			setAuthReady(true);
		});
		const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
			setSession(nextSession);
			setAuthReady(true);
		});
		return () => {
			mounted = false;
			listener.subscription.unsubscribe();
		};
	}, []);
	const addToCart = (product) => setCartItems((current) => {
		return current.find((item) => item.id === product.id) ? current.map((item) => item.id === product.id ? {
			...item,
			quantity: item.quantity + 1
		} : item) : [...current, {
			...product,
			quantity: 1
		}];
	});
	const updateCartQuantity = (id, delta) => setCartItems((current) => current.map((item) => item.id === id ? {
		...item,
		quantity: item.quantity + delta
	} : item).filter((item) => item.quantity > 0));
	const openStore = (store) => setActiveStore(store);
	const sendStoryMessage = (storeId, storeName, message) => {
		const conversation = MOCK_CONVERSATIONS.find((item) => item.storeId === storeId);
		if (!conversation) return;
		setActiveConversation({
			...conversation,
			storeName,
			lastMessage: message,
			lastTime: "الآن",
			messages: [...conversation.messages, {
				id: `story-${Date.now()}`,
				sender: "user",
				text: message,
				time: "الآن"
			}]
		});
		setActiveStory(null);
	};
	const openStoreChat = (storeId) => {
		const conversation = MOCK_CONVERSATIONS.find((item) => item.storeId === storeId);
		if (conversation) setActiveConversation(conversation);
	};
	const checkout = async (items) => {
		if (!session?.user.id) throw new Error("يجب تسجيل الدخول أولاً");
		const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
		const grouped = /* @__PURE__ */ new Map();
		for (const item of items) grouped.set(item.seller_id, [...grouped.get(item.seller_id) ?? [], item]);
		for (const [storeId, storeItems] of grouped) {
			if (!uuidPattern.test(storeId) || !uuidPattern.test(storeItems[0].id)) throw new Error("بيانات المتجر الحالية تجريبية؛ اربط المنتجات والمتاجر بقاعدة البيانات أولاً");
			await createOrder({
				buyerId: session.user.id,
				storeId,
				productId: storeItems[0].id,
				quantity: storeItems.reduce((sum, item) => sum + item.quantity, 0),
				totalIqd: storeItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
			});
		}
		setCartItems([]);
		setIsCartOpen(false);
	};
	const logout = () => {
		supabase.auth.signOut();
	};
	if (!authReady) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-background text-sm text-muted-foreground",
		children: "جارٍ تجهيز صفصاف..."
	});
	if (authError && !session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthConnectionError, {
		message: authError,
		onRetry: () => window.location.reload()
	});
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WelcomeScreen, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-50 pb-16 text-slate-900 dark:bg-slate-950 dark:text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				cartCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
				unreadNotificationsCount: notifications.filter((item) => !item.read).length,
				searchQuery,
				onSearchChange: setSearchQuery,
				onOpenCart: () => setIsCartOpen(true),
				onOpenNotifications: () => setIsNotificationsOpen(true),
				onOpenMenu: () => setIsMenuOpen(true)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-7xl space-y-4 px-4 py-4",
				children: [
					!isSellerMode && activeTab === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {
						products: MOCK_PRODUCTS,
						stores: MOCK_STORES,
						stories: MOCK_STORIES,
						selectedCategory,
						onSelectCategory: setSelectedCategory,
						onSelectStory: setActiveStory,
						onSelectProduct: (product) => {
							const store = MOCK_STORES.find((item) => item.name === product.seller_name) ?? MOCK_STORES[0];
							if (store) openStore(store);
						},
						onSelectStore: openStore,
						onAddToCart: addToCart
					}),
					!isSellerMode && activeTab === "stores" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-3 text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-black",
							children: "المتاجر المعتمدة"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: MOCK_STORES.map((store) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => openStore(store),
								className: "flex items-center gap-3 rounded-3xl border border-slate-100 bg-white p-4 text-right shadow-sm dark:border-slate-800 dark:bg-slate-900",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: store.avatar,
									alt: store.name,
									className: "size-14 rounded-full border-2 border-emerald-500 object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs font-black",
									children: store.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[10px] text-slate-400",
									children: store.bio
								})] })]
							}, store.id))
						})]
					}),
					activeTab === "chat" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatList, {
						conversations: MOCK_CONVERSATIONS,
						onSelectConversation: setActiveConversation
					}),
					!isSellerMode && activeTab === "profile" && (showProfileSettings ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileSettingsView, {
						initialEmail: session?.user.email ?? "",
						onBack: () => setShowProfileSettings(false),
						onLogout: logout
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileScreen, {
						accountMode: "personal",
						onEnterSellerMode: can.manageStore ? () => {
							setIsSellerMode(true);
							setActiveTab("seller-dashboard");
						} : void 0,
						onOpenSettings: () => setShowProfileSettings(true),
						onLogout: logout,
						onAddToCart: addToCart
					})),
					isSellerMode && can.manageStore && activeTab === "seller-dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileScreen, {
						accountMode: "seller",
						onExitSellerMode: () => {
							setIsSellerMode(false);
							setActiveTab("profile");
						},
						onOpenSettings: () => setShowProfileSettings(true),
						onLogout: logout,
						onAddToCart: addToCart
					}),
					isSellerMode && can.updateOrderStatus && activeTab === "seller-orders" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SellerPlaceholder, {
						title: "الطلبات الواردة",
						description: "تابع الطلبات عبر خط التجميع من الجديد حتى المكتمل.",
						icon: ClipboardList
					}),
					isSellerMode && can.manageStore && activeTab === "seller-inventory" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InventoryManager, {}),
					isSellerMode && can.manageStore && activeTab === "seller-analytics" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SellerPlaceholder, {
						title: "تحليلات المبيعات",
						description: "افتح لوحة المتجر لرؤية الذروة والمنتجات الأكثر طلباً.",
						icon: ChartColumn
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNavigation, {
				activeTab,
				unreadChatCount: MOCK_CONVERSATIONS.reduce((sum, item) => sum + item.unreadCount, 0),
				isSellerMode,
				onTabChange: setActiveTab
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileMenuDrawer, {
				isOpen: isMenuOpen,
				onClose: () => setIsMenuOpen(false),
				onNavigateTab: (tab) => {
					setActiveTab(tab);
					setIsMenuOpen(false);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {
				isOpen: isCartOpen,
				items: cartItems,
				onClose: () => setIsCartOpen(false),
				onUpdateQuantity: updateCartQuantity,
				onCheckout: checkout,
				onContinueShopping: () => {
					setIsCartOpen(false);
					setActiveTab("home");
				}
			}),
			isNotificationsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationsDrawer, {
				notifications,
				onClose: () => setIsNotificationsOpen(false),
				onMarkAllRead: () => setNotifications((current) => current.map((item) => ({
					...item,
					read: true
				})))
			}),
			activeStory && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryViewerModal, {
				story: activeStory,
				stories: MOCK_STORIES,
				products: MOCK_PRODUCTS,
				onAddToCart: addToCart,
				onSendMessage: sendStoryMessage,
				onClose: () => setActiveStory(null),
				onOpenStore: (storeId) => {
					const store = MOCK_STORES.find((item) => item.id === storeId);
					if (store) openStore(store);
				}
			}),
			activeStore && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreProfileModal, {
				store: activeStore,
				products: MOCK_PRODUCTS,
				onClose: () => setActiveStore(null),
				onOpenProduct: () => void 0,
				onAddToCart: addToCart,
				onOpenChat: openStoreChat
			}),
			activeConversation && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatRoom, {
				conversation: activeConversation,
				products: MOCK_PRODUCTS,
				onBack: () => setActiveConversation(null),
				onOpenStore: (storeId) => {
					const store = MOCK_STORES.find((item) => item.id === storeId);
					if (store) {
						setActiveConversation(null);
						openStore(store);
					}
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				position: "top-center",
				richColors: true
			})
		]
	});
}
function SellerPlaceholder({ title, description, icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "grid min-h-72 place-items-center rounded-3xl border border-emerald-100 bg-white p-8 text-center shadow-sm dark:border-emerald-950/50 dark:bg-slate-900",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid size-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 26 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-lg font-black",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs leading-6 text-slate-500 dark:text-slate-400",
					children: description
				})
			]
		})
	});
}
function AuthConnectionError({ message, onRetry }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		dir: "rtl",
		className: "grid min-h-screen place-items-center bg-background px-6 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-black text-foreground",
					children: "تعذر فتح تسجيل الدخول"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs leading-6 text-muted-foreground",
					children: message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onRetry,
					className: "mt-5 rounded-2xl bg-primary px-5 py-3 text-xs font-black text-primary-foreground",
					children: "إعادة المحاولة"
				})
			]
		})
	});
}
var rootRouteChildren = { IndexRoute: Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
