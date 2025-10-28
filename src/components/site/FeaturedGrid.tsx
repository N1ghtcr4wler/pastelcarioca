

import coxinhas from "@/assets/destaque-coxinhas.png";
import bolinha from "@/assets/destaque-bolinha.jpg";
import risole from "@/assets/destaque-risole.png";
import croquetas from "@/assets/destaque-croquetas.jpg";
import salchicha from "@/assets/destaque-salchicha.png";

const items = [{
  img: coxinhas,
  title: "Coxinha Tradicional",
  desc: "Descubre el sabor incomparable de las coxinhas de masa ligera, y crujiente, y el relleno de pollo sazonado con nuestro toque secreto",
  alt: "coxinha a domicilio Bogotá - doradas y crujientes con relleno de pollo"
}, {
  img: bolinha,
  title: "Bolitas de queso",
  desc: "Opción vegetariana ideal para todos. Queso fundido envuelto en capa dorada que cruje al primer bocado. Perfectas para compartir.",
  alt: "bolitas de queso vegetarianas Bogotá - doradas con queso fundido"
}, {
  img: risole,
  title: "Risoles de jamón y queso",
  desc: "Tamaño perfecto para eventos y celebraciones. Masa suave con toque crocante y relleno cremoso que conquista.",
  alt: "mini coxinha para fiestas Bogotá - bocados perfectos para eventos"
}, {
  img: croquetas,
  title: "Croquetas de carne",
  desc: "Croquetas crocantes y jugosas con carne sazonada. Ideales para coffee breaks, cumpleaños y reuniones corporativas.",
  alt: "pasabocas para eventos Bogotá - croquetas doradas y crujientes"
}, {
  img: salchicha,
  title: "Envuelto de salchicha",
  desc: "El Envuelto de salchicha es un aperitivo popular en Brasil, conocido por su masa crujiente y relleno sabroso. Un clásico amado por los niños, es el aperitivo que no puede faltar en fiestas infantiles.",
  alt: "envuelto de salchicha para fiestas Bogotá - aperitivo brasileiro crujiente"
}];
const FeaturedGrid = () => {
  return <section id="destacados" className="py-16 subtle-texture">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold">Antojos destacados</h2>
        <p className="text-muted-foreground mt-2 max-w-prose">Crujientes, calientitos y listos para compartir. El ritmo carioca en cada bocado.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
