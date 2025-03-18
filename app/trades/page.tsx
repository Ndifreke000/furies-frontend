"use client"

import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

const TradesList = dynamic(() => import("@/components/trades-list").then((mod) => ({ default: mod.TradesList })), {
  loading: () => (
    <div className="container py-8">
      <Skeleton className="h-12 w-64 mb-4" />
      <Skeleton className="h-6 w-full max-w-2xl mb-8" />
      <Skeleton className="h-12 w-full mb-6" />
      <div className="grid gap-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>
    </div>
  ),
})

export default function TradesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="container py-8">
              <Skeleton className="h-12 w-64 mb-4" />
              <Skeleton className="h-6 w-full max-w-2xl mb-8" />
              <Skeleton className="h-12 w-full mb-6" />
              <div className="grid gap-4">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-32 w-full" />
                ))}
              </div>
            </div>
          }
        >
          <TradesList />
        </Suspense>
      </main>
    </div>
  )
}

