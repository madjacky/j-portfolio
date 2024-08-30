import Image from "next/image";
import authorImage from '@/public/images/authors/jack.jpg';

export default function Hero() {
  return (
    <section className="py-24">
      <div className="wrapper flex items-center gap-x-10 gap-y-4">
        <div className="mt-2 flex-1 md:mt-0">
          <h1 className="title no-underline">Hey, I&#39;m Jack Iakovenko</h1>
          <p className="description mt-3 font-light text-muted-foreground">
            I&#39;m Software Engineer based in Batumi, Georgia.
            I&#39;m passionate about learning new Technologies and sharing knowledge with others
          </p>
        </div>
        <div className="relative">
          <Image 
            priority
            className="flex-1 rounded-lg grayscale"
            width={500}
            height={500}
            src={authorImage}
            alt="Photo of Jack Iakovenko"
          />
        </div>
      </div>
    </section>
  )
}