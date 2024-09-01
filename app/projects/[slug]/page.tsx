import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import MDXContent from "@/components/mdx-content";
import { getProjects, getProjectBySlug } from "@/lib/projects";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export async function generateStaticParams() {
  const projects = await getProjects()
  const slugs = projects.map(project => ({ slug: project.slug }))

  return slugs
}

export default async function Project({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = await getProjectBySlug(slug)
  if (!project) {
    notFound()
  }
  const { metadata, content } = project;
  const { title, image, author, publishedAt } = metadata;

  return (
    <section className="pb-24 pt-32">
      <div className="wrapper">
        <Link href='/projects' className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to projects</span>
        </Link>
        {image && (
          <div className="relative mb-6 h-96 w-full overflow-clip rounded-lg">
            <Image className="object-cover" src={image} fill alt={title || ''} />
          </div>
        )}
        <header>
          <h2 className="title">{title}</h2>
          <p className="mt-3 text-xs text-muted-foreground">
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>
        <main className="prose mt-16 dark:prose-invert">
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
}