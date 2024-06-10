import { Disc3Icon, HomeIcon } from 'lucide-react'
import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="flex items-center gap-2">
      <Link href="/">
        <Disc3Icon className="nav-link flex h-20 w-20 items-center" />
      </Link>
      <Link href="/about" className="nav-link">
        About
      </Link>
    </nav>
  )
}
