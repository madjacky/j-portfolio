import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function NotFound() {
  return (
    <section className="pb-24 pt-40">
      <div className="min-h-full px-4 sm:px-6 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="font-bold text-4xl tracking-tight text-muted-foreground sm:text-5xl">404</p>
            <div className="sm:ml-6">
              <div className="sm:border-1 sm:border-gray-200 sm:pl-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Page not Found</h2>
                <p className="mt-1 text-muted-foreground">Please check the URL in the address bar and try again.</p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-1 sm:border-transparent sm:pl-6">
                <Link href='/' className="inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
                  <ArrowLeftIcon className="h-5 w-5" />
                  <span>Go back to Home</span>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}