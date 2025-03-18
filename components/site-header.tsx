import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import { Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container flex h-20 max-w-screen-[1200px] items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-full bg-cetus-primary/20 animate-pulse"></div>
            <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cetus-primary to-cetus-accent"></div>
          </div>
          <span className="hidden font-bold sm:inline-block text-xl text-white">FURIES</span>
        </Link>
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Settings className="h-5 w-5" />
            </Button>
            <ConnectWalletButton />
          </nav>
        </div>
      </div>
    </header>
  )
}

