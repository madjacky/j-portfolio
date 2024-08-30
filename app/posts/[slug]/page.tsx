import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import MDXContent from '@/components/mdx-content'

export default async function Post({ params }: { params: { slug: string } }) {

  const {slug} = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound()
  }

  const { metadata, content } = post;
  const { title, image, author, publishedAt } = metadata;

  return (
    <section className="pb-24 pt-32">
      <div className="wrapper">
        <Link href='/posts' className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to posts</span>
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
        <main className="mt-6 prose dark:prose-invert">
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
}