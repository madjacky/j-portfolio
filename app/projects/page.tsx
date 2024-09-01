import Projects from "@/components/projects";
import { getProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className="pb-24 pt-40">
      <div className="wrapper">
        <h2 className="title mb-12">Projects</h2>
        <Projects projects={projects} />
      </div>
    </section>
  )
}