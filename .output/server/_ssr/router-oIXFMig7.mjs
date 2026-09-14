import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as createFileRoute, d as useRouter, i as HeadContent, l as createRootRouteWithContext, o as createRouter, r as Scripts, s as Outlet, u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { A as History, B as ChevronDown, C as MessageSquare, D as LogOut, E as MapPin, F as CreditCard, G as Barcode, H as CheckCheck, I as CircleQuestionMark, J as ArrowRight, K as Award, L as CirclePlus, M as Globe, N as Gauge, O as Info, P as FileText, R as CircleCheck, S as PackageCheck, T as Menu, U as Bot, V as Check, W as Bell, Y as ArrowDown, _ as Search, a as TriangleAlert, b as Phone, c as Tag, d as ShoppingBag, f as ShieldCheck, g as Send, h as Settings2, i as UserRound, j as Heart, k as House, l as Store, m as Settings, n as Wallet, o as TrendingUp, p as Share2, q as ArrowUp, r as User, s as Ticket, t as X, u as Sparkles, v as QrCode, w as MessageCircle, x as Package, y as Plus, z as ChevronLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-oIXFMig7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-YLRBzxSB.css";
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
			{ title: "تاجر" },
			{
				name: "description",
				content: "تطبيق تاجر للتسوق والتواصل"
			},
			{
				name: "author",
				content: "Tajer"
			},
			{
				property: "og:title",
				content: "تاجر"
			},
			{
				property: "og:description",
				content: "سوقك بلمسة واحدة"
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
		lang: "en",
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
		className: "sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/90",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-5xl items-center justify-between px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onOpenMenu,
					className: "grid size-10 place-items-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200",
					"aria-label": "القائمة الجانبية",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-9 place-items-center rounded-xl bg-emerald-500 font-black text-white shadow-md shadow-emerald-500/20 text-lg",
						children: "S"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-base font-black tracking-tight text-slate-900 dark:text-white",
						children: ["السوق ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-emerald-500",
							children: "الذكي"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: onOpenNotifications,
						className: "relative grid size-10 place-items-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200",
						"aria-label": "الإشعارات",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { size: 19 }), unreadNotificationsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-black text-white ring-2 ring-white dark:ring-slate-900",
							children: unreadNotificationsCount
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: onOpenCart,
						className: "relative flex items-center gap-2 rounded-2xl bg-emerald-500 px-3 py-2.5 font-bold text-white shadow-md shadow-emerald-500/20 transition hover:bg-emerald-600",
						"aria-label": "سلة التسوق",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 18 }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-white px-2 py-0.5 text-[10px] font-black text-emerald-700",
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
					className: "absolute right-3.5 top-3 text-slate-400"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: searchQuery,
					onChange: (e) => onSearchChange(e.target.value),
					placeholder: "ابحث عن منتجات، متاجر، تصنيفات...",
					className: "w-full rounded-2xl border border-slate-200 bg-slate-100/70 py-2.5 pr-10 pl-4 text-xs font-medium outline-none transition focus:border-emerald-500 focus:bg-white dark:border-slate-800 dark:bg-slate-800/60 dark:text-white dark:focus:bg-slate-900"
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
						className: "size-16 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-emerald-500",
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
function CartDrawer({ isOpen, items, onClose, onUpdateQuantity }) {
	if (!isOpen) return null;
	const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
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
					className: "mt-20 text-center text-slate-400 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
						size: 40,
						className: "mx-auto text-slate-300"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold",
						children: "السلة فارغة حالياً"
					})]
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-sm font-black",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الإجمالي:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-emerald-600",
							children: [total.toLocaleString("ar-IQ"), " د.ع"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "w-full rounded-2xl bg-emerald-500 py-3 text-xs font-black text-white hover:bg-emerald-600",
						children: "إرسال الطلب عبر واتساب"
					})]
				})
			]
		})
	});
}
function StoryViewerModal({ story, onClose, onOpenStore }) {
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [liked, setLiked] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(timer);
					onClose();
					return 100;
				}
				return prev + 2;
			});
		}, 100);
		return () => clearInterval(timer);
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-full w-full max-w-md flex-col justify-between p-4 flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1 w-full overflow-hidden rounded-full bg-white/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-white transition-all duration-100 ease-linear",
							style: { width: `${progress}%` }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onOpenStore(story.storeId),
							className: "flex items-center gap-2 text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: story.storeAvatar,
								alt: story.storeName,
								className: "size-10 rounded-full border-2 border-emerald-500 object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black",
									children: story.storeName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-white/70",
									children: story.createdAt
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onClose,
							className: "grid size-9 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 grid place-items-center p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: story.mediaUrl,
						alt: "Story",
						className: "max-h-[75vh] w-full rounded-2xl object-cover"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "z-10 flex items-center gap-2 pt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: message,
							onChange: (e) => setMessage(e.target.value),
							placeholder: `رد على ${story.storeName}...`,
							className: "flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs text-white placeholder-white/60 outline-none backdrop-blur-md"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setLiked(!liked),
							className: `grid size-10 place-items-center rounded-full backdrop-blur-md ${liked ? "bg-rose-500 text-white" : "bg-white/10 text-white"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								size: 18,
								fill: liked ? "currentColor" : "none"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								if (message) {
									alert(`تم إرسال الرسالة إلى ${story.storeName}: ${message}`);
									setMessage("");
								}
							},
							className: "grid size-10 place-items-center rounded-full bg-emerald-500 text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 18 })
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
function ProductCard({ product, onOpen, onAddToCart }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-white p-3 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.seller_avatar,
						alt: product.seller_name,
						className: "size-6 rounded-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-bold text-slate-700 dark:text-slate-300 truncate max-w-[100px]",
						children: product.seller_name
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `rounded-full px-2 py-0.5 text-[9px] font-bold ${product.in_stock ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`,
					children: product.in_stock ? "متوفر" : "نفذت"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-square w-full cursor-pointer overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800",
				onClick: () => onOpen(product),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image_url,
					alt: product.name,
					className: "h-full w-full object-cover transition duration-300 group-hover:scale-105"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "line-clamp-1 text-xs font-black text-slate-800 dark:text-slate-100",
					children: product.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm font-black text-emerald-600 dark:text-emerald-400",
					children: [product.price.toLocaleString("ar-IQ"), " د.ع"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center justify-between gap-1 border-t pt-2.5 dark:border-slate-800",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => onAddToCart(product),
					className: "flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-500 py-2 text-[11px] font-bold text-white transition hover:bg-emerald-600",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 14 }), " إضافة"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `https://wa.me/?text=${encodeURIComponent(product.name)}`,
					target: "_blank",
					rel: "noreferrer",
					className: "grid size-8 place-items-center rounded-xl bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 dark:bg-slate-800 dark:text-slate-300",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 15 })
				})]
			})
		]
	});
}
function StoreProfileModal({ store, products, onClose, onOpenProduct, onAddToCart }) {
	const storeProducts = products.filter((p) => p.seller_name === store.name);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-4 sm:p-6",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-900 text-slate-900 dark:text-white",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-between items-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "rounded-full bg-slate-100 p-2 dark:bg-slate-800",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 text-center space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: store.avatar,
							alt: store.name,
							className: "mx-auto size-24 rounded-full border-4 border-emerald-500 object-cover shadow-lg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-black",
								children: store.name
							}), store.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								size: 18,
								className: "text-emerald-500 fill-emerald-500/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-500 max-w-sm mx-auto",
							children: store.bio || "متجر موثوق يقدم أفضل المنتجات المحلية بأعلى جودة."
						}),
						store.location && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center justify-center gap-1 text-[11px] text-slate-400",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 13 }),
								" ",
								store.location
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-center gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://wa.me/${store.phone}`,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 15 }), " مراسلة واتساب"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${store.phone}`,
								className: "flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold dark:border-slate-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 15 }), " اتصال مباشر"]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 border-t pt-6 dark:border-slate-800 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-sm font-black text-right",
						children: [
							"منتجات المتجر (",
							storeProducts.length,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
						children: storeProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
							product,
							onOpen: onOpenProduct,
							onAddToCart
						}, product.id))
					})]
				})
			]
		})
	});
}
function BottomNavigation({ activeTab, unreadChatCount, onTabChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/95",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-md items-center justify-around py-2 dir-rtl",
			children: [
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
			].map((tab) => {
				const Icon = tab.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => onTabChange(tab.id),
					className: `relative flex flex-col items-center gap-1 px-3 py-1 transition ${activeTab === tab.id ? "scale-105 font-bold text-emerald-500" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"}`,
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
function ChatRoom({ conversation, onBack, onOpenStore }) {
	const [messages, setMessages] = (0, import_react.useState)(conversation.messages);
	const [input, setInput] = (0, import_react.useState)("");
	const [showTools, setShowTools] = (0, import_react.useState)(false);
	const quickReplies = [
		"هل المنتج متوفر؟",
		"كم سعر النهائي مع التوصيل؟",
		"متى يصل الطلب؟"
	];
	const handleSend = (textToSend) => {
		const text = textToSend || input;
		if (!text.trim()) return;
		const newMsg = {
			id: Date.now().toString(),
			sender: "user",
			text,
			time: "الآن"
		};
		setMessages((prev) => [...prev, newMsg]);
		if (!textToSend) setInput("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex flex-col bg-slate-50 dark:bg-slate-950",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onBack,
						className: "rounded-xl p-1.5 text-slate-600 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 20 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: conversation.storeAvatar,
							alt: conversation.storeName,
							className: "size-10 rounded-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-black text-slate-900 dark:text-white",
								children: conversation.storeName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-emerald-500 font-bold",
								children: conversation.isOnline ? "● متصل الآن" : "متصل مؤخراً"
							})]
						})]
					})]
				}), onOpenStore && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => onOpenStore(conversation.storeId),
					className: "flex items-center gap-1.5 rounded-xl bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 dark:bg-slate-800 dark:text-slate-200",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { size: 14 }), " المتجر"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-y-auto p-4 space-y-3",
				children: messages.map((msg) => {
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
							msg.text && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `max-w-[80%] rounded-2xl px-4 py-2.5 text-xs font-bold shadow-sm ${isUser ? "bg-emerald-500 text-white rounded-br-none" : "bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded-bl-none"}`,
								children: [msg.text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-[9px] opacity-70 text-left",
									children: msg.time
								})]
							})
						]
					}, msg.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1.5 overflow-x-auto px-4 py-2 bg-slate-100 dark:bg-slate-900/50 no-scrollbar",
				children: quickReplies.map((qr, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => handleSend(qr),
					className: "shrink-0 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-slate-700 shadow-sm transition hover:bg-emerald-50 hover:text-emerald-600 dark:bg-slate-800 dark:text-slate-200",
					children: qr
				}, idx))
			}),
			showTools && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-2 bg-white p-3 border-t dark:bg-slate-900 dark:border-slate-800 text-center text-xs font-bold",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "rounded-xl bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
						children: "💰 إرسال عرض سعر"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "rounded-xl bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
						children: "📦 ربط بطلب"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "rounded-xl bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
						children: "📍 إرسال موقع"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-t border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setShowTools(!showTools),
						className: "grid size-10 place-items-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 20 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: input,
						onChange: (e) => setInput(e.target.value),
						onKeyDown: (e) => e.key === "Enter" && handleSend(),
						placeholder: "اكتب رسالتك للبائع...",
						className: "flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs outline-none focus:border-emerald-500 dark:border-slate-800 dark:bg-slate-800 dark:text-white"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => handleSend(),
						className: "grid size-10 place-items-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20 hover:bg-emerald-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 18 })
					})
				]
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
	createdAt: "قبل 15 دقيقة"
}, {
	id: "s2",
	storeId: "2",
	storeName: "المنصور تِك",
	storeAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
	mediaUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
	createdAt: "قبل ساعة"
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
function MerchantAiAssistant() {
	const [isEnabled, setIsEnabled] = (0, import_react.useState)(true);
	const [isAfterHoursEnabled, setIsAfterHoursEnabled] = (0, import_react.useState)(true);
	const [isSuggestionsEnabled, setIsSuggestionsEnabled] = (0, import_react.useState)(true);
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
	const availableProducts = (0, import_react.useMemo)(() => MOCK_PRODUCTS.filter((product) => product.in_stock), []);
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
		if (isHumanMode) {
			setMessages((current) => [...current, {
				id: Date.now() + 1,
				sender: "human",
				text: "تم تحويل المحادثة لك. يمكنك متابعة الرد كموظف المتجر."
			}]);
			return;
		}
		const product = availableProducts.find((product) => {
			const firstWord = product.name.toLowerCase().split(" ")[0] ?? "";
			return firstWord.length > 0 && text.toLowerCase().includes(firstWord);
		}) ?? availableProducts[0];
		const response = product && permissions.inventory ? `أكيد، ${product.name} متوفر حاليًا بسعر ${product.price.toLocaleString("ar-IQ")} د.ع. أقدر أعرضه لك أو أضيفه للسلة بعد تأكيدك.` : permissions.faq ? "هلا بيك، أقدر أساعدك بالمنتجات والأسعار والتوصيل. اختر أحد الاقتراحات أو حوّل المحادثة لموظف المتجر." : "سأحوّل سؤالك لموظف المتجر حتى تحصل على إجابة دقيقة.";
		const aiMessage = {
			id: Date.now() + 1,
			sender: "ai",
			text: response
		};
		if (product) aiMessage.productId = product.id;
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2 rounded-full ${isEnabled ? "bg-emerald-500" : "bg-slate-400"}` }), isEnabled ? "يعمل الآن" : "متوقف مؤقتًا"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-10 place-items-center rounded-2xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { size: 21 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-black",
						children: "مساعد المتجر الذكي"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-slate-400",
						children: "AI Store Assistant"
					})] })]
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
							enabled: isEnabled,
							onChange: () => setIsEnabled((current) => !current)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
							label: "الرد خارج أوقات العمل",
							enabled: isAfterHoursEnabled,
							onChange: () => setIsAfterHoursEnabled((current) => !current)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
							label: "اقتراح المنتجات",
							enabled: isSuggestionsEnabled,
							onChange: () => setIsSuggestionsEnabled((current) => !current)
						}),
						isSettingsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 border-t border-slate-200 pt-3 dark:border-slate-700",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-black text-slate-400",
								children: "شخصية المساعد"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
							})]
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: message.text }), message.productId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center gap-2 rounded-xl bg-white/15 p-2 text-[10px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { size: 13 }), " تحقق من المنتج والمخزون قبل الإضافة"]
								})]
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
function ProfileScreen() {
	const [accountMode, setAccountMode] = (0, import_react.useState)("personal");
	const [showQrModal, setShowQrModal] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 pb-20 text-right",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex rounded-2xl bg-slate-200/70 p-1 dark:bg-slate-800/80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setAccountMode("personal"),
					className: `flex-1 rounded-xl py-2 text-xs font-black transition ${accountMode === "personal" ? "bg-white text-emerald-600 shadow-md dark:bg-slate-900 dark:text-emerald-400" : "text-slate-600 dark:text-slate-400"}`,
					children: "👤 حساب شخصي (مشتري)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setAccountMode("seller"),
					className: `flex-1 rounded-xl py-2 text-xs font-black transition ${accountMode === "seller" ? "bg-white text-emerald-600 shadow-md dark:bg-slate-900 dark:text-emerald-400" : "text-slate-600 dark:text-slate-400"}`,
					children: "🏪 متجري (بائع)"
				})]
			}),
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
				className: "relative overflow-hidden rounded-3xl bg-slate-900 p-5 text-white shadow-xl",
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
								className: "text-[11px] text-slate-400",
								children: "1.2K مبيعات • 98% تقييم إيجابي"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-14 place-items-center rounded-2xl bg-emerald-500 text-white font-black text-xl",
							children: "🏪"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-3 gap-2 border-t border-slate-800 pt-3 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-slate-400",
							children: "الطلبات اليوم"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-black text-emerald-400",
							children: "18"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-slate-400",
							children: "وقت الرد"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-black text-slate-200",
							children: "5 دقائق"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-slate-400",
							children: "المنتجات النشطة"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-black text-slate-200",
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
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InventoryManager, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MerchantAiAssistant, {}),
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
						className: "rounded-3xl border border-slate-100 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-1",
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
var Route = createFileRoute("/")({ component: IndexPage });
function IndexPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("home");
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [isMenuOpen, setIsMenuOpen] = (0, import_react.useState)(false);
	const [isCartOpen, setIsCartOpen] = (0, import_react.useState)(false);
	const [isNotificationsOpen, setIsNotificationsOpen] = (0, import_react.useState)(false);
	const [activeStory, setActiveStory] = (0, import_react.useState)(null);
	const [activeStore, setActiveStore] = (0, import_react.useState)(null);
	const [activeConversation, setActiveConversation] = (0, import_react.useState)(null);
	const [cartItems, setCartItems] = (0, import_react.useState)([]);
	const [notifications, setNotifications] = (0, import_react.useState)(MOCK_NOTIFICATIONS);
	const handleAddToCart = (product) => {
		setCartItems((prev) => {
			if (prev.find((item) => item.id === product.id)) return prev.map((item) => item.id === product.id ? {
				...item,
				quantity: item.quantity + 1
			} : item);
			return [...prev, {
				...product,
				quantity: 1
			}];
		});
	};
	const handleUpdateQuantity = (id, delta) => {
		setCartItems((prev) => prev.map((item) => {
			if (item.id === id) {
				const newQty = item.quantity + delta;
				return newQty > 0 ? {
					...item,
					quantity: newQty
				} : null;
			}
			return item;
		}).filter(Boolean));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				cartCount: cartItems.reduce((acc, item) => acc + item.quantity, 0),
				unreadNotificationsCount: notifications.filter((n) => !n.read).length,
				searchQuery,
				onSearchChange: setSearchQuery,
				onOpenCart: () => setIsCartOpen(true),
				onOpenNotifications: () => setIsNotificationsOpen(true),
				onOpenMenu: () => setIsMenuOpen(true)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-5xl px-4 py-4 space-y-4",
				children: [
					activeTab === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {
						products: MOCK_PRODUCTS,
						stores: MOCK_STORES,
						stories: MOCK_STORIES,
						selectedCategory,
						onSelectCategory: setSelectedCategory,
						onSelectStory: setActiveStory,
						onSelectProduct: (p) => {
							const store = MOCK_STORES.find((s) => s.name === p.seller_name);
							if (store) setActiveStore(store);
						},
						onSelectStore: setActiveStore,
						onAddToCart: handleAddToCart
					}),
					activeTab === "stores" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-3 text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-black",
							children: "المتاجر المعتمدة"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
							children: MOCK_STORES.map((store) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveStore(store),
								className: "flex items-center justify-between rounded-3xl border border-slate-100 bg-white p-4 text-right shadow-sm dark:border-slate-800 dark:bg-slate-900",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: store.avatar,
										alt: store.name,
										className: "size-14 rounded-full object-cover border-2 border-emerald-500"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xs font-black",
										children: store.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-slate-400 mt-1",
										children: store.bio
									})] })]
								})
							}, store.id))
						})]
					}),
					activeTab === "chat" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatList, {
						conversations: MOCK_CONVERSATIONS,
						onSelectConversation: setActiveConversation
					}),
					activeTab === "profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileScreen, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNavigation, {
				activeTab,
				unreadChatCount: MOCK_CONVERSATIONS.reduce((acc, c) => acc + c.unreadCount, 0),
				onTabChange: setActiveTab
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileMenuDrawer, {
				isOpen: isMenuOpen,
				onClose: () => setIsMenuOpen(false),
				onNavigateTab: (tab) => {
					setActiveTab(tab);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {
				isOpen: isCartOpen,
				items: cartItems,
				onClose: () => setIsCartOpen(false),
				onUpdateQuantity: handleUpdateQuantity
			}),
			isNotificationsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationsDrawer, {
				notifications,
				onClose: () => setIsNotificationsOpen(false),
				onMarkAllRead: () => setNotifications((prev) => prev.map((n) => ({
					...n,
					read: true
				})))
			}),
			activeStory && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryViewerModal, {
				story: activeStory,
				onClose: () => setActiveStory(null),
				onOpenStore: (storeId) => {
					const store = MOCK_STORES.find((s) => s.id === storeId);
					if (store) setActiveStore(store);
				}
			}),
			activeStore && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreProfileModal, {
				store: activeStore,
				products: MOCK_PRODUCTS,
				onClose: () => setActiveStore(null),
				onOpenProduct: () => {},
				onAddToCart: handleAddToCart
			}),
			activeConversation && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatRoom, {
				conversation: activeConversation,
				onBack: () => setActiveConversation(null),
				onOpenStore: (storeId) => {
					const store = MOCK_STORES.find((s) => s.id === storeId);
					if (store) setActiveStore(store);
				}
			})
		]
	});
}
var rootRouteChildren = { IndexRoute: Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
