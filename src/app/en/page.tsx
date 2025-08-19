import { CardStack } from "@/components/CardStack";
import Image from "next/image";
import Link from "next/link";

function OldNavyBadge() {
  return (
    <span className="inline-flex items-baseline gap-1.5 ml-1">
      <span className="flex items-center justify-center size-4 translate-y-0.5">
        <span className="inline-block shrink-0 bg-[#093D6B] relative size-[18px] rounded">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4/5 scale-y-50 bg-white rounded-full" />
        </span>
      </span>
      <span className="font-medium text-zinc-700">Old Navy</span>
    </span>
  );
}

export default function Home() {
  return (
    <div>
      <div className="absolute top-6 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-violet-400/20 blur-[100px] md:h-[40vw] h-96 md:w-[80vw] w-96 rounded-full -z-10" />

      <main className="max-w-xl mx-auto md:space-y-12 space-y-8 md:pt-40 pt-24 md:pb-32 pb-20 px-4">
        <section>
          <div className="">
            <Image
              src="/images/profile.jpg"
              alt="Dania"
              width={3130}
              height={2075}
              className="md:size-32 size-20 border-4 md:-m-1 border-zinc-200 shadow-xl shadow-violet-700/10 rounded-full object-cover"
            />
          </div>

          <div className="text-violet-950 space-y-4">
            <h1 className="md:text-7xl text-5xl md:mt-12 mt-8 font-heading leading-tight tracking-tighter font-bold mx-auto">
              Hi, I&apos;m Dania <span className="ml-4 ">👋</span>
            </h1>

            <p className="md:text-lg text-base text-heading md:mt-6 mt-4 font-medium text-pretty leading-snug text-violet-950/70">
              Management pro turned data detective, passionate about turning
              messy datasets into actionable insights.
            </p>
          </div>
        </section>

        <section className="space-y-4 text-zinc-600 md:pt-12 pt-8 border-t border-zinc-200">
          <h2 className="opacity-60">Experience</h2>
          <p className="text-pretty">
            During my 10+ years at <OldNavyBadge />, I led teams accross 3
            flagship stores for 5+ years, leading various initiatives to drive
            sales growth and optimize store operations. During this I learned
            the importance of digging through store performance data to find key
            insights to make data-driven decisions.
          </p>

          <p className="text-pretty">
            I&apos;ve decided to pivot to data analytics to continue my journey
            in data-driven decision-making. Currently following online courses
            and building{" "}
            <Link
              href="https://github.com/daniakl"
              target="_blank"
              className="font-medium whitespace-nowrap text-zinc-700 hover:text-zinc-900 underline decoration-dotted underline-offset-3"
            >
              side projects
            </Link>{" "}
            to improve my skills.
          </p>
        </section>

        <section className="space-y-4 text-zinc-600 md:pt-12 pt-8 border-t border-zinc-200">
          <h2 className="opacity-60">Info</h2>
          <p className="text-pretty ">
            I&apos;m currently based in Montreal, Canada. Fluent in French and
            English. I use tools like{" "}
            <span className="font-medium text-zinc-700">
              Excel, SQL, Python, Notion,
            </span>{" "}
            and <span className="font-medium text-zinc-700">ChatGPT</span> to
            analyze data and build reports.
          </p>
        </section>

        <section className="space-y-4 text-zinc-600 md:pt-12 pt-8 border-t border-zinc-200">
          <CardStack lang="en" />
        </section>

        <footer className="w-full flex justify-center pt-8 md:pt-12">
          <Link
            href="/"
            className="hover:underline text-xs text-zinc-600  underline-offset-3"
          >
            Lire en français
          </Link>
        </footer>
      </main>
    </div>
  );
}
