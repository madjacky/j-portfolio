import { formatDate } from "@/lib/utils";
import { ProjectMetadata } from "@/lib/projects";

import Image from "next/image"
import Link from "next/link"

export default function Projects({ projects }: { projects: ProjectMetadata[] }) {
  return (
    <ul className="list-reset grid grid-col-1 gap-8 sm:grid-cols-2">
      {projects.map(project => (
        <li className="relative group" key={project.slug}>
          <Link href={`/projects/${project.slug}`}>
            {project.image && (
              <div className="h-72 w-full overflow-clip bg-muted sm:h-60">
                <Image className="object-cover object-center rounded-lg transition-transform duration-500 group-hover:scale-105" src={project.image} fill alt={project.title || ''} />
              </div>
            )}
            <div className='absolute inset-[1px] rounded-lg bg-slate-300/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
            <div className="absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <h2 className="title line-clamp-1 text-xl no-underline">{project.title}</h2>
              <p className="line-clamp-1 text-sm text-muted-foreground">{project.summary}</p>
              <p className="text-xs font-light text-muted-foreground">{formatDate(project.publishedAt ?? '')}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}