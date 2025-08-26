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
              Salut! <br /> Ici Dania <span className="ml-4 ">👋</span>
            </h1>

            <p className="md:text-lg text-base text-heading md:mt-6 mt-4 font-medium text-pretty leading-snug text-violet-950/70">
              Ex-manager devenue détective des données, passionnée par la
              transformation de jeux de données complexes en informations
              exploitables.
            </p>
          </div>
        </section>

        <section className="space-y-4 text-zinc-600 md:pt-12 pt-8 border-t border-zinc-200">
          <h2 className="opacity-60">Experience</h2>
          <p className="text-pretty">
            Au cours de mes 10+ années chez <OldNavyBadge />, j'ai dirigé des
            équipes dans 2 magasins phares pendant plus de 5 ans. J'ai mené
            diverses initiatives pour stimuler la croissance des ventes et
            optimiser les opérations en magasin afin de maximiser l'expérience
            client. Cette portion de ma carrière m'a appris l'importance
            d'analyser les données de performance pour identifier les leviers
            clés et prendre des décisions éclairées.
          </p>

          <p className="text-pretty">
            Au fil du temps, j'ai développé un intérêt pour l'analyse de
            données. Dans ma carrière, cela m'a permis de mieux établir des
            corrélations qui permettent de prendre les bonnes décisions afin
            d'améliorer les processus de travail. Je suis actuellement des
            formations en ligne et je bâtis des projets personnels pour
            renforcer l'application de mes compétences.
          </p>
        </section>

        <section className="space-y-4 text-zinc-600 md:pt-12 pt-8 border-t border-zinc-200">
          <h2 className="opacity-60">Info</h2>
          <p className="text-pretty ">
            Habitant à Montréal, Canada. Bilingue français/anglais. J'utilise
            des outils comme{" "}
            <span className="font-medium text-zinc-700">
              Excel, SQL, Notion, GitHub
            </span>{" "}
            et <span className="font-medium text-zinc-700">ChatGPT</span> pour
            analyser des données et créer des visualisations.
          </p>
        </section>

        <section className="space-y-4 text-zinc-600 md:pt-12 pt-8 border-t border-zinc-200">
          <CardStack lang="fr" />
        </section>

        <footer className="w-full flex justify-center pt-8 md:pt-12">
          <Link
            href="/en"
            className="hover:underline text-xs text-zinc-600  underline-offset-3"
          >
            Read in English
          </Link>
        </footer>
      </main>
    </div>
  );
}
