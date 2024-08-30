import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <div className="wrapper">
        <nav className="flex justify-between items-center gap-4">
          <Link href='/' className="font-serif text-2xl font-bold">J&N</Link>
          <ul className="list-reset flex items-center gap-6 sm:gap-10 text-sm font-light text-muted-foreground">
            <li className="transition-colors hover:text-foreground">
              <Link href='/posts'>Posts</Link>
            </li>
            <li className="transition-colors hover:text-foreground">
              <Link href='/projects'>Projects</Link>
            </li>
            <li className="transition-colors hover:text-foreground">
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}