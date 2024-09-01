import Hero from "@/components/hero";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";

export default function Home() {
  return (
    <section className="py-24">
      <div className="wrapper">
        <Hero />
        <RecentPosts />
        <RecentProjects />
      </div>
    </section>
  );
}