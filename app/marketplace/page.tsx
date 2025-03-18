"use client"

import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

const MarketplaceContent = dynamic(
  () => import("@/components/marketplace-content").then((mod) => ({ default: mod.MarketplaceContent })),
  {
    loading: () => (
      <div className="container py-8">
        <Skeleton className="h-12 w-64 mb-4" />
        <Skeleton className="h-6 w-full max-w-2xl mb-8" />
        <div className="grid gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-64 w-full" />
          ))}
        </div>
      </div>
    ),
  },
)

export default function MarketplacePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="container py-8">
              <Skeleton className="h-12 w-64 mb-4" />
              <Skeleton className="h-6 w-full max-w-2xl mb-8" />
              <div className="grid gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-64 w-full" />
                ))}
              </div>
            </div>
          }
        >
          <MarketplaceContent />
        </Suspense>
      </main>
    </div>
  )
}

