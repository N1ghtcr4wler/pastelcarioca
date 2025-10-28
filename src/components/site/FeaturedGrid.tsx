

import coxinhas from "@/assets/destaque-coxinhas.png";
import bolinha from "@/assets/destaque-bolinha.jpg";
import risole from "@/assets/destaque-risole.png";
import croquetas from "@/assets/destaque-croquetas.jpg";

const items = [{
  img: coxinhas,
  title: "Coxinha Bogotá",
  desc: "La mejor coxinha a domicilio Bogotá. Masa ligera y crujiente con relleno de pollo sazonado. Perfecta para eventos, fiestas y novenas.",
  alt: "coxinha a domicilio Bogotá - doradas y crujientes con relleno de pollo"
}, {
  img: bolinha,
  title: "Bolitas de queso vegetarianas Bogotá",
  desc: "Opción vegetariana ideal para todos. Queso fundido envuelto en capa dorada. Perfectas para pasabocas a domicilio Bogotá.",
  alt: "bolitas de queso vegetarianas Bogotá - doradas con queso fundido"
}, {
  img: risole,
  title: "Risoles de jamón y queso",
  desc: "Tamaño perfecto para eventos y celebraciones. Masa suave con toque crocante y relleno cremoso que conquista.",
  alt: "mini coxinha para fiestas Bogotá - bocados perfectos para eventos"
}, {
  img: croquetas,
  title: "Pasabocas para eventos Bogotá",
  desc: "Croquetas crocantes y jugosas con carne sazonada. Ideales para coffee breaks, cumpleaños y reuniones corporativas.",
  alt: "pasabocas para eventos Bogotá - croquetas doradas y crujientes"
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
