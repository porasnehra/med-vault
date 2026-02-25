"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, ClipboardList, MapPin, Users, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/", icon: Activity },
    { name: "Records", href: "/records", icon: ClipboardList },
    { name: "Camps", href: "/camps", icon: MapPin },
    { name: "D2D", href: "/d2d", icon: Users },
    { name: "Profile", href: "/profile", icon: User },
];

export function BottomNav() {
    const pathname = usePathname();

    // Hide nav on certain screens like login
    if (pathname === '/login' || pathname === '/register') return null;

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-safe">
            <div className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center w-full h-full text-[10px] font-medium transition-all duration-200",
                                isActive ? "text-blue-600 scale-105" : "text-slate-500 hover:text-blue-500"
                            )}
                        >
                            <div className={cn(
                                "p-1 rounded-full mb-0.5 transition-colors",
                                isActive && "bg-blue-50"
                            )}>
                                <item.icon className={cn("w-5 h-5", isActive && "stroke-[2.5px]")} />
                            </div>
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
