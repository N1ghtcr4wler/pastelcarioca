const AboutSection = () => {
  return (
    <section id="sobre" className="py-16">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-semibold">Sobre nosotros</h2>
        <p className="text-muted-foreground mt-2 max-w-prose">
          Origen carioca, ritmo en la mesa. Hacemos cada pedido al momento y cuidamos que llegue perfecto a tu puerta o congelados para que los disfrutes a su proprio tiempo. Somos una empresa con alma brasileña y corazon Colombiano: Calidez casera, enfocada en snacks hechos al pedido. Combinamos autenticidad y cercanía para almuerzos rápidos, meriendas sabrosas y catering de eventos en Bogotá.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-lg border border-border/40 bg-card/60 p-5">
            <h3 className="font-semibold text-lg">Misión</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Acercar la alegría carioca a Bogotá con snacks hechos al momento, sabrosos y responsables con las personas y el planeta.
            </p>
          </article>

          <article className="rounded-lg border border-border/40 bg-card/60 p-5">
            <h3 className="font-semibold text-lg">Visión</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Ser la referencia de cocina de pasabocas brasileña en Colombia, celebrando la diversidad latinoamericana con sabor, calidez y sostenibilidad.
            </p>
          </article>

          <article className="rounded-lg border border-border/40 bg-card/60 p-5 md:col-span-2">
            <h3 className="font-semibold text-lg">Nuestros valores</h3>
            <ul className="mt-2 space-y-3 list-disc pl-5 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Frescura honesta.</span> Cocinamos al pedido, en lotes pequeños y con tiempos claros, para que recibas siempre el mejor punto y sabor.
              </li>
              <li>
                <span className="font-medium text-foreground">Cuidado en cada entrega.</span> Empacamos con cajas propias para que disfrutes la experiencia tal como la pensamos.
              </li>
              <li>
                <span className="font-medium text-foreground">Sabor con responsabilidad.</span> Gestionamos y reciclamos nuestros aceites y trabajamos con prácticas que minimizan el impacto ambiental sin sacrificar el gusto.
              </li>
              <li>
                <span className="font-medium text-foreground">Raíz latinoamericana.</span> Usamos ingredientes locales y celebramos los sabores de nuestra región con un toque carioca que se siente en cada bocado.
              </li>
            </ul>
          </article>
        </div>

        <p className="mt-8 max-w-prose">
          ¿Listo para ponerle ritmo brasileño a tu día? Pide tus favoritos y deja que la alegría llegue a tu puerta.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;