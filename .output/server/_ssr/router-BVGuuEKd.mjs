import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as createFileRoute, d as useRouter, i as HeadContent, l as createRootRouteWithContext, o as createRouter, r as Scripts, s as Outlet, u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { C as CircleQuestionMark, E as Bell, S as Compass, T as Car, _ as Info, a as Store, b as Grid3x3, c as ShoppingBag, d as Send, f as Phone, g as MapPin, h as Menu, i as Tag, l as Shirt, m as MessageCircle, n as Watch, o as Sparkles, p as PhoneCall, r as Utensils, s as Smartphone, t as X, u as Settings, v as House, w as CircleCheck, x as Gamepad2, y as Heart } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BVGuuEKd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-dBNich0t.css";
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
function Header({ cartCount, unreadNotificationsCount, onOpenCart, onOpenNotifications, onOpenMenu }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-5xl items-center justify-between px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [onOpenMenu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onOpenMenu,
					className: "grid size-10 place-items-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200",
					"aria-label": "القائمة الجانبية",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-10 place-items-center rounded-2xl bg-emerald-500 font-black text-white shadow-lg shadow-emerald-500/20",
						children: "س"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-base font-black tracking-tight text-slate-900 dark:text-white",
							children: "السوق المحترفة"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-medium text-slate-400",
							children: "منصة المتاجر المحلية"
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: onOpenNotifications,
					className: "relative grid size-10 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-200",
					"aria-label": "التنبيهات",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { size: 19 }), unreadNotificationsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white ring-2 ring-white dark:ring-slate-900 animate-pulse",
						children: unreadNotificationsCount > 9 ? "+9" : unreadNotificationsCount
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: onOpenCart,
					className: "relative grid size-10 place-items-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600",
					"aria-label": "سلة المشتريات",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 19 }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white ring-2 ring-white dark:bg-white dark:text-slate-900 dark:ring-slate-900",
						children: cartCount
					})]
				})]
			})]
		})
	});
}
function MobileMenuDrawer({ isOpen, onClose, onNavigate }) {
	if (!isOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white p-5 shadow-2xl transition-transform dark:bg-slate-900 text-slate-900 dark:text-white",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b pb-4 dark:border-slate-800",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-9 place-items-center rounded-xl bg-emerald-500 font-black text-white shadow-md shadow-emerald-500/20",
							children: "س"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-black text-sm",
							children: "القائمة الرئيسية"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-slate-400",
							children: "تصفح أقسام المنصة"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-1",
					children: [
						{
							id: "home",
							label: "الرئيسية",
							icon: House
						},
						{
							id: "explore",
							label: "استكشف العروض",
							icon: Compass
						},
						{
							id: "stores",
							label: "المتاجر المعتمدة",
							icon: Store
						},
						{
							id: "orders",
							label: "طلباتي ومشترياتي",
							icon: ShoppingBag
						},
						{
							id: "favorites",
							label: "المفضلة",
							icon: Heart
						},
						{
							id: "featured",
							label: "عروض الموسم",
							icon: Sparkles
						}
					].map((item) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								if (onNavigate) onNavigate(item.id);
								onClose();
							},
							className: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-right text-xs font-bold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600 dark:text-slate-200 dark:hover:bg-slate-800",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 18,
								className: "text-emerald-500"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "my-6 border-slate-100 dark:border-slate-800" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onClose,
							className: "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-right text-xs font-bold text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الإعدادات" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onClose,
							className: "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-right text-xs font-bold text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "مركز المساعدة والشكاوى" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/",
							target: "_blank",
							rel: "noreferrer",
							className: "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-right text-xs font-bold text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تواصل مع الإدارة" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-5 left-5 right-5 text-center text-[10px] text-slate-400 border-t pt-3 dark:border-slate-800",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-bold",
						children: "السوق المحترفة v1.0.0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5",
						children: "جميع الحقوق محفوظة © 2026"
					})]
				})
			]
		})
	});
}
var CATEGORIES = [
	{
		id: "all",
		name: "الكل",
		icon: Grid3x3
	},
	{
		id: "electronics",
		name: "إلكترونيات وهواتف",
		icon: Smartphone,
		badge: "شائع"
	},
	{
		id: "fashion",
		name: "أزياء وموضة",
		icon: Shirt
	},
	{
		id: "beauty",
		name: "عناية وتجميل",
		icon: Sparkles
	},
	{
		id: "watches",
		name: "ساعات واكسسوارات",
		icon: Watch
	},
	{
		id: "home",
		name: "أثاث ومستلزمات منزل",
		icon: House
	},
	{
		id: "supermarket",
		name: "سوبرماركت ومواد غذائية",
		icon: ShoppingBag
	},
	{
		id: "gaming",
		name: "ألعاب وقيمنق",
		icon: Gamepad2,
		badge: "عروض"
	},
	{
		id: "automotive",
		name: "سيارات وقطع غيار",
		icon: Car
	},
	{
		id: "food",
		name: "مطاعم وحلويات",
		icon: Utensils
	}
];
function CategoryBar({ selectedCategory, onSelectCategory }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full overflow-x-auto py-2.5 no-scrollbar scroll-smooth border-b border-slate-100 dark:border-slate-800",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-w-max items-center gap-2 px-4",
			children: CATEGORIES.map((cat) => {
				const Icon = cat.icon;
				const isSelected = selectedCategory === cat.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => onSelectCategory(cat.id),
					className: `relative flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition-all duration-200 active:scale-95 ${isSelected ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20 scale-105" : "bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							size: 16,
							className: isSelected ? "text-white" : "text-emerald-500"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cat.name }),
						cat.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `mr-1 rounded-full px-1.5 py-0.5 text-[9px] font-black leading-none ${isSelected ? "bg-white text-emerald-600" : "bg-rose-500 text-white"}`,
							children: cat.badge
						})
					]
				}, cat.id);
			})
		})
	});
}
function PromotionBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-800 p-6 text-white shadow-xl my-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 max-w-xs text-right",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold backdrop-blur-md",
					children: "عروض الموسم"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-xl font-black",
					children: "تنزيلات تصل إلى 50%"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-emerald-100",
					children: "احصل على أفضل المنتجات بأفضل الأسعار المتاحة"
				})
			]
		})
	});
}
function StoryBar({ stories, onSelectStory }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-3 overflow-x-auto py-3 no-scrollbar",
		children: stories.map((story) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => onSelectStory(story),
			className: "flex flex-col items-center gap-1 shrink-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-0.5 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: story.storeAvatar,
					alt: story.storeName,
					className: "size-14 rounded-full border-2 border-white object-cover dark:border-slate-900"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] font-bold text-slate-600 dark:text-slate-300 max-w-[60px] truncate",
				children: story.storeName
			})]
		}, story.id))
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
var Route = createFileRoute("/")({ component: IndexPage });
function IndexPage() {
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("all");
	const [isMenuOpen, setIsMenuOpen] = (0, import_react.useState)(false);
	const [isCartOpen, setIsCartOpen] = (0, import_react.useState)(false);
	const [isNotificationsOpen, setIsNotificationsOpen] = (0, import_react.useState)(false);
	const [activeStory, setActiveStory] = (0, import_react.useState)(null);
	const [activeStore, setActiveStore] = (0, import_react.useState)(null);
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
	const filteredProducts = selectedCategory === "all" ? MOCK_PRODUCTS : MOCK_PRODUCTS.filter((p) => p.category === selectedCategory);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				cartCount: cartItems.reduce((acc, item) => acc + item.quantity, 0),
				unreadNotificationsCount: notifications.filter((n) => !n.read).length,
				onOpenCart: () => setIsCartOpen(true),
				onOpenNotifications: () => setIsNotificationsOpen(true),
				onOpenMenu: () => setIsMenuOpen(true)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-5xl px-4 py-4 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryBar, {
						stories: MOCK_STORIES,
						onSelectStory: setActiveStory
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryBar, {
						selectedCategory,
						onSelectCategory: setSelectedCategory
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromotionBanner, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-black text-right",
							children: "أحدث المنتجات"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4",
							children: filteredProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
								product,
								onOpen: () => {
									const store = MOCK_STORES.find((s) => s.name === product.seller_name);
									if (store) setActiveStore(store);
								},
								onAddToCart: handleAddToCart
							}, product.id))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileMenuDrawer, {
				isOpen: isMenuOpen,
				onClose: () => setIsMenuOpen(false)
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
