"use client"

import { useSession } from "next-auth/react"

const pipelineData = [
  { title: "Intake", items: ["EP 025 — Future of AI"] },
  { title: "Editing", items: ["EP 024 — Dr. Mehta on Longevity"] },
  { title: "Design", items: ["Shorts Set — EP 023"] },
  { title: "Distribution", items: [] },
  { title: "Review", items: [] },
  { title: "Scheduled", items: ["Blog — EP 022 Highlights"] },
  { title: "Published", items: ["Podcast - EP 022 Launch"] },
]

export default function DashboardPage() {
  const { data: session } = useSession()
  const userName = session?.user?.name || "Guest User"

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="rounded-lg bg-zinc-900 p-6 shadow-lg">
        <h2 className="text-xl font-bold">
          Welcome back, <span className="text-yellow-400">{userName}</span>
        </h2>
        <p className="text-gray-400">
          BUILT FOR LEVERAGE. Your content pipeline at a glance.
        </p>
        <div className="mt-4 flex items-center gap-6">
          <div className="relative h-16 w-16 rounded-full bg-gray-800 flex items-center justify-center">
            <span className="text-xl font-bold text-yellow-400">65%</span>
          </div>
          <div>
            <p className="text-sm text-gray-400">This month:</p>
            <p className="font-semibold">1 Podcast, 10 Shorts, 1 Blog</p>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "New Submissions", value: 3, delta: "+1 last 7 days", color: "text-green-400" },
          { label: "In Production", value: 9, delta: "-2", color: "text-red-400" },
          { label: "Ready for Review", value: 2, delta: "+2", color: "text-green-400" },
          { label: "Published (30d)", value: 14, delta: "+5", color: "text-green-400" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg bg-zinc-900 p-4">
            <p className="text-sm text-gray-400">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className={`${stat.color} text-xs`}>{stat.delta}</p>
          </div>
        ))}
      </div>

      {/* Production Pipeline */}
      <div>
        <h3 className="mb-3 text-lg font-bold">Production Pipeline</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {pipelineData.map((col) => (
            <div key={col.title} className="rounded-lg bg-zinc-900 p-4">
              <h4 className="mb-2 font-semibold">{col.title}</h4>
              {col.items.length > 0 ? (
                col.items.map((item) => (
                  <div
                    key={item}
                    className="mb-2 rounded-md bg-zinc-800 px-3 py-2 text-sm text-gray-200"
                  >
                    {item}
                  </div>
                ))
              ) : (
                <p className="text-xs text-gray-500">No items</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
