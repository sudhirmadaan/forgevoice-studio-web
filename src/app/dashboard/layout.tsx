"use client"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { name: "Overview", href: "/dashboard" },
  { name: "The FVS System", href: "/dashboard/system" },
  { name: "Submissions", href: "/dashboard/submissions" },
  { name: "Calendar", href: "/dashboard/calendar" },
  { name: "Deliverables", href: "/dashboard/deliverables" },
  { name: "Assets", href: "/dashboard/assets" },
  { name: "Blog", href: "/dashboard/blog" },
  { name: "Strategy Lab", href: "/dashboard/strategy-lab" },
  { name: "Analytics", href: "/dashboard/analytics" },
  { name: "ROI Center", href: "/dashboard/roi-center" },
  { name: "Billing", href: "/dashboard/billing" },
  { name: "Help", href: "/dashboard/help" },
  { name: "Settings", href: "/dashboard/settings" },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 flex flex-col bg-zinc-900 border-r border-zinc-800">
        <div className="px-6 py-4 text-xl font-bold tracking-wide">
          🚀 FORGEVOICE
        </div>
        <nav className="flex-1 space-y-1 px-3">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block rounded-md px-3 py-2 text-sm ${
                  active
                    ? "bg-yellow-500 text-black font-semibold"
                    : "text-gray-300 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
        <button
          onClick={() => signOut()}
          className="m-3 rounded-md px-3 py-2 text-sm text-red-400 hover:bg-zinc-800 hover:text-red-300"
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-6 py-3">
          <input
            type="text"
            placeholder="Search episodes, tasks, assets…"
            className="w-1/2 rounded-md bg-zinc-800 px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <div className="flex items-center gap-4">
            <button className="rounded-md bg-yellow-500 px-3 py-1 text-sm font-semibold text-black hover:bg-yellow-400">
              Submit Content
            </button>
            <span className="rounded-full bg-yellow-500 px-3 py-1 text-sm font-bold text-black">
              AC
            </span>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
