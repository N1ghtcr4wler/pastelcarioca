import { Button } from "@/components/ui/button";

const WA_MAIN = "https://wa.me/573244524438?text=Hola%21%20Quiero%20Coxinhas%21";

const categories: { name: string; items: string[] }[] = [
  { name: "Coxinhas", items: ["Pollo clásico", "Queso & cebollín"] },
  { name: "Fritos", items: ["Pastel de carne", "Bolinha de queso"] },
  { name: "Assados", items: ["Empadinha", "Esfiha de pollo"] },
  { name: "Veggie", items: ["Coxinha de yuca & queso", "Pastel de palmito"] },
  { name: "Combos", items: ["Combo 10 und.", "Combo fiesta"] },
  { name: "Bebidas", items: ["Guaraná", "Limonada casera"] },
  { name: "Postres", items: ["Brigadeiro", "Quindim"] },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold">Menú</h2>
        <p className="text-muted-foreground mt-2 max-w-prose">
          Armamos contigo según antojo y ocasión. Ejemplos de categorías previstas.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <article key={cat.name} className="rounded-lg border border-border/40 bg-card/60 p-5">
              <h3 className="font-semibold text-lg">{cat.name}</h3>
              <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside space-y-1">
                {cat.items.map((it) => (
                  <li key={it}>{it} — placeholder</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild size="lg" variant="whatsapp">
            <a href={WA_MAIN} target="_blank" rel="noopener noreferrer" aria-label="Pedir por WhatsApp">
              Pide tu antojo por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;