

import bolinha from "@/assets/destaque-bolinha.jpg";
import risole from "@/assets/destaque-risole.png";
import { getPublicAssetPath } from "@/lib/assets";

const items = [{
  img: getPublicAssetPath("/lovable-uploads/9d23cdb3-0a9f-4a98-aa17-69eef09f7c25.png"),
  title: "Coxinhas",
  desc: "Clásicas de pollo desmechado con toque casero.",
  alt: "Coxinhas doradas crujientes en plato de pizarra"
}, {
  img: bolinha,
  title: "Bolita de queso",
  desc: "Cada bolita es una explosión de queso fundido envuelta en una capa dorada que cruje al primer bocado.",
  alt: "Bolitas de queso doradas y crujientes con queso fundido"
}, {
  img: risole,
  title: "Risole",
  desc: "Masa ligera y suave con un toque crocante, relleno cremoso y sabor envolvente. Un snack que conquista desde el primer mordisco.",
  alt: "Risoles dorados y crujientes con relleno cremoso de jamón y queso"
}, {
  img: getPublicAssetPath("/lovable-uploads/3c167b7d-feb3-4925-b6ee-3e1f517de3d5.png"),
  title: "Pão de queijo",
  desc: "Quesitos esponjosos, adictivos y sin culpa.",
  alt: "Pão de queijo en cuenco rústico sobre pizarra"
}];
const FeaturedGrid = () => {
  return <section id="destacados" className="py-16 subtle-texture">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold">Antojos destacados</h2>
        <p className="text-muted-foreground mt-2 max-w-prose">Crujientes, calientitos y listos para compartir. El ritmo carioca en cada bocado.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(it => <article key={it.title} className="rounded-lg overflow-hidden border border-border/40 bg-card/60 hover:bg-card transition-colors">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.alt} className="size-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{it.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
              </div>
            </article>)}
        </div>
      </div>
    </section>;
};
export default FeaturedGrid;