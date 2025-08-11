import coxinhas from "@/assets/destaque-coxinhas.jpg";
import pastel from "@/assets/destaque-pastel.jpg";
import kibbeh from "@/assets/destaque-kibbeh.jpg";
import pao from "@/assets/destaque-pao-de-queijo.jpg";

const items = [
  {
    img: coxinhas,
    title: "Coxinhas",
    desc: "Clásicas de pollo desmechado con toque casero.",
    alt: "Coxinhas doradas crujientes en plato de pizarra",
  },
  {
    img: pastel,
    title: "Pastel",
    desc: "Masa ligera, rellenos sabrosos que calientan el alma.",
    alt: "Pastel brasileño frito abierto mostrando su relleno",
  },
  {
    img: kibbeh,
    title: "Kibbeh",
    desc: "Croqueta crujiente con especias y limón.",
    alt: "Kibbeh crujiente con gajo de limón y perejil",
  },
  {
    img: pao,
    title: "Pão de queijo",
    desc: "Quesitos esponjosos, adictivos y sin culpa.",
    alt: "Pão de queijo en cuenco rústico sobre pizarra",
  },
];

const FeaturedGrid = () => {
  return (
    <section id="destacados" className="py-16 subtle-texture">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold">Antojos destacados</h2>
        <p className="text-muted-foreground mt-2 max-w-prose">
          Crocantes, calientitos y listos para compartir. El ritmo carioca en cada bocado.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <article key={it.title} className="rounded-lg overflow-hidden border border-border/40 bg-card/60 hover:bg-card transition-colors">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.alt}
                  className="size-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{it.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;