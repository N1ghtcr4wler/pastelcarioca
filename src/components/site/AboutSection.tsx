const AboutSection = () => {
  return (
    <section id="sobre" className="py-16">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-semibold">Sobre nosotros</h2>
        <p className="text-muted-foreground mt-2 max-w-prose">
          Origen carioca, ritmo en la mesa. Hacemos cada pedido al momento y cuidamos que llegue perfecto a tu puerta.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="rounded-lg border border-border/40 bg-card/60 p-5">
            <h3 className="font-semibold text-lg">Hecho al momento</h3>
            <p className="text-sm text-muted-foreground mt-1">Masa crujiente, rellenos jugosos y sazón casera brasileña.</p>
          </article>
          <article className="rounded-lg border border-border/40 bg-card/60 p-5">
            <h3 className="font-semibold text-lg">Cuidado en la entrega</h3>
            <p className="text-sm text-muted-foreground mt-1">Empaque térmico y manejo atento para que llegue como recién hecho.</p>
          </article>
          <article className="rounded-lg border border-border/40 bg-card/60 p-5">
            <h3 className="font-semibold text-lg">Valores</h3>
            <p className="text-sm text-muted-foreground mt-1">Ingredientes honestos, sabor carioca y alegría en cada bocado.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;