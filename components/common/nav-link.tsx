'use client';
import Link from "next/link"
import { usePathname } from "next/navigation";
interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
    return (
        <Link href={href} className={`text-gray-700 hover:text-rose-500 ${className} ${isActive ? "text-rose-500" : ""}`}>
            {children}
        </Link>
    )
}