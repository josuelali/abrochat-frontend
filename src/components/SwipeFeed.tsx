import IdeaCard from "@/components/IdeaCard";
import { ideas } from "@/data/ideas";

const sectionTitles = {
  estrategia: "Estrategia y dirección",
  ejecucion: "Ejecución y sistemas",
  conversion: "Conversión y contenido",
} as const;

export default function SwipeFeed() {
  const featuredIdeas = ideas.filter((idea) => idea.featured);
  const groupedIdeas = {
    estrategia: ideas.filter((idea) => idea.category === "estrategia" && !idea.featured),
    ejecucion: ideas.filter((idea) => idea.category === "ejecucion" && !idea.featured),
    conversion: ideas.filter((idea) => idea.category === "conversion" && !idea.featured),
  };

  return (
    <main className="min-h-screen bg-[#1a0326] text-white">
      <div className="mx-auto max-w-7xl px-4 pt-36 pb-10 md:px-6 md:pt-40 lg:px-8">
        <section className="mx-auto mb-10 max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Disfruta de tus asistentes especializados
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            Elige el asistente que necesitas, entra con un clic y empieza a ejecutar tareas
            de IA aplicada, automatización, contenido y conversión.
          </p>
        </section>

        {featuredIdeas.length > 0 && (
          <section className="mb-12">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-300">
                  Destacados
                </p>
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Los asistentes clave
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredIdeas.map((idea) => (
                <IdeaCard key={idea.id} idea={idea} />
              ))}
            </div>
          </section>
        )}

        {(Object.keys(groupedIdeas) as Array<keyof typeof groupedIdeas>).map((category) => {
          const items = groupedIdeas[category];
          if (!items.length) return null;

          return (
            <section key={category} className="mb-12">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Colección
                </p>
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  {sectionTitles[category]}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {items.map((idea) => (
                  <IdeaCard key={idea.id} idea={idea} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}